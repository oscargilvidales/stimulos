import Link from 'next/link';
import Image from 'next/image';
export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-200 to-gray-300 py-6 sm:py-8 px-4 sm:px-6 rounded-t-[2rem] sm:rounded-t-[3rem] mt-6 sm:mt-8 shadow-[inset_0_2px_40px_rgba(255,255,255,0.8),inset_0_-2px_20px_rgba(0,0,0,0.05),0_-10px_40px_rgba(0,0,0,0.15)] border-t-4 border-white/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 sm:w-20 h-16 sm:h-20 relative">
            <Image 
              src="/Stimulo.png" 
              alt="Stimulos Logo" 
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        <p className="text-center text-gray-700 italic max-w-2xl text-sm sm:text-base leading-relaxed px-2 font-medium">
          &ldquo;Cada rincón de nuestro espacio ha sido diseñado con un objetivo claro: inspirar, educar y apoyar&rdquo;.
        </p>
        
        <Link 
          href="/politica-privacidad" 
          className="text-[#8B4789] hover:text-[#6B3669] hover:underline font-semibold transition-colors text-sm sm:text-base"
        >
          Política de Privacidad
        </Link>
      </div>
      
      <div className="max-w-6xl mx-auto mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-400 text-center">
        <p className="text-gray-600 text-xs sm:text-sm font-medium">
          © 2026 STIMULOS Centro Infantil. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}