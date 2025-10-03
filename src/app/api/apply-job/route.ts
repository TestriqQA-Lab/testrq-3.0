import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
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
    const coverLetter = formData.get('coverLetter') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const jobId = formData.get('jobId') as string;
    const resume = formData.get('resume') as File | null;

    if (!fullName || !email || !jobTitle || !resume) {
      return NextResponse.json({ message: 'Missing required fields: fullName, email, jobTitle, resume' }, { status: 400 });
    }

    // Save resume (as previously implemented)
    let resumeFilePath: string | undefined;
    if (resume) {
      const buffer = Buffer.from(await resume.arrayBuffer());
      const filename = `${Date.now()}-${resume.name}`;
      const uploadDir = path.join(process.cwd(), 'tmp/uploads');
      await require('fs').promises.mkdir(uploadDir, { recursive: true });
      resumeFilePath = path.join(uploadDir, filename);
      await writeFile(resumeFilePath, buffer);
      console.log(`Resume saved to ${resumeFilePath}`);
    }

    // Send email notification
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Job Application for ${jobTitle}`,
      html: `
        <h1>New Job Application</h1>
        <p><strong>Job Title:</strong> ${jobTitle} (ID: ${jobId})</p>
        <p><strong>Applicant Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Current Company:</strong> ${currentCompany}</p>
        <p><strong>Current CTC (LPA):</strong> ${currentCTC}</p>
        <p><strong>Expected CTC (LPA):</strong> ${expectedCTC}</p>
        <p><strong>Skills (Tools & Framework):</strong> ${skillsToolsFramework}</p>
        <p><strong>Domain Knowledge:</strong> ${domainKnowledge.join(', ')}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Current Role:</strong> ${currentRole}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Notice Period:</strong> ${noticePeriod}</p>
        <p><strong>Cover Letter:</strong> ${coverLetter}</p>
        ${resumeFilePath ? `<p>Resume attached.</p>` : ''}
      `,
      attachments: resumeFilePath ? [
        {
          filename: resume.name,
          path: resumeFilePath,
          contentType: resume.type || 'application/octet-stream',
        },
      ] : [],
    };

    await transporter.sendMail(mailOptions);
    console.log('Application email sent successfully!');

    return NextResponse.json({ message: 'Application submitted successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error processing job application:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
