interface EmailTemplateProps {
  email: string;
}

export function EmailTemplate({ email }: EmailTemplateProps) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Welcome to TalentScan AI Waitlist</title>
      </head>
      <body style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; line-height: 1.5; padding: 20px; background-color: #f9fafb;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 12px; padding: 40px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
              <div style="text-align: center; margin-bottom: 30px;">
                  <div style="display: inline-block; background: linear-gradient(135deg, #1e40af, #3b82f6); padding: 12px; border-radius: 12px;">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                          <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"></path>
                          <path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-4z"></path>
                          <path d="M10 18a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-4z"></path>
                          <path d="M12 12v8"></path>
                      </svg>
                  </div>
                  <h1 style="color: #1e3a8a; font-size: 28px; margin: 20px 0 5px;">Welcome to TalentScan AI!</h1>
                  <p style="color: #6b7280; font-size: 16px; margin-bottom: 0;">You're on the waitlist for our agentic AI resume screening solution</p>
                  <p style="color: #9ca3af; font-size: 12px; margin-top: 5px;">A Futurelab Studios Product</p>
              </div>
              
              <p style="color: #374151; font-size: 16px; margin-bottom: 24px;">
                  Hi there,
              </p>
              
              <p style="color: #374151; font-size: 16px; margin-bottom: 24px;">
                  Thank you for joining our exclusive waitlist! We've received your email address (${email}) and you're now in line for early access to TalentScan AI.
              </p>
              
              <div style="background-color: #f3f4f6; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
                  <h2 style="color: #1e3a8a; font-size: 18px; margin-top: 0; margin-bottom: 15px;">What makes TalentScan AI revolutionary:</h2>
                  <ul style="color: #4b5563; padding-left: 20px; margin: 0;">
                      <li style="margin-bottom: 10px;"><strong>Agentic AI Analysis</strong> - Our AI agent autonomously evaluates resumes with human-like reasoning</li>
                      <li style="margin-bottom: 10px;"><strong>Bulk Processing</strong> - Screen 1000+ resumes in minutes, not days</li>
                      <li style="margin-bottom: 10px;"><strong>Decision Insights</strong> - Get detailed reasoning behind every candidate recommendation</li>
                      <li style="margin-bottom: 10px;"><strong>Bias Detection</strong> - Advanced algorithms identify and reduce unconscious bias</li>
                  </ul>
              </div>
              
              <p style="color: #374151; font-size: 16px; margin-bottom: 24px;">
                  We're working hard to perfect our technology and will notify you as soon as early access becomes available. In the meantime, feel free to reply to this email if you have any questions.
              </p>
              
              <p style="color: #374151; font-size: 16px; margin-bottom: 8px;">Best regards,</p>
              <p style="color: #1e3a8a; font-size: 16px; font-weight: 600; margin-top: 0;">The TalentScan AI Team</p>
              
              <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #9ca3af; font-size: 14px;">
                  <p>&copy; 2025 FutureLabs. All rights reserved.</p>
                  <p>If you didn't sign up for this waitlist, please disregard this email.</p>
              </div>
          </div>
      </body>
    </html>
  `;
}
