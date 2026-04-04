'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function CenterSection() {
  const images = [
    { src: "/centro1.jpeg", alt: "Sala de terapia con escritorio y decoración infantil" },
    { src: "/centro2.jpeg", alt: "Sala de terapia con arcoíris y escritorio" },
    { src: "/centro3.jpeg", alt: "Sala de juegos con paredes decoradas" },
    { src: "/centro4.jpeg", alt: "Sala de psicomotricidad con materiales" }
  ];

  return (
    <section className="px-2 sm:px-6">
      <div className="max-w-6xl mx-auto bg-gradient-to-b from-[#9FF5E6] to-[#7FEFDB] rounded-[2rem] sm:rounded-[3rem] shadow-[inset_0_2px_40px_rgba(255,255,255,0.5),inset_0_-2px_20px_rgba(0,0,0,0.1),0_10px_40px_rgba(0,0,0,0.15)] border-t-4 border-white/30 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-[#8B4789]"
        >
          Nuestro centro
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-800 mb-8 sm:mb-12 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed font-medium"
        >
          Nuestras instalaciones están diseñadas especialmente para crear un ambiente acogedor, seguro y estimulante 
          donde cada niño pueda desarrollar todo su potencial.
        </motion.p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {images.map((image, index) => (
            <motion.div 
              key={index} 
              className="overflow-hidden rounded-xl sm:rounded-2xl shadow-xl group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-56 sm:h-64 md:h-80 relative">
                  <Image 
                    src={image.src} 
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}