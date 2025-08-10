import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface RequestBody {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { firstname, lastname, email, phone, message }: RequestBody =
      await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Contact form submission from ${firstname} ${lastname}`,
      html: `
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      {
        status: 500,
      }
    );
  }
}
