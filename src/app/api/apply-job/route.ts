import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const currentCompany = formData.get('currentCompany') as string;
    const currentCTC = formData.get('currentCTC') as string;
    const expectedCTC = formData.get('expectedCTC') as string;
    const skillsToolsFramework = formData.get('skillsToolsFramework') as string;
    const domainKnowledgeString = formData.get('domainKnowledge') as string;
    let domainKnowledge: string[] = [];
    if (domainKnowledgeString) {
      try {
        domainKnowledge = JSON.parse(domainKnowledgeString);
      } catch (e) {
        console.error("Failed to parse domainKnowledge JSON string:", e);
      }
    }
    const experience = formData.get('experience') as string;
    const currentRole = formData.get('currentRole') as string;
    const location = formData.get('location') as string;
    const noticePeriod = formData.get('noticePeriod') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const jobId = formData.get('jobId') as string;
    const resume = formData.get('resume') as File | null;

    if (!fullName || !email || !jobTitle || !resume) {
      return NextResponse.json({ message: 'Missing required fields: fullName, email, jobTitle, resume' }, { status: 400 });
    }

    // Convert resume to buffer for attachment
    let resumeBuffer: Buffer | undefined;
    if (resume) {
      const arrayBuffer = await resume.arrayBuffer();
      resumeBuffer = Buffer.from(arrayBuffer);
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Modern Admin Email Template
    const adminEmailHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Job Application - ${jobTitle}</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                line-height: 1.6;
                color: #333;
                background-color: #f8fafc;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 30px;
                text-align: center;
            }
            .header h1 {
                font-size: 24px;
                font-weight: 600;
                margin-bottom: 8px;
            }
            .header p {
                opacity: 0.9;
                font-size: 16px;
            }
            .content {
                padding: 30px;
            }
            .job-info {
                background: #f1f5f9;
                border-radius: 8px;
                padding: 20px;
                margin-bottom: 25px;
                border-left: 4px solid #667eea;
            }
            .job-info h2 {
                color: #1e293b;
                font-size: 18px;
                margin-bottom: 8px;
            }
            .job-info p {
                color: #64748b;
                margin: 0;
            }
            .applicant-details {
                display: grid;
                gap: 15px;
            }
            .detail-row {
                display: flex;
                padding: 12px 0;
                border-bottom: 1px solid #e2e8f0;
            }
            .detail-row:last-child {
                border-bottom: none;
            }
            .detail-label {
                font-weight: 600;
                color: #374151;
                min-width: 140px;
                flex-shrink: 0;
            }
            .detail-value {
                color: #6b7280;
                flex: 1;
            }
            .skills-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
                margin-top: 5px;
            }
            .skill-tag {
                background: #e0e7ff;
                color: #3730a3;
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 12px;
                font-weight: 500;
            }
            .footer {
                background: #f8fafc;
                padding: 20px 30px;
                text-align: center;
                border-top: 1px solid #e2e8f0;
            }
            .footer p {
                color: #64748b;
                font-size: 14px;
            }
            .cta-button {
                display: inline-block;
                background: #667eea;
                color: white;
                padding: 12px 24px;
                text-decoration: none;
                border-radius: 6px;
                font-weight: 600;
                margin-top: 15px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🎯 New Job Application Received</h1>
                <p>A candidate has applied for a position at Testriq</p>
            </div>
            
            <div class="content">
                <div class="job-info">
                    <h2>${jobTitle}</h2>
                    <p>Application ID: #${jobId} • Received: ${new Date().toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}</p>
                </div>
                
                <div class="applicant-details">
                    <div class="detail-row">
                        <div class="detail-label">👤 Full Name:</div>
                        <div class="detail-value">${fullName}</div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-label">📧 Email:</div>
                        <div class="detail-value"><a href="mailto:${email}" style="color: #667eea;">${email}</a></div>
                    </div>
                    ${phone ? `
                    <div class="detail-row">
                        <div class="detail-label">📱 Phone:</div>
                        <div class="detail-value"><a href="tel:${phone}" style="color: #667eea;">${phone}</a></div>
                    </div>
                    ` : ''}
                    <div class="detail-row">
                        <div class="detail-label">📍 Location:</div>
                        <div class="detail-value">${location}</div>
                    </div>
                    <div class="detail-row">
                        <div class="detail-label">💼 Experience:</div>
                        <div class="detail-value">${experience}</div>
                    </div>
                    ${currentRole ? `
                    <div class="detail-row">
                        <div class="detail-label">🎯 Current Role:</div>
                        <div class="detail-value">${currentRole}</div>
                    </div>
                    ` : ''}
                    ${currentCompany ? `
                    <div class="detail-row">
                        <div class="detail-label">🏢 Current Company:</div>
                        <div class="detail-value">${currentCompany}</div>
                    </div>
                    ` : ''}
                    ${currentCTC ? `
                    <div class="detail-row">
                        <div class="detail-label">💰 Current CTC:</div>
                        <div class="detail-value">${currentCTC} LPA</div>
                    </div>
                    ` : ''}
                    ${expectedCTC ? `
                    <div class="detail-row">
                        <div class="detail-label">💸 Expected CTC:</div>
                        <div class="detail-value">${expectedCTC} LPA</div>
                    </div>
                    ` : ''}
                    ${noticePeriod ? `
                    <div class="detail-row">
                        <div class="detail-label">⏰ Notice Period:</div>
                        <div class="detail-value">${noticePeriod}</div>
                    </div>
                    ` : ''}
                    ${skillsToolsFramework ? `
                    <div class="detail-row">
                        <div class="detail-label">🛠️ Skills & Tools:</div>
                        <div class="detail-value">${skillsToolsFramework}</div>
                    </div>
                    ` : ''}
                    ${domainKnowledge.length > 0 ? `
                    <div class="detail-row">
                        <div class="detail-label">🎓 Domain Knowledge:</div>
                        <div class="detail-value">
                            <div class="skills-tags">
                                ${domainKnowledge.map(domain => `<span class="skill-tag">${domain}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                    ` : ''}
                </div>
            </div>
            
            <div class="footer">
                <p>📎 Resume attached to this email</p>
                <p>Please review the application and respond to the candidate promptly.</p>
            </div>
        </div>
    </body>
    </html>
    `;

    // Modern User Confirmation Email Template
    const userEmailHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Application Received - Testriq</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                line-height: 1.6;
                color: #333;
                background-color: #f8fafc;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                color: white;
                padding: 40px 30px;
                text-align: center;
            }
            .header h1 {
                font-size: 28px;
                font-weight: 700;
                margin-bottom: 10px;
            }
            .header p {
                opacity: 0.95;
                font-size: 16px;
            }
            .content {
                padding: 40px 30px;
            }
            .success-icon {
                text-align: center;
                margin-bottom: 25px;
            }
            .success-icon div {
                width: 80px;
                height: 80px;
                background: #dcfce7;
                border-radius: 50%;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 40px;
            }
            .message {
                text-align: center;
                margin-bottom: 30px;
            }
            .message h2 {
                color: #1f2937;
                font-size: 24px;
                margin-bottom: 15px;
            }
            .message p {
                color: #6b7280;
                font-size: 16px;
                line-height: 1.6;
            }
            .application-summary {
                background: #f9fafb;
                border-radius: 8px;
                padding: 25px;
                margin: 25px 0;
                border-left: 4px solid #10b981;
            }
            .application-summary h3 {
                color: #1f2937;
                font-size: 18px;
                margin-bottom: 15px;
            }
            .summary-item {
                display: flex;
                justify-content: space-between;
                padding: 8px 0;
                border-bottom: 1px solid #e5e7eb;
            }
            .summary-item:last-child {
                border-bottom: none;
            }
            .summary-label {
                font-weight: 600;
                color: #374151;
            }
            .summary-value {
                color: #6b7280;
            }
            .next-steps {
                background: #eff6ff;
                border-radius: 8px;
                padding: 25px;
                margin: 25px 0;
            }
            .next-steps h3 {
                color: #1e40af;
                font-size: 18px;
                margin-bottom: 15px;
            }
            .next-steps ul {
                color: #374151;
                padding-left: 20px;
            }
            .next-steps li {
                margin-bottom: 8px;
            }
            .footer {
                background: #f8fafc;
                padding: 30px;
                text-align: center;
                border-top: 1px solid #e2e8f0;
            }
            .footer p {
                color: #64748b;
                font-size: 14px;
                margin-bottom: 15px;
            }
            .social-links {
                margin-top: 20px;
            }
            .social-links a {
                display: inline-block;
                margin: 0 10px;
                color: #6b7280;
                text-decoration: none;
                font-size: 14px;
            }
            .contact-info {
                background: #fef3c7;
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
                text-align: center;
            }
            .contact-info h4 {
                color: #92400e;
                margin-bottom: 10px;
            }
            .contact-info p {
                color: #a16207;
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>✅ Application Received!</h1>
                <p>Thank you for applying to Testriq</p>
            </div>
            
            <div class="content">
                <div class="success-icon">
                    <div>🎉</div>
                </div>
                
                <div class="message">
                    <h2>Hi ${fullName}!</h2>
                    <p>We've successfully received your application for the <strong>${jobTitle}</strong> position. Our team will review your profile and get back to you soon.</p>
                </div>
                
                <div class="application-summary">
                    <h3>📋 Application Summary</h3>
                    <div class="summary-item">
                        <span class="summary-label">Position:</span>
                        <span class="summary-value">${jobTitle}</span>
                    </div>
                    <div class="summary-item">
                        <span class="summary-label">Application Date:</span>
                        <span class="summary-value">${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                </div>

                <div class="next-steps">
                    <h3>What Happens Next?</h3>
                    <ul>
                        <li>Our HR team will review your application within 3-5 business days.</li>
                        <li>If your profile matches our requirements, you'll be contacted for an initial screening interview.</li>
                        <li>You can expect to hear from us regarding the next steps in the process.</li>
                    </ul>
                </div>

                <div class="contact-info">
                    <h4>Need Assistance?</h4>
                    <p>If you have any questions about your application or the hiring process, feel free to contact our HR team at <a href="mailto:hr@testriq.com" style="color: #a16207; text-decoration: underline;">hr@testriq.com</a>.</p>
                </div>
            </div>
            
            <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Testriq QA Lab. All rights reserved.</p>
                <div class="social-links">
                    <a href="https://www.linkedin.com/company/testriq/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://twitter.com/TestriqQA" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;

    // Send emails
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Job Application for ${jobTitle} - ${fullName}`,
      html: adminEmailHTML,
      attachments: resumeBuffer
        ? [
            {
              filename: resume.name,
              content: resumeBuffer,
              contentType: resume.type,
            },
          ]
        : [],
    };

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Testriq: Application Received for ${jobTitle}`,
      html: userEmailHTML,
    };

    await transporter.sendMail(adminMailOptions  );
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: 'Application submitted successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
