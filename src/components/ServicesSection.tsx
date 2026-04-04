'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ServicesSection() {
  const services = [
    { image: "/bocadillo1.png", alt: "Psicología Infantil / Neuropsicología Infantil" },
    { image: "/bocadillo2.png", alt: "Psicomotricidad / Estimulación Sensorial" },
    { image: "/bocadillo3.png", alt: "Atención a Necesidades Específicas de Apoyo Educativo" },
    { image: "/bocadillo4.png", alt: "Logopedia / Psicopedagogía" },
    { image: "/bocadillo5.png", alt: "Atención a Necesidades Educativas Especiales" },
    { image: "/bocadillo6.png", alt: "BECAS NEAE / Reeducación Pedagógica" },
    { image: "/bocadillo7.png", alt: "Evaluaciones Psicopedagógicas / Informes" },
    { image: "/bocadillo8.png", alt: "Orientación Familiar" }
  ];

  return (
    <section className="px-2 sm:px-6">
      <div className="max-w-7xl mx-auto bg-gradient-to-b from-white to-gray-50 rounded-[2rem] sm:rounded-[3rem] shadow-[inset_0_2px_40px_rgba(255,255,255,0.8),inset_0_-2px_20px_rgba(0,0,0,0.05),0_10px_40px_rgba(0,0,0,0.15)] border-t-4 border-white/40 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl text-center mb-6 sm:mb-8 text-[#8B4789]"
        >
          Servicios
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-700 mb-10 sm:mb-16 max-w-4xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
        >
          En nuestro centro, contamos con un equipo interdisciplinario de profesionales cualificados en los ámbitos de la 
          psicología, psicopedagogía, neuropsicología y logopedia. Nuestro objetivo es proporcionar una atención personalizada e 
          integral a cada niño, trabajando en estrecha colaboración con la familia, la escuela y otros profesionales.
        </motion.p>
        
        <div className="space-y-6 sm:space-y-8">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index} 
                className={`flex ${isEven ? 'justify-start' : 'justify-end'}`}
                initial={{ opacity: 0, x: isEven ? -100 : 100, rotate: isEven ? -5 : 5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
              >
                <motion.div
                  className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                  whileHover={{ scale: 1.05, y: -10, rotate: isEven ? 2 : -2 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={service.image}
                    alt={service.alt}
                    width={400}
                    height={300}
                    sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1024px) 448px, 512px"
                    className="w-full h-auto rounded-lg drop-shadow-2xl"
                    style={{
                      filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2))'
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}