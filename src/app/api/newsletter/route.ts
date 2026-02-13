import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';
import nodemailer from 'nodemailer';

import { projectId, dataset, apiVersion } from '@/lib/sanity';

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.SANITY_API_TOKEN, // Protected token for write operations
  useCdn: false,
});

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // 1. Check if already subscribed
    const existing = await client.fetch(
      `*[_type == "subscriber" && email == $email][0]`,
      { email }
    );

    if (existing) {
      if (existing.status !== 'active') {
        // Reactivate
        await client.patch(existing._id).set({ status: 'active', subscribedAt: new Date().toISOString() }).commit();
        return NextResponse.json({ message: 'Welcome back! You have been re-subscribed.' });
      }
      return NextResponse.json({ message: 'You are already subscribed!' });
    }

    // 2. Create new subscriber
    await client.create({
      _type: 'subscriber',
      email,
      subscribedAt: new Date().toISOString(),
      status: 'active',
    });

    // 3. Send Welcome Email
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"Testriq QA" <${process.env.SMTP_USER}>`,
        to: email,
        subject: 'Welcome to Testriq QA Newsletter!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
            <div style="text-align: center; margin-bottom: 20px;">
              <h1 style="color: #3b82f6;">Welcome to Testriq QA!</h1>
            </div>
            <p style="color: #333; font-size: 16px; line-height: 1.5;">
              Hi there,
            </p>
            <p style="color: #333; font-size: 16px; line-height: 1.5;">
              Thank you for subscribing to our newsletter! You've joined a community of 50,000+ QA professionals. 
              We'll keep you updated with the latest testing tips, industry news, and exclusive resources.
            </p>
            <div style="text-align: center; margin-top: 30px; margin-bottom: 30px;">
              <a href="https://testriq.com" style="background-color: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
                Go to Home Page
              </a>
            </div>
            <p style="color: #666; font-size: 14px; text-align: center; margin-top: 20px;">
              &copy; ${new Date().getFullYear()} Testriq QA. All rights reserved.
            </p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);
      // We don't fail the request if email fails, as subscription was successful
    }

    return NextResponse.json({ message: 'Successfully subscribed to our newsletter!' });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
