'use client';

import { motion } from 'framer-motion';
import { MapFacade } from './MapFacade';

export function LocationSection() {
  const address = "Avda. Jane Bowles 17, Málaga, España";
  const mapUrl = `https://maps.google.com/maps?q=Avda+Jane+Bowles+17+Málaga+España&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="px-2 sm:px-6">
      <div className="max-w-6xl mx-auto bg-gradient-to-b from-[#CAF0FC] to-[#B8E6F5] rounded-[2rem] sm:rounded-[3rem] shadow-[inset_0_2px_40px_rgba(255,255,255,0.5),inset_0_-2px_20px_rgba(0,0,0,0.1),0_10px_40px_rgba(0,0,0,0.15)] border-t-4 border-white/30 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl text-center mb-6 sm:mb-8 text-[#8B4789]"
        >
          ¿Dónde estamos?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-800 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg font-medium px-2"
        >
          Visítanos en {address}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="p-3 sm:p-4 border-b border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="text-gray-700 font-medium text-sm sm:text-base">{address}</span>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=Avda+Jane+Bowles+17+Málaga+España`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 hover:underline inline-flex items-center gap-2 font-medium transition-colors text-sm sm:text-base"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="hidden sm:inline">Abrir en Google Maps</span>
              <span className="sm:hidden">Ver mapa</span>
            </a>
          </div>
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px]">
            <MapFacade />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 sm:mt-8 text-center px-2"
        >
          <div className="inline-flex items-center gap-3 sm:gap-4 bg-white rounded-full px-4 sm:px-6 py-3 sm:py-4 shadow-lg">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#8B4789] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-gray-800 font-medium text-sm sm:text-base">Contáctanos para más información</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}