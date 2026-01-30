import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, type } = body;

    // Email to the client (owner of the website)
    const { data, error } = await resend.emails.send({
      from: 'Sentinel Mind <onboarding@resend.dev>', // Update with your domain
      to: ['afolayanshem@gmail.com'], // Client's email
      subject: type === 'booking' 
        ? `New Consultation Booking from ${name}` 
        : `New Contact Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0A3D4A; border-bottom: 3px solid #00D9FF; padding-bottom: 10px;">
            ${type === 'booking' ? '📅 New Consultation Booking' : '💬 New Contact Inquiry'}
          </h2>
          
          <div style="background: #F8FAFC; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p><strong style="color: #0A3D4A;">Name:</strong> ${name}</p>
            <p><strong style="color: #0A3D4A;">Email:</strong> ${email}</p>
            ${phone ? `<p><strong style="color: #0A3D4A;">Phone:</strong> ${phone}</p>` : ''}
            ${service ? `<p><strong style="color: #0A3D4A;">Service:</strong> ${service}</p>` : ''}
            <p><strong style="color: #0A3D4A;">Message:</strong></p>
            <p style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #00D9FF;">
              ${message}
            </p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Sent from MindCare Platform Contact Form
          </p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    // Auto-response to the person who submitted
    await resend.emails.send({
      from: 'Sentinel Mind <onboarding@resend.dev>',
      to: [email],
      subject: 'Thank you for reaching out to Sentinel Mind',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0A3D4A;">Thank you, ${name}!</h2>
          
          <p style="font-size: 16px; line-height: 1.6; color: #2F3E46;">
            I've received your ${type === 'booking' ? 'consultation request' : 'message'} and will respond within 24 hours.
          </p>
          
          <div style="background: #F8FAFC; padding: 20px; border-radius: 10px; border-left: 4px solid #00D9FF; margin: 20px 0;">
            <p style="margin: 0; color: #0A3D4A; font-weight: bold;">What happens next?</p>
            <ul style="color: #2F3E46; line-height: 1.8;">
              <li>I'll review your ${type === 'booking' ? 'preferred consultation details' : 'inquiry'}</li>
              <li>You'll receive a personalized response via email</li>
              <li>${type === 'booking' ? 'We\'ll schedule a time that works for both of us' : 'I\'ll answer any questions you have'}</li>
            </ul>
          </div>
          
          <p style="color: #2F3E46;">
            In the meantime, feel free to explore our <a href="https://yourwebsite.com/blog" style="color: #00D9FF;">blog</a> 
            and <a href="https://yourwebsite.com/resources" style="color: #00D9FF;">resources</a>.
          </p>
          
          <p style="margin-top: 30px;">
            <strong style="color: #0A3D4A;">Warm regards,</strong><br>
            <span style="color: #00D9FF; font-size: 18px;">Dr. </span><br>
            <span style="color: #666; font-size: 14px;">Founder, MindCare Platform</span>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}