import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

const sendContactMail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  await transporter.sendMail({
    to: process.env.EMAIL_USER,
    from: email,
    subject: `New Inquiry: ${subject}`,
    html: `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f7f9; padding: 40px 10px; margin: 0;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; shadow: 0 4px 6px rgba(0,0,0,0.05);">
        <tr>
          <td style="background-color: #1e293b; padding: 30px 40px; text-align: left;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.5px;">Contact Notification</h1>
          </td>
        </tr>
        
        <tr>
          <td style="padding: 40px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="padding-bottom: 30px;">
                  <p style="margin: 0 0 10px 0; font-size: 13px; font-weight: 700; color: #6366f1; text-transform: uppercase; letter-spacing: 1px;">Inquiry Details</p>
                  <h2 style="margin: 0; font-size: 18px; color: #0f172a;">Message from ${name}</h2>
                </td>
              </tr>
              <tr>
                <td style="padding: 24px; background-color: #f8fafc; border-radius: 12px; border: 1px solid #edf2f7;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td style="padding-bottom: 15px; border-bottom: 1px solid #e2e8f0;">
                        <span style="display: block; font-size: 12px; color: #94a3b8; font-weight: 600; margin-bottom: 4px;">SENDER EMAIL</span>
                        <a href="mailto:${email}" style="font-size: 15px; color: #1e293b; text-decoration: none; font-weight: 500;">${email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 15px 0; border-bottom: 1px solid #e2e8f0;">
                        <span style="display: block; font-size: 12px; color: #94a3b8; font-weight: 600; margin-bottom: 4px;">SUBJECT</span>
                        <span style="font-size: 15px; color: #1e293b; font-weight: 500;">${subject}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-top: 15px;">
                        <span style="display: block; font-size: 12px; color: #94a3b8; font-weight: 600; margin-bottom: 8px;">MESSAGE BODY</span>
                        <p style="margin: 0; font-size: 15px; color: #334155; line-height: 1.6;">${message}</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding: 0 40px 40px 40px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top: 1px solid #f1f5f9; padding-top: 30px;">
              <tr>
                <td>
                  <p style="margin: 0; font-size: 16px; font-weight: 700; color: #0f172a;">Sabbir Shaikh</p>
                  <p style="margin: 4px 0 12px 0; font-size: 13px; color: #64748b; font-weight: 500;">MERN Stack Developer</p>
                  <table border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding-right: 15px;">
                        <a href="https://sk-sabbir-ali-portfolio.netlify.app/" style="font-size: 12px; color: #6366f1; text-decoration: none; font-weight: 700;">Portfolio</a>
                      </td>
                      <td style="padding-right: 15px; color: #cbd5e1;">|</td>
                      <td>
                        <a href="https://github.com/sabbirShaikh" style="font-size: 12px; color: #6366f1; text-decoration: none; font-weight: 700;">GitHub</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto;">
        <tr>
          <td style="padding: 20px; text-align: center;">
            <p style="margin: 0; font-size: 11px; color: #94a3b8; letter-spacing: 0.5px;">This email was sent via ProNote Contact Service.</p>
          </td>
        </tr>
      </table>
    </div>`
  });
  return res.status(200).json({ success: true, message: "Message sent successfully..." })
}

export default sendContactMail;