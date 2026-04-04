'use server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyTurnstile(token: string | null) {
  if (!token) return false;
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error('TURNSTILE_SECRET_KEY no está configurada.');
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
  } catch (error) {
    console.error('Error verificando Turnstile:', error);
    return false;
  }
}

export async function sendEmail(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const message = formData.get('message');
  const turnstileToken = formData.get('turnstileToken');

  const validCaptcha = await verifyTurnstile(turnstileToken?.toString() ?? null);
  if (!validCaptcha) {
    console.error('Captcha inválido o no verificado.');
    return { success: false };
  }

  try {
    await resend.emails.send({
      from: 'Web Psicostimulos <onboarding@resend.dev>',
      to: 'psicostimulos@gmail.com', // El mail donde quieres recibirlo
      subject: `Nuevo contacto: ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
    });
    return { success: true };
  } catch (error) {
    console.error("Error enviando mail:", error);
    return { success: false };
  }
}