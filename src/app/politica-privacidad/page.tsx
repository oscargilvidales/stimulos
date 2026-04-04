'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#4FB3D9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Header */}
        <header className="bg-white rounded-2xl shadow-md px-6 py-4 mb-8 flex items-center justify-between sticky top-4 z-20">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <svg className="w-6 h-6 text-[#8B4789]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-[#8B4789] font-medium">Volver al inicio</span>
          </Link>
          <div className="w-12 h-12 relative">
            <Image src="/Stimulo.png" alt="Logo de Psicostímulos" fill className="object-contain" sizes="48px" />
          </div>
        </header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl text-white font-bold mb-8 drop-shadow-md">Política de Privacidad</h1>

          <div className="space-y-6">
            <section className="bg-white rounded-3xl p-8 border-4 border-[#B8E6F5] shadow-lg">
              <p className="text-gray-700 text-lg mb-6">
                <strong>Última actualización:</strong> 4 de abril de 2026
              </p>
              <p className="text-gray-700 leading-relaxed">
                En <strong>Psicostímulos</strong>, respetamos tu privacidad y nos comprometemos a proteger
                los datos personales que nos proporcionas. Esta Política de Privacidad explica cómo recopilamos, utilizamos,
                almacenamos y protegemos tu información personal de acuerdo con el Reglamento General de Protección de Datos
                (RGPD) de la Unión Europea y la Ley Orgánica de Protección de Datos Personales y garantía de los derechos
                digitales (LOPDGDD) de España.
              </p>
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-2xl">
                <p className="text-green-800 font-medium text-sm">
                  Esta web no utiliza cookies de seguimiento ni analítica de terceros. Solo se establecen conexiones con
                  servicios externos si el usuario decide interactuar con ellos explícitamente.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-3xl p-8 border-4 border-[#FF8FB3] shadow-lg">
              <h2 className="text-3xl text-[#8B4789] mb-4">1. Responsable del Tratamiento</h2>
              <div className="bg-[#B8E6F5] rounded-2xl p-6 text-gray-800">
                <p className="mb-2"><strong>Denominación:</strong> Psicostímulos</p>
                <p className="mb-2"><strong>Dirección:</strong> Avda. Jane Bowles 17, Málaga, España</p>
                <p className="mb-2"><strong>Teléfono:</strong> +34 644 648 546</p>
                <p><strong>Email:</strong> psicostimulos@gmail.com</p>
              </div>
            </section>

            <section className="bg-white rounded-3xl p-8 border-4 border-[#7FEFDB] shadow-lg">
              <h2 className="text-3xl text-[#8B4789] mb-4">2. Datos que Recopilamos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A través del formulario de contacto de nuestra página web, podemos recopilar los siguientes datos personales:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Nombre completo:</strong> Para poder dirigirnos a ti de forma personalizada</li>
                <li><strong>Correo electrónico:</strong> Para responder a tus consultas y enviarte información solicitada</li>
                <li><strong>Teléfono:</strong> Para contactarte de forma más directa si es necesario (opcional)</li>
                <li><strong>Mensaje:</strong> El contenido de tu consulta o solicitud de información</li>
              </ul>
            </section>

            <section className="bg-white rounded-3xl p-8 border-4 border-[#FFC629] shadow-lg">
              <h2 className="text-3xl text-[#8B4789] mb-4">3. Finalidad del Tratamiento</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Los datos personales que nos proporcionas a través del formulario de contacto serán utilizados para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Responder a tus consultas, dudas o solicitudes de información</li>
                <li>Proporcionarte información sobre nuestros servicios de psicología, psicopedagogía, neuropsicología y logopedia infantil</li>
                <li>Gestionar tu solicitud de cita o evaluación</li>
                <li>Mantener comunicación contigo respecto a los servicios que ofrecemos</li>
              </ul>
            </section>

            <section className="bg-white rounded-3xl p-8 border-4 border-[#8B4789] shadow-lg">
              <h2 className="text-3xl text-[#8B4789] mb-4">4. Base Legal</h2>
              <p className="text-gray-700 leading-relaxed">
                La base legal para el tratamiento de tus datos personales es tu <strong>consentimiento expreso</strong>,
                que nos proporcionas al completar y enviar el formulario de contacto. Puedes retirar tu consentimiento
                en cualquier momento contactando con nosotros a través de los medios indicados en esta política.
              </p>
            </section>

            <section className="bg-white rounded-3xl p-8 border-4 border-[#B8E6F5] shadow-lg">
              <h2 className="text-3xl text-[#8B4789] mb-4">5. Conservación de los Datos</h2>
              <p className="text-gray-700 leading-relaxed">
                Conservaremos tus datos personales durante el tiempo necesario para atender tu consulta y, posteriormente,
                durante un período de <strong>1 año</strong> por si surgen responsabilidades derivadas del tratamiento.
                Transcurrido este plazo, procederemos a la eliminación segura de tus datos, salvo que exista una obligación
                legal de conservarlos por un periodo superior.
              </p>
            </section>

            <section className="bg-white rounded-3xl p-8 border-4 border-[#FF8FB3] shadow-lg">
              <h2 className="text-3xl text-[#8B4789] mb-4">6. Destinatarios de los Datos</h2>
              <p className="text-gray-700 leading-relaxed">
                Tus datos personales no serán cedidos a terceros, excepto en los siguientes casos:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                <li>Cuando exista una obligación legal</li>
                <li>Cuando sea necesario para la prestación de nuestros servicios (por ejemplo, proveedores de hosting)</li>
                <li>Cuando cuentes con tu consentimiento expreso</li>
              </ul>
            </section>

            <section className="bg-white rounded-3xl p-8 border-4 border-[#7FEFDB] shadow-lg">
              <h2 className="text-3xl text-[#8B4789] mb-4">7. Tus Derechos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                De acuerdo con el RGPD y la LOPDGDD, tienes derecho a:
              </p>
              <div className="bg-[#FFE4E1] rounded-2xl p-6 space-y-3 text-gray-800">
                <p><strong>Acceso:</strong> Conocer qué datos personales tenemos sobre ti</p>
                <p><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos</p>
                <p><strong>Supresión:</strong> Solicitar la eliminación de tus datos cuando ya no sean necesarios</p>
                <p><strong>Oposición:</strong> Oponerte al tratamiento de tus datos personales</p>
                <p><strong>Limitación:</strong> Solicitar la limitación del tratamiento de tus datos</p>
                <p><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado para transmitirlos a otro responsable</p>
                <p><strong>Retirada del consentimiento:</strong> En cualquier momento, sin que afecte a tratamientos anteriores</p>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                Para ejercer cualquiera de estos derechos, puedes contactar con nosotros a través de los medios indicados en el apartado 12 de esta política. También tienes derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong> si consideras que el tratamiento de tus datos personales no cumple con la normativa vigente.
              </p>
            </section>

            <section className="bg-white rounded-3xl p-8 border-4 border-[#FFC629] shadow-lg">
              <h2 className="text-3xl text-[#8B4789] mb-4">8. Seguridad de los Datos</h2>
              <p className="text-gray-700 leading-relaxed">
                Hemos implementado medidas técnicas y organizativas apropiadas para proteger tus datos personales contra el
                acceso no autorizado, la pérdida, destrucción o alteración. Utilizamos protocolos de seguridad y cifrado
                para garantizar la confidencialidad e integridad de la información que nos proporcionas.
              </p>
            </section>

            <section className="bg-white rounded-3xl p-8 border-4 border-[#8B4789] shadow-lg">
              <h2 className="text-3xl text-[#8B4789] mb-4">9. Cookies y Servicios de Terceros</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Esta web utiliza exclusivamente cookies técnicas estrictamente necesarias para el funcionamiento del sitio. No se emplean cookies de seguimiento, analítica ni publicidad de terceros.
              </p>

              <h3 className="text-xl font-semibold text-[#8B4789] mb-2 mt-4">Mapas e interactividad</h3>
              <p className="text-gray-700 leading-relaxed">
                Para proteger tu privacidad, esta web no carga automáticamente servicios de terceros que utilicen cookies de rastreo. Solo si decides interactuar con el mapa mediante el botón correspondiente se establecerá una conexión con los servidores de Google, momento en el cual podrían instalarse cookies técnicas de dicho proveedor necesarias para el funcionamiento del servicio.
              </p>

              <h3 className="text-xl font-semibold text-[#8B4789] mb-2 mt-4">Seguridad y anti-spam</h3>
              <p className="text-gray-700 leading-relaxed">
                Utilizamos Cloudflare Turnstile para proteger nuestros formularios de ataques automatizados. Este servicio se activa únicamente cuando inicias la interacción con el formulario de contacto, verificando de forma no intrusiva que eres una persona. Cumple con los estándares de privacidad más estrictos y no realiza rastreo publicitario ni perfilado de usuarios.
              </p>

              <h3 className="text-xl font-semibold text-[#8B4789] mb-2 mt-4">Analítica web</h3>
              <p className="text-gray-700 leading-relaxed">
                Utilizamos Vercel Analytics para medir el tráfico del sitio web. Este servicio no utiliza cookies ni recopila datos personales identificables, funcionando de forma completamente anónima y cumpliendo con el RGPD sin necesidad de banner de cookies.
              </p>
            </section>

            <section className="bg-white rounded-3xl p-8 border-4 border-[#B8E6F5] shadow-lg">
              <h2 className="text-3xl text-[#8B4789] mb-4">10. Menores de Edad</h2>
              <p className="text-gray-700 leading-relaxed">
                Aunque nuestros servicios están dirigidos a niños y adolescentes, el formulario de contacto está destinado
                a ser utilizado por los padres, tutores o representantes legales. No recopilamos datos personales de menores
                de 14 años sin el consentimiento de sus padres o tutores legales.
              </p>
            </section>

            <section className="bg-white rounded-3xl p-8 border-4 border-[#FF8FB3] shadow-lg">
              <h2 className="text-3xl text-[#8B4789] mb-4">11. Modificaciones de la Política de Privacidad</h2>
              <p className="text-gray-700 leading-relaxed">
                Nos reservamos el derecho a modificar esta Política de Privacidad para adaptarla a novedades legislativas,
                jurisprudenciales o cambios en nuestras prácticas. Cualquier modificación será publicada en esta página
                con suficiente antelación a su aplicación.
              </p>
            </section>

            <section className="bg-white rounded-3xl p-8 border-4 border-[#7FEFDB] shadow-lg">
              <h2 className="text-3xl text-[#8B4789] mb-4">12. Contacto</h2>
              <p className="text-gray-700 leading-relaxed">
                Si tienes alguna duda sobre esta Política de Privacidad o sobre cómo tratamos tus datos personales,
                no dudes en contactarnos:
              </p>
              <div className="bg-[#7FEFDB] rounded-2xl p-6 mt-4 text-gray-800">
                <p className="mb-2"><strong>Psicostímulos</strong></p>
                <p className="mb-2">Avda. Jane Bowles 17, Málaga, España</p>
                <p className="mb-2">Tel: +34 644 648 546</p>
                <p>Email: psicostimulos@gmail.com</p>
              </div>
            </section>

            <div className="mt-8 pb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-[#FFC629] hover:bg-[#FFD84D] text-gray-900 font-semibold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Volver a la página principal
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="bg-[#8B4789] text-white py-8 px-6 mt-4 rounded-2xl">
          <div className="text-center">
            <p className="text-sm">© 2026 Psicostímulos. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}