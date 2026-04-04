'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Turnstile } from '@marsidev/react-turnstile';
import { sendEmail } from '@/app/actions';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [token, setToken] = useState<string | null>(null);

  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptPrivacy) {
      alert('Debes aceptar la Política de Privacidad para enviar el formulario.');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitError(null);

    // Preparamos los datos para la Server Action
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('message', formData.message);

    if (!token) {
      alert('Por favor, completa el captcha antes de enviar el formulario.');
      setIsSubmitting(false);
      return;
    }

    data.append('turnstileToken', token);

    try {
      const result = await sendEmail(data); // <--- Llamada a Resend

      if (result.success) {
        setSubmitStatus('success');
        setSubmitError(null);
        setAcceptPrivacy(false);
        setToken(null);
        // Ocultar mensaje de éxito tras 5 segundos
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setSubmitError(result.error ? String(result.error) : 'Error al enviar. Inténtalo de nuevo.');
      }
    } catch (err) {
      setSubmitStatus('error');
      setSubmitError('Error al enviar. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="px-2 sm:px-6">
      <div className="max-w-6xl mx-auto bg-gradient-to-b from-[#FFA3C7] to-[#FF8FB3] rounded-[2rem] sm:rounded-[3rem] shadow-xl py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
          
          {/* Info de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-5xl mb-6 text-white">Contacto</h2>
            <p className="text-white/90 mb-8 leading-relaxed">
              ¿Tienes alguna pregunta? Estaremos encantados de atenderte en Psicostímulos.
            </p>
            
            <div className="space-y-4">
              {/* Teléfono */}
              <motion.div 
                className="flex items-center gap-4 p-4 bg-white/20 rounded-2xl backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white p-2 rounded-full text-[#FF8FB3]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <a href="tel:+34644648546" className="text-white font-medium">+34 644 648 546</a>
              </motion.div>
              {/* Email */}
              <motion.div 
                className="flex items-center gap-4 p-4 bg-white/20 rounded-2xl backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white p-2 rounded-full text-[#FF8FB3]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <a href="mailto:psicostimulos@gmail.com" className="text-white font-medium">psicostimulos@gmail.com</a>
              </motion.div>
              <motion.div 
                className="flex items-start gap-3 sm:gap-4 rounded-xl sm:rounded-2xl p-4 sm:p-5 bg-white/20 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white rounded-full p-2 sm:p-3 shadow-lg flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF8FB3]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">Dirección</h3>
                  <p className="text-white/90 text-base sm:text-lg">
                    Avda. Jane Bowles 17<br />
                    Málaga, España
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Formulario Real */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8"
          >
            <h3 className="text-2xl text-[#8B4789] mb-6">Envíanos un mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Nombre completo *"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border-2 border-gray-100 focus:border-[#FF8FB3] outline-none text-black"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico *"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border-2 border-gray-100 focus:border-[#FF8FB3] outline-none text-black"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border-2 border-gray-100 focus:border-[#FF8FB3] outline-none text-black"
              />
              <textarea
                name="message"
                placeholder="¿En qué podemos ayudarte? *"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 rounded-xl border-2 border-gray-100 focus:border-[#FF8FB3] outline-none resize-none text-black"
                required
              />

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="acceptPrivacy"
                  checked={acceptPrivacy}
                  onChange={(e) => setAcceptPrivacy(e.target.checked)}
                  className="mt-1"
                  required
                />
                <label htmlFor="acceptPrivacy" className="text-sm text-gray-600">
                  Acepto la <Link href="/politica-privacidad" className="text-[#8B4789] underline">Política de Privacidad</Link> *
                </label>
              </div>

              <div className="flex justify-center my-4">
                <Turnstile
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''}
                  onSuccess={(token) => setToken(token)}
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-3 bg-green-100 text-green-700 rounded-xl text-sm">
                  ¡Mensaje enviado correctamente!
                </div>
              )}
              
              {submitStatus === 'error' && submitError && (
                <div className="p-3 bg-red-100 text-red-700 rounded-xl text-sm">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !token}
                className="w-full bg-[#FFC629] hover:bg-[#FFD84D] text-gray-900 font-bold py-4 rounded-xl transition-all disabled:opacity-50 flex justify-center items-center gap-2"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}