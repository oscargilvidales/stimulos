'use server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const message = formData.get('message');

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