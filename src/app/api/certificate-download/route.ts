import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, organization, purpose, certId } = body;

        // In a real application, you would use a service like SendGrid, Mailchimp, or AWS SES
        // to send an email to contact@testriq.com

        console.log("Certificate Download Request:", {
            to: "contact@testriq.com",
            from: email,
            subject: `Certificate Download Request - ${certId}`,
            data: {
                name,
                organization,
                purpose,
                certId,
                timestamp: new Date().toISOString()
            }
        });

        // Simulating email sending delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({ success: true, message: "Request received" });
    } catch (error) {
        console.error("Error processing download request:", error);
        return NextResponse.json(
            { success: false, message: "Failed to process request" },
            { status: 500 }
        );
    }
}
