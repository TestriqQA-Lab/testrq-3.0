import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

// Types for form data
interface ContactFormData {
  fullName: string;
  businessEmail: string;
  businessPhone: string;
  companyStage: string;
  howDidYouHear: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    // Validate required fields
    const { fullName, businessEmail, businessPhone, companyStage, howDidYouHear, message } = body;
    
    if (!fullName || !businessEmail || !businessPhone || !companyStage || !howDidYouHear || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(businessEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    try {
      // Store data in Google Sheets
      await storeInGoogleSheets(body);
    } catch (error) {
      console.error('Google Sheets error:', error);
      // Continue even if Google Sheets fails
    }

    try {
      // Send professional notification email
      await sendProfessionalNotification(body);
    } catch (error) {
      console.error('Professional notification error:', error);
      // Continue even if email fails
    }

    try {
      // Send client confirmation email
      await sendClientConfirmation(body);
    } catch (error) {
      console.error('Client confirmation error:', error);
      // Continue even if email fails
    }

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function storeInGoogleSheets(data: ContactFormData) {
  try {
    // Google Sheets configuration
    const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
    const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;

    if (!GOOGLE_PRIVATE_KEY || !GOOGLE_CLIENT_EMAIL || !GOOGLE_SHEET_ID) {
      console.log('Google Sheets credentials not configured');
      return;
    }

    // Create JWT auth client
    const auth = new google.auth.JWT({
      email: GOOGLE_CLIENT_EMAIL,
      key: GOOGLE_PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // Initialize Google Sheets API
    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare row data
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const rowData = [
      timestamp,
      data.fullName,
      data.businessEmail,
      data.businessPhone,
      data.companyStage,
      data.howDidYouHear,
      data.message
    ];

    // Check if sheet has headers, if not add them
    const headerRange = 'A1:G1';
    const headerResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: headerRange,
    });

    if (!headerResponse.data.values || headerResponse.data.values.length === 0) {
      // Add headers if sheet is empty
      const headers = ['Timestamp', 'Full Name', 'Business Email', 'Business Phone', 'Company Stage', 'How Did You Hear', 'Message'];
      await sheets.spreadsheets.values.update({
        spreadsheetId: GOOGLE_SHEET_ID,
        range: headerRange,
        valueInputOption: 'RAW',
        requestBody: {
          values: [headers],
        },
      });
    }

    // Append the new row
    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: 'A:G',
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowData],
      },
    });

    console.log('Data stored in Google Sheets successfully');
  } catch (error) {
    console.error('Google Sheets storage failed:', error);
    throw error;
  }
}

async function sendProfessionalNotification(data: ContactFormData) {
  try {
    // Email configuration from environment variables
    const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
    const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587');
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const PROFESSIONAL_EMAIL = process.env.PROFESSIONAL_EMAIL;

    if (!SMTP_USER || !SMTP_PASS || !PROFESSIONAL_EMAIL) {
      console.log('Email configuration missing for professional notification');
      return;
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    } as nodemailer.TransportOptions);

    // Email content
    const mailOptions = {
      from: `"Testriq Contact Form" <${SMTP_USER}>`,
      to: PROFESSIONAL_EMAIL,
      subject: `New Contact Form Submission from ${data.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Contact Details:</h3>
            <p><strong>Full Name:</strong> ${data.fullName}</p>
            <p><strong>Business Email:</strong> ${data.businessEmail}</p>
            <p><strong>Business Phone:</strong> ${data.businessPhone}</p>
            <p><strong>Company Stage:</strong> ${data.companyStage}</p>
            <p><strong>How Did You Hear:</strong> ${data.howDidYouHear}</p>
          </div>
          
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #92400e; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
          
          <div style="background-color: #e0f2fe; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #0369a1;">
              <strong>Submitted at:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              This email was sent from the Testriq QA Lab contact form.
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Professional notification sent successfully');

  } catch (error) {
    console.error('Professional notification failed:', error);
    throw error;
  }
}

async function sendClientConfirmation(data: ContactFormData) {
  try {
    // Email configuration from environment variables
    const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
    const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587');
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    if (!SMTP_USER || !SMTP_PASS) {
      console.log('Email configuration missing for client confirmation');
      return;
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    } as nodemailer.TransportOptions);

    // Email content
    const mailOptions = {
      from: `"Testriq QA Lab" <${SMTP_USER}>`,
      to: data.businessEmail,
      subject: 'Thank you for contacting Testriq QA Lab',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%); color: white; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">Testriq QA Lab</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Quality Excellence Through Expert Testing</p>
          </div>
          
          <div style="padding: 30px; background-color: #ffffff; border: 1px solid #e5e7eb; border-top: none;">
            <h2 style="color: #2563eb; margin-top: 0;">Dear ${data.fullName},</h2>
            
            <p style="line-height: 1.6; margin-bottom: 20px;">
              Thank you for reaching out to Testriq QA Lab. We have received your inquiry and appreciate your interest in our software testing services.
            </p>
            
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; margin: 25px 0;">
              <h3 style="color: #1e40af; margin-top: 0; margin-bottom: 15px;">Your Submission Summary:</h3>
              <div style="display: grid; gap: 8px;">
                <p style="margin: 0;"><strong>Full Name:</strong> ${data.fullName}</p>
                <p style="margin: 0;"><strong>Business Email:</strong> ${data.businessEmail}</p>
                <p style="margin: 0;"><strong>Business Phone:</strong> ${data.businessPhone}</p>
                <p style="margin: 0;"><strong>Company Stage:</strong> ${data.companyStage}</p>
                <p style="margin: 0;"><strong>How You Heard About Us:</strong> ${data.howDidYouHear}</p>
              </div>
            </div>
            
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h4 style="color: #92400e; margin-top: 0;">Your Message:</h4>
              <p style="margin: 0; white-space: pre-wrap;">"${data.message}"</p>
            </div>
            
            <div style="background-color: #dcfce7; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h3 style="color: #166534; margin-top: 0;">What Happens Next?</h3>
              <p style="margin: 0; line-height: 1.6;">
                Our team will review your inquiry and get back to you <strong>within 2 hours</strong> during business hours (Monday-Friday, 9 AM - 6 PM IST).
              </p>
            </div>
            
            <div style="margin: 30px 0;">
              <h3 style="color: #2563eb;">In the meantime, feel free to:</h3>
              <ul style="line-height: 1.8; padding-left: 20px;">
                <li>Visit our website: <a href="https://testriq.com" style="color: #2563eb;">https://testriq.com</a></li>
                <li>Follow us on LinkedIn: <a href="https://www.linkedin.com/company/testriq-qa-lab" style="color: #2563eb;">Testriq QA Lab</a></li>
                <li>Call us directly: <a href="tel:+919152929343" style="color: #2563eb;">(+91) 915-2929-343</a></li>
              </ul>
            </div>
            
            <p style="line-height: 1.6; margin-bottom: 30px;">
              We look forward to discussing how we can help you achieve quality excellence with our automation, manual, and performance testing services.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <p style="margin: 0; font-size: 18px; color: #2563eb; font-weight: bold;">Best regards,</p>
              <p style="margin: 5px 0 0 0; font-size: 16px; color: #1e40af;">The Testriq QA Lab Team</p>
            </div>
          </div>
          
          <div style="background-color: #f8fafc; padding: 25px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
            <div style="text-align: center; color: #6b7280; font-size: 14px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0; font-weight: bold; color: #374151;">Testriq QA Lab LLP</p>
              <p style="margin: 0 0 5px 0;">Office Number 2 & 3, 2nd Floor, Ashley Towers</p>
              <p style="margin: 0 0 5px 0;">Kanakia Rd, Vagad Nagar, Beverly Park</p>
              <p style="margin: 0 0 15px 0;">Mira Road East, Mira Bhayandar, Maharashtra 401107</p>
              
              <div style="border-top: 1px solid #d1d5db; padding-top: 15px; margin-top: 15px;">
                <p style="margin: 0 0 5px 0;">
                  <strong>Email:</strong> <a href="mailto:contact@testriq.com" style="color: #2563eb;">contact@testriq.com</a> | 
                  <strong>Phone:</strong> <a href="tel:+919152929343" style="color: #2563eb;">(+91) 915-2929-343</a>
                </p>
                <p style="margin: 0;">
                  <strong>Website:</strong> <a href="https://testriq.com" style="color: #2563eb;">https://testriq.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Client confirmation sent successfully');

  } catch (error) {
    console.error('Client confirmation failed:', error);
    throw error;
  }
}





