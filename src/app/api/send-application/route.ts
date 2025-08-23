import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const fullName = formData.get('fullName') as string;
    const mobileNumber = formData.get('mobileNumber') as string;
    const emailAddress = formData.get('emailAddress') as string;
    const currentLocation = formData.get('currentLocation') as string;
    const noticePeriod = formData.get('noticePeriod') as string;
    const role = formData.get('role') as string;
    const totalYearsExperience = formData.get('totalYearsExperience') as string;
    const currentCTC = formData.get('currentCTC') as string;
    const resume = formData.get('resume') as File;

    // Create transporter (you'll need to configure this with your email service)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to HR
    const hrEmailContent = `
      <h2>New Job Application Received</h2>
      <p><strong>Position:</strong> ${role}</p>
      <p><strong>Applicant Details:</strong></p>
      <ul>
        <li><strong>Full Name:</strong> ${fullName}</li>
        <li><strong>Email:</strong> ${emailAddress}</li>
        <li><strong>Mobile:</strong> ${mobileNumber}</li>
        <li><strong>Current Location:</strong> ${currentLocation}</li>
        <li><strong>Notice Period:</strong> ${noticePeriod}</li>
        <li><strong>Total Experience:</strong> ${totalYearsExperience} years</li>
        <li><strong>Current CTC:</strong> ${currentCTC} LPA</li>
      </ul>
      <p>Please find the resume attached.</p>
    `;

    // Email to applicant
    const applicantEmailContent = `
      <h2>Thank you for your application!</h2>
      <p>Dear ${fullName},</p>
      <p>Thank you for applying for the position of <strong>${role}</strong> at Testriq.</p>
      <p>We have received your application and our HR team will review it shortly. We will get back to you within 2-3 business days.</p>
      <p>Application Details:</p>
      <ul>
        <li><strong>Position:</strong> ${role}</li>
        <li><strong>Application Date:</strong> ${new Date().toLocaleDateString()}</li>
        <li><strong>Experience:</strong> ${totalYearsExperience} years</li>
      </ul>
      <p>Best regards,<br>Testriq HR Team</p>
    `;

    // Convert resume to buffer for attachment
    let resumeBuffer: Buffer | undefined;
    if (resume) {
      const arrayBuffer = await resume.arrayBuffer();
      resumeBuffer = Buffer.from(arrayBuffer);
    }

    // Send email to HR
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'prakash.mishra@testriq.com',
      subject: `New Job Application - ${role} - ${fullName}`,
      html: hrEmailContent,
      attachments: resumeBuffer ? [{
        filename: resume.name,
        content: resumeBuffer,
        contentType: 'application/pdf'
      }] : []
    });

    // Send confirmation email to applicant
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: emailAddress,
      subject: `Application Received - ${role} Position at Testriq`,
      html: applicantEmailContent,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully! You will receive a confirmation email shortly.' 
    });

  } catch (error) {
    console.error('Error sending emails:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to submit application. Please try again.' 
    }, { status: 500 });
  }
}

