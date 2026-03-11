import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, subject: rawSubject } = await req.json();

    if (!name || !message) {
      return NextResponse.json({ error: "Name and message are required." }, { status: 400 });
    }

    const isPrayer = rawSubject === "Prayer request";
    const label = isPrayer ? "Prayer Request" : "Contact Enquiry";
    const accentColor = isPrayer ? "#5c2080" : "#c9a227";
    const emailSubject = isPrayer
      ? `🙏 Prayer Request from ${name}`
      : `📬 Website Contact from ${name}`;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"HOF Website" <${process.env.SMTP_USER}>`,
      to: "info@hofmny.com",
      replyTo: email || undefined,
      subject: emailSubject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #3b1259; padding: 20px; text-align: center;">
            <h2 style="color: ${accentColor}; margin: 0;">House of Faith — ${label}</h2>
          </div>
          <div style="padding: 24px; background: #fdf8f2; border: 1px solid #e8d5b7;">
            <p style="margin: 0 0 8px;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 8px;"><strong>Email:</strong> ${email || "Not provided"}</p>
            <p style="margin: 0 0 16px;"><strong>${isPrayer ? "Prayer Request" : "Message"}:</strong></p>
            <div style="background: #fff; border-left: 4px solid ${accentColor}; padding: 12px 16px; border-radius: 4px;">
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="margin: 20px 0 0; color: #7c5c3e; font-size: 13px;">
              ${email ? `Reply directly to this email to respond to ${name}.` : "No reply email provided."}
            </p>
          </div>
          <div style="background: #e8d5b7; padding: 12px; text-align: center; font-size: 12px; color: #5a3e28;">
            House of Faith Ministries USA Inc. — 467 E 138th St, Bronx, NY 10454
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Chat email error:", error);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
