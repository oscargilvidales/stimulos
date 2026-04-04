import { HeroSection } from '@/components/HeroSection'
import { ContactSection } from '@/components/ContactSection'
import { ServicesSection } from '@/components/ServicesSection'
import { CenterSection } from '@/components/CenterSection'
import { LocationSection } from '@/components/LocationSection'
import { Footer } from '@/components/Footer'
import { AboutSection } from '@/components/AboutSection'

export default function Home() {
  return (
    <main className="bg-sky-200 min-h-screen">
      <HeroSection />
      <div className="py-8"></div>
      <AboutSection />
      <div className="py-8"></div>
      <ServicesSection />
      <div className="py-8"></div>
      <CenterSection />
      <div className="py-8"></div>
      <LocationSection />
      <div className="py-8"></div>
      <ContactSection />
      <Footer />
    </main>
  )
}