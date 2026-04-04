'use server';
import { cookies } from 'next/headers';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyTurnstile(token: string | null) {
  if (!token) return false;
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return false;
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token }),
    });

    const data = await response.json();
    return data.success === true;
  } catch {
    return false;
  }
}

export async function sendEmail(formData: FormData) {
  const cookieStore = await cookies();
  const lastSubmission = cookieStore.get('last_submit')?.value;
  const now = Date.now();

  if (lastSubmission && now - parseInt(lastSubmission, 10) < 60000) {
    return { success: false, error: 'Por favor, espera un minuto antes de enviar otro mensaje.' };
  }

  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const message = formData.get('message');
  const turnstileToken = formData.get('turnstileToken');

  const validCaptcha = await verifyTurnstile(turnstileToken?.toString() ?? null);
  if (!validCaptcha) {
    return { success: false, error: 'Captcha inválido o no verificado.' };
  }

  try {
    await resend.emails.send({
      from: 'Web Psicostimulos <onboarding@resend.dev>',
      to: 'psicostimulos@gmail.com', // El mail donde quieres recibirlo
      subject: `Nuevo contacto: ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
    });

    cookieStore.set('last_submit', now.toString(), {
      httpOnly: true,
      secure: true,
      maxAge: 60,
    });

    return { success: true };
  } catch {
    return { success: false };
  }
}