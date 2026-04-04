import Image from 'next/image';

export function AboutSection() {
  return (
    <section className="px-2 sm:px-6">
      <div className="max-w-6xl mx-auto bg-gradient-to-b from-[#FFD84D] to-[#FFC629] rounded-[2rem] sm:rounded-[3rem] shadow-[inset_0_2px_40px_rgba(255,255,255,0.5),inset_0_-2px_20px_rgba(0,0,0,0.1),0_10px_40px_rgba(0,0,0,0.15)] border-t-4 border-white/30 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl overflow-hidden relative h-96">
          <Image 
            src="/foto1-scaled.jpg" 
            alt="Niño con crayones"
            fill
            className="object-cover"
          />
        </div>
        <p className="text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto text-gray-800 leading-relaxed font-medium">
          En STIMULOS, creemos que cada niño y niña es único y especial, y que merecen el apoyo y la atención 
          adecuados para alcanzar su máximo desarrollo y potencial.
        </p>
      </div>
    </section>
  );
}