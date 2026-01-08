interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
  subject: string;
}

export const EmailTemplate = ({
  name,
  email,
  message,
  subject,
}: EmailTemplateProps) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px; }
          .header { background-color: #f8f9fa; padding: 15px; border-bottom: 1px solid #eee; border-radius: 8px 8px 0 0; }
          .content { padding: 20px; }
          .footer { margin-top: 20px; padding-top: 10px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
          .label { font-weight: bold; color: #555; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>
          <div class="content">
            <p><span class="label">From:</span> ${name} (${email})</p>
            <p><span class="label">Subject:</span> ${subject}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p><span class="label">Message:</span></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <div class="footer">
            <p>This email was sent from your portfolio contact form.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};
