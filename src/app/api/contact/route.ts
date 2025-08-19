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
  source?: string; // Hidden field for source tracking
}

// Helper function to format company stage
function formatCompanyStage(stage: string): string {
  const stageMap: { [key: string]: string } = {
    'startup': 'Startup',
    'early_stage_startup': 'Early stage startup',
    'mid_stage_startup': 'Mid stage startup',
    'late_stage_startup': 'Late stage startup',
    'enterprise': 'Enterprise',
    'small_business': 'Small business',
    'medium_business': 'Medium business',
    'large_business': 'Large business',
    'government': 'Government',
    'non_profit': 'Non-profit',
    'other': 'Other'
  };
  
  return stageMap[stage] || stage;
}

// Helper function to format how did you hear
function formatHowDidYouHear(source: string): string {
  const sourceMap: { [key: string]: string } = {
    'google_search': 'Google search',
    'social_media': 'Social media',
    'referral': 'Referral',
    'linkedin': 'LinkedIn',
    'facebook': 'Facebook',
    'twitter': 'Twitter',
    'instagram': 'Instagram',
    'word_of_mouth': 'Word of mouth',
    'conference': 'Conference',
    'blog': 'Blog',
    'advertisement': 'Advertisement',
    'other': 'Other'
  };
  
  return sourceMap[source] || source;
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

    // Add source field if not provided
    if (!body.source) {
      body.source = 'Website Contact Us Page';
    }

    // Format the data for better readability
    const formattedData = {
      ...body,
      companyStage: formatCompanyStage(body.companyStage),
      howDidYouHear: formatHowDidYouHear(body.howDidYouHear)
    };

    // Run all operations in parallel for better performance
    const operations = [
      storeInGoogleSheets(formattedData),
      sendProfessionalNotification(formattedData),
      sendClientConfirmation(formattedData)
    ];

    // Execute all operations concurrently
    const results = await Promise.allSettled(operations);
    
    // Log any failures but don't fail the entire request
    results.forEach((result, index) => {
      if (result.status === 'rejected') {
        const operationNames = ['Google Sheets', 'Professional notification', 'Client confirmation'];
        console.error(`${operationNames[index]} error:`, result.reason);
      }
    });

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

    // Prepare row data with source field
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const rowData = [
      timestamp,
      data.fullName,
      data.businessEmail,
      data.businessPhone,
      data.companyStage,
      data.howDidYouHear,
      data.message,
      data.source || 'Website Contact Us Page'
    ];

    // Check if sheet has headers, if not add them
    const headerRange = 'A1:H1';
    const headerResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: headerRange,
    });

    if (!headerResponse.data.values || headerResponse.data.values.length === 0) {
      // Add headers if sheet is empty
      const headers = ['Timestamp', 'Full Name', 'Business Email', 'Business Phone', 'Company Stage', 'How Did You Hear', 'Message', 'Source'];
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
      range: 'A:H',
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
    const FROM_EMAIL = process.env.FROM_EMAIL;
    
    // Support multiple admin emails - comma separated
    const PROFESSIONAL_EMAILS = process.env.PROFESSIONAL_EMAIL || process.env.ADMIN_EMAILS;

    if (!SMTP_USER || !SMTP_PASS || !PROFESSIONAL_EMAILS) {
      console.log('Email configuration missing for professional notification');
      return;
    }

    // Split emails by comma and trim whitespace
    const emailList = PROFESSIONAL_EMAILS.split(',').map(email => email.trim());

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
      from: `"Testriq Contact Form" <${FROM_EMAIL}>`,
      to: emailList.join(', '), // Send to all admin emails
      subject: `New Contact Form Submission from ${data.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px; background: #f3f4f6; color: white; border-radius: 8px 8px 0 0;">
            <img src="https://testrq-3-0.vercel.app/images/testriq-logo.jpg" alt="Testriq QA Lab" style="height: 40px; margin-bottom: 10px;" />
            <h2 style="margin: 0; font-size: 24px; color: #25a8e0;">New Contact Form Submission</h2>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Contact Details:</h3>
            <p><strong>Full Name:</strong> ${data.fullName}</p>
            <p><strong>Business Email:</strong> ${data.businessEmail}</p>
            <p><strong>Business Phone:</strong> ${data.businessPhone}</p>
            <p><strong>Company Stage:</strong> ${data.companyStage}</p>
            <p><strong>How Did You Hear:</strong> ${data.howDidYouHear}</p>
            <p><strong>Source:</strong> ${data.source || 'Website Contact Us Page'}</p>
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
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #f3f4f6;">
            <img src="https://testrq-3-0.vercel.app/images/testriq-logo.jpg" alt="Testriq QA Lab" style="height: 30px; margin-bottom: 10px;" />
            <p style="color: #0000; font-size: 14px; margin: 0;">
              This email was sent from the Testriq QA Lab contact form.
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Professional notification sent successfully to:', emailList.join(', '));

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

    // Email content with logo
    const mailOptions = {
      from: `"Testriq QA Lab" <${SMTP_USER}>`,
      to: data.businessEmail,
      subject: 'Thank you for contacting Testriq QA Lab',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%); color: white; border-radius: 8px 8px 0 0;">
            <img src="https://testriq.com/testriq-logo-white.png" alt="Testriq QA Lab" style="height: 50px; margin-bottom: 15px;" />
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
              <img src="https://testriq.com/testriq-logo.png" alt="Testriq QA Lab" style="height: 35px; margin-bottom: 15px;" />
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
