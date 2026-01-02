import { TRPCError } from "@trpc/server";
import nodemailer from "nodemailer";
import { ENV } from "./env";

export type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

// Cache transporter to avoid creating a new one on every request
let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;

function getTransporter() {
  if (transporter) {
    return transporter;
  }

  if (!ENV.gmailUser || !ENV.gmailAppPassword) {
    console.warn(
      "[EMAIL] Gmail credentials not configured. Emails will be logged only."
    );
    return null;
  }

  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: ENV.gmailUser,
      pass: ENV.gmailAppPassword,
    },
  });

  return transporter;
}

/**
 * Send email via Gmail SMTP using Nodemailer
 */
export async function sendEmail(payload: EmailPayload): Promise<boolean> {
  const { to, subject, html } = payload;

  try {
    const transport = getTransporter();

    if (!transport) {
      console.log(
        `[EMAIL - LOG ONLY] To: ${to}\n[EMAIL] Subject: ${subject}\n[EMAIL] Body:\n${html}\n`
      );
      return true;
    }

    const info = await transport.sendMail({
      from: ENV.gmailUser,
      to,
      subject,
      html,
    });

    console.log(`[EMAIL] Sent successfully. MessageID: ${info.messageId}`);
    return true;
  } catch (error) {
    console.error("[EMAIL] Error sending email:", error);
    // Don't throw—allow registration to succeed even if email fails
    return false;
  }
}

/**
 * Build HTML email for class registration
 */
export function buildRegistrationEmail(input: {
  classType: string;
  parentName: string;
  parentEmail: string;
  parentPhone?: string;
  childName: string;
  childAge?: number;
  additionalInfo?: string;
}): EmailPayload {
  const html = `
    <h2>New Class Registration</h2>
    <p><strong>Class:</strong> ${input.classType}</p>
    <p><strong>Parent Name:</strong> ${input.parentName}</p>
    <p><strong>Parent Email:</strong> ${input.parentEmail}</p>
    ${input.parentPhone ? `<p><strong>Parent Phone:</strong> ${input.parentPhone}</p>` : ""}
    <p><strong>Child Name:</strong> ${input.childName}</p>
    ${input.childAge ? `<p><strong>Child Age:</strong> ${input.childAge}</p>` : ""}
    ${input.additionalInfo ? `<p><strong>Additional Info:</strong> ${input.additionalInfo}</p>` : ""}
  `;

  return {
    to: "capoeiraclubcroydon@gmail.com",
    subject: `New Registration: ${input.classType}`,
    html,
  };
}
