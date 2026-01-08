"use server";

import nodemailer from "nodemailer";
import { z } from "zod";
import { EmailTemplate } from "@/components/email-template";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export async function sendEmail(data: ContactFormData) {
  const result = contactSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: "Invalid form data" };
  }

  const { name, email, subject, message } = result.data;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const htmlContent = EmailTemplate({
      name,
      email,
      message,
      subject,
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER, // Sender address (authenticated user)
      to: "akashatojha2002@gmail.com", // Recipient address
      replyTo: email, // Allow replying to the user's email
      subject: `Portfolio Contact: ${subject}`,
      html: htmlContent,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email. Please try again later." };
  }
}
