import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

// Types for form data
interface ElearningContactFormData {
  fullName: string;
  businessEmail: string;
  businessPhone: string;
  institution: string;
  platformType: string;
  numberOfUsers: string;
  message: string;
  source?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ElearningContactFormData = await request.json();
    
    // Validate required fields
    const { fullName, businessEmail, businessPhone, institution, platformType, numberOfUsers, message } = body;
    
    if (!fullName || !businessEmail || !businessPhone || !institution || !platformType || !numberOfUsers || !message) {
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
      body.source = 'E-learning Testing Services Page';
    }

    // Format the data for better readability
    const formattedData: ElearningContactFormData = {
      ...body,
      source: body.source || 'E-learning Testing Services Page',
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

async function storeInGoogleSheets(data: ElearningContactFormData) {
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
    } );

    // Initialize Google Sheets API
    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare row data for E-learning tab
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const rowData = [
      timestamp,
      data.fullName,
      data.businessEmail,
      data.businessPhone,
      data.institution,
      data.platformType,
      data.numberOfUsers,
      data.message,
      data.source || 'E-learning Testing Services Page'
    ];

    // Use E-learning specific sheet tab
    const sheetName = 'E-learning';
    const range = `${sheetName}!A:I`;

    // Check if E-learning sheet exists and has headers
    try {
      const headerRange = `${sheetName}!A1:I1`;
      const headerResponse = await sheets.spreadsheets.values.get({
        spreadsheetId: GOOGLE_SHEET_ID,
        range: headerRange,
      });

      if (!headerResponse.data.values || headerResponse.data.values.length === 0) {
        // Add headers if sheet is empty
        const headers = ['Timestamp', 'Full Name', 'Business Email', 'Business Phone', 'Institution/Organization', 'Platform Type', 'Number of Users', 'Testing Needs', 'Source'];
        await sheets.spreadsheets.values.update({
          spreadsheetId: GOOGLE_SHEET_ID,
          range: headerRange,
          valueInputOption: 'RAW',
          requestBody: {
            values: [headers],
          },
        });
      }
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // If sheet doesn't exist, create it
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: GOOGLE_SHEET_ID,
        requestBody: {
          requests: [
            {
              addSheet: {
                properties: {
                  title: sheetName,
                },
              },
            },
          ],
        },
      });

      // Add headers to new sheet
      const headers = ['Timestamp', 'Full Name', 'Business Email', 'Business Phone', 'Institution/Organization', 'Platform Type', 'Number of Users', 'Testing Needs', 'Source'];
      await sheets.spreadsheets.values.update({
        spreadsheetId: GOOGLE_SHEET_ID,
        range: `${sheetName}!A1:I1`,
        valueInputOption: 'RAW',
        requestBody: {
          values: [headers],
        },
      });
    }

    // Append the new row
    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: range,
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowData],
      },
    });

    console.log('E-learning data stored in Google Sheets successfully');
  } catch (error) {
    console.error('Google Sheets storage failed:', error);
    throw error;
  }
}

async function sendProfessionalNotification(data: ElearningContactFormData) {
  try {
    // Email configuration from environment variables
    const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
    const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587');
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const FROM_EMAIL = 'contact@testriq.com';
    
    // Use the same environment variables as the main contact form
    const PROFESSIONAL_EMAIL_TO = process.env.PROFESSIONAL_EMAIL_TO || process.env.PROFESSIONAL_EMAIL || process.env.ADMIN_EMAILS;
    const PROFESSIONAL_EMAIL_CC = process.env.PROFESSIONAL_EMAIL_CC;
    const PROFESSIONAL_EMAIL_BCC = process.env.PROFESSIONAL_EMAIL_BCC;

    if (!SMTP_USER || !SMTP_PASS || !PROFESSIONAL_EMAIL_TO) {
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
    const mailOptions: nodemailer.SendMailOptions = {
      from: `"Testriq E-learning Contact Form" <${FROM_EMAIL}>`,
      to: PROFESSIONAL_EMAIL_TO.split(',').map(email => email.trim()).join(', '),
      subject: `New E-learning Contact Form Submission from ${data.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px; background: #f3f4f6; color: white; border-radius: 8px 8px 0 0;">
            <img src="https://testrq-3-0.vercel.app/images/testriq-logo.jpg" alt="Testriq QA Lab" style="height: 40px; margin-bottom: 10px;" />
            <h2 style="margin: 0; font-size: 24px; color: #25a8e0;">New E-learning Contact Form Submission</h2>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Contact Details:</h3>
            <p><strong>Full Name:</strong> ${data.fullName}</p>
            <p><strong>Business Email:</strong> ${data.businessEmail}</p>
            <p><strong>Business Phone:</strong> ${data.businessPhone}</p>
            <p><strong>Institution/Organization:</strong> ${data.institution}</p>
            <p><strong>Platform Type:</strong> ${data.platformType}</p>
            <p><strong>Number of Users:</strong> ${data.numberOfUsers}</p>
            <p><strong>Source:</strong> ${data.source || 'E-learning Testing Services Page'}</p>
          </div>
          
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #92400e; margin-top: 0;">Testing Needs:</h3>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
          
          <div style="background-color: #e0f2fe; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #0369a1;">
              <strong>Submitted at:</strong> ${new Date( ).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </p>
          </div>

         <div style="background-color: #f3f4f6; padding: 25px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
            <div style="text-align: center; color: #6b7280; font-size: 14px; line-height: 1.5;">
              <img src="https://testrq-3-0.vercel.app/images/testriq-logo.jpg" alt="Testriq QA Lab" style="height: 35px; margin-bottom: 15px;" />
              <p style="margin: 0 0 5px 0;">This email was sent from the Testriq QA Lab e-learning contact form.</p>
              
            </div>
          </div>

        </div>
      `,
    };

    if (PROFESSIONAL_EMAIL_CC ) {
      mailOptions.cc = PROFESSIONAL_EMAIL_CC.split(',').map(email => email.trim()).join(', ');
    }
    if (PROFESSIONAL_EMAIL_BCC) {
      mailOptions.bcc = PROFESSIONAL_EMAIL_BCC.split(',').map(email => email.trim()).join(', ');
    }

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Professional notification sent successfully to:', mailOptions.to);
    if (mailOptions.cc) console.log('CC:', mailOptions.cc);
    if (mailOptions.bcc) console.log('BCC:', mailOptions.bcc);

  } catch (error) {
    console.error('Professional notification failed:', error);
    throw error;
  }
}

async function sendClientConfirmation(data: ElearningContactFormData) {
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
      subject: 'Thank you for contacting Testriq QA Lab - E-learning Testing Services',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="text-align: center; padding: 20px; background: #f3f4f6; color: white; border-radius: 8px 8px 0 0;">
            <img src="https://testrq-3-0.vercel.app/images/testriq-logo.jpg" alt="Testriq QA Lab" style="height: 50px; margin-bottom: 15px;" />
            <p style="margin: 10px 0 0 0; font-size: 16px; color: #25a8e0; opacity: 0.9;">Quality Excellence Through Expert Testing</p>
          </div>
          
          <div style="padding: 30px; background-color: #ffffff; border: 1px solid #e5e7eb; border-top: none;">
            <h2 style="color: #2563eb; margin-top: 0;">Dear ${data.fullName},</h2>
            
            <p style="line-height: 1.6; margin-bottom: 20px;">
              Thank you for reaching out to Testriq QA Lab regarding our e-learning testing services. We have received your inquiry and appreciate your interest in optimizing your educational platform.
            </p>
            
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; margin: 25px 0;">
              <h3 style="color: #1e40af; margin-top: 0; margin-bottom: 15px;">Your Submission Summary:</h3>
              <div style="display: grid; gap: 8px;">
                <p style="margin: 0;"><strong>Full Name:</strong> ${data.fullName}</p>
                <p style="margin: 0;"><strong>Business Email:</strong> ${data.businessEmail}</p>
                <p style="margin: 0;"><strong>Business Phone:</strong> ${data.businessPhone}</p>
                <p style="margin: 0;"><strong>Institution/Organization:</strong> ${data.institution}</p>
                <p style="margin: 0;"><strong>Platform Type:</strong> ${data.platformType}</p>
                <p style="margin: 0;"><strong>Number of Users:</strong> ${data.numberOfUsers}</p>
              </div>
            </div>
            
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h4 style="color: #92400e; margin-top: 0;">Your Testing Needs:</h4>
              <p style="margin: 0; white-space: pre-wrap;">"${data.message}"</p>
            </div>
            
            <div style="background-color: #dcfce7; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h3 style="color: #166534; margin-top: 0;">What Happens Next?</h3>
              <p style="margin: 0; line-height: 1.6;">
                Our e-learning testing specialists will review your inquiry and get back to you <strong>within 2 hours</strong> during business hours (Monday-Friday, 9 AM - 6 PM IST ) with a customized testing strategy for your educational platform.
              </p>
            </div>
            
            <div style="margin: 30px 0;">
              <h3 style="color: #2563eb;">In the meantime, feel free to:</h3>
              <ul style="line-height: 1.8; padding-left: 20px;">
                <li>Visit our website: <a href="https://testriq.com" style="color: #2563eb;">https://testriq.com</a></li>
                <li>Learn more about our e-learning testing services: <a href="https://testriq.com/e-learning-testing-services" style="color: #2563eb;">E-learning Testing</a></li>
                <li>Follow us on LinkedIn: <a href="https://www.linkedin.com/company/testriq-qa-lab" style="color: #2563eb;">Testriq QA Lab</a></li>
                <li>Call us directly: <a href="tel:+919152929343" style="color: #2563eb;">(+91 ) 915-2929-343</a></li>
              </ul>
            </div>
            
            <p style="line-height: 1.6; margin-bottom: 30px;">
              We look forward to helping you achieve better learning outcomes, higher engagement, and improved accessibility through comprehensive e-learning testing.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <p style="margin: 0; font-size: 18px; color: #2563eb; font-weight: 600;">Best regards,</p>
              <p style="margin: 5px 0 0 0; color: #4b5563;">The Testriq QA Lab Team</p>
            </div>
          </div>

          <div style="background-color: #f3f4f6; padding: 25px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
            <div style="text-align: center; color: #6b7280; font-size: 14px; line-height: 1.5;">
              <img src="https://testrq-3-0.vercel.app/images/testriq-logo.jpg" alt="Testriq QA Lab" style="height: 35px; margin-bottom: 15px;" />
              <p style="margin: 0 0 5px 0;">Testriq QA Lab LLP - Professional Software Testing Services</p>
              <p style="margin: 0 0 10px 0;">📧 contact@testriq.com | 📞 (+91 ) 915-2929-343</p>
              <p style="margin: 0; font-size: 12px; color: #9ca3af;">
                This is an automated confirmation email. Please do not reply to this email.
              </p>
            </div>
          </div>

        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Client confirmation email sent successfully to:', mailOptions.to);
  } catch (error) {
    console.error('Client confirmation email failed:', error);
    throw error;
  }
}
