import type { APIRoute } from 'astro'
import nodemailer from 'nodemailer'
import type Mail from 'nodemailer/lib/mailer'

const { FROM_EMAIL, TO_EMAIL, EMAIL_PASSWORD } = import.meta.env

export const POST: APIRoute = async ({ request }) => {
  const { email, name, message } = await request.json()

  if (!(email && name && message)) {
    return new Response(JSON.stringify({ success: false, message: 'Missing fields' }), {
      status: 400
    })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.elasticemail.com',
    port: 587,
    secure: false,
    auth: {
      user: TO_EMAIL,
      pass: EMAIL_PASSWORD
    }
  })

  const mailOptions: Mail.Options = {
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject: `Email from Portfolio — ${name}`,
    html: `
      <h1>${name} sent you a message!</h1>
      <p style="padding: 10px; border: 1px solid black; border-radius: 5px; max-width: 600px;">
        <strong>Message ✉️</strong><br>
        ${message}
      </p>
      <small>Reply to: ${email}</small>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), {
      status: 200
    })
  } catch {
    return new Response(JSON.stringify({ success: false, message: 'Failed to send email' }), {
      status: 500
    })
  }
}
