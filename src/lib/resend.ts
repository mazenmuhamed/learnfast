import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

type SendOTPEmailProps = { otp: string; email: string }

export async function sendOTPEmail({ otp, email }: SendOTPEmailProps) {
  try {
    await resend.emails.send({
      to: [email],
      from: 'LearnFast <noreply@quotexfm.tech>',
      subject: 'Verification Code',
      text: `Your verification code is ${otp}`,
    })
  } catch (error) {
    console.log('[RESEND_ERROR]', error)
  }
}

export async function sendEmail({
  to,
  subject,
  text,
}: {
  to: string
  subject: string
  text: string
}) {
  try {
    await resend.emails.send({
      to: [to],
      from: 'LearnFast <noreply@quotexfm.tech>',
      subject,
      text,
    })
  } catch (error) {
    console.log('[RESEND_ERROR]', error)
  }
}
