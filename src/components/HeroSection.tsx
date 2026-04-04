import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-[#FF6B6B] to-[#FF5252] py-8 sm:py-12 px-4 sm:px-6 rounded-b-[2rem] sm:rounded-b-[3rem] shadow-[inset_0_2px_40px_rgba(255,255,255,0.5),inset_0_-2px_20px_rgba(0,0,0,0.1),0_10px_40px_rgba(0,0,0,0.15)] border-t-4 border-white/30">
      <div className="max-w-6xl mx-auto text-center">
        <div className="w-24 sm:w-32 h-24 sm:h-32 relative mx-auto mb-4 sm:mb-6">
          <Image
            src="/Stimulo.png"
            alt="Stimulos Logo"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl text-[#1E3A8A] leading-tight px-2">
          ¡BIENVENIDOS AL CENTRO DE APRENDIZAJE
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>Y DESARROLLO
          INFANTIL STIMULOS!
        </h1>
      </div>
    </section>
  );
}