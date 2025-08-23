  import { NextRequest, NextResponse } from 'next/server';
  import { google } from 'googleapis';
  
  export async function POST(request: NextRequest) {
    const body = await request.json();
    
    // Validate required fields
    if (!body.fullName || !body.businessEmail || !body.businessPhone || !body.companyOrganization || !body.testingRequirements || !body.message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }
    
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(body.businessEmail)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Send email notification
    const mailOptions = {
      from: 'contact@testriq.com',
      to: 'recipient@example.com',
      subject: 'New Telecom Contact Form Submission',
      html: `
        <p>Full Name: ${body.fullName}</p>
        <p>Business Email: ${body.businessEmail}</p>
        <p>Business Phone: ${body.businessPhone}</p>
        <p>Company/Organization: ${body.companyOrganization}</p>
        <p>Testing Requirements: ${body.testingRequirements}</p>
        <p>Message: ${body.message}</p>
      `,
    };

    // Replace with your actual email sending logic
    // For example, using Nodemailer or a similar library
    // await nodemailer.sendMail(mailOptions);

    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
  }
  

