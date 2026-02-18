import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SustainabilitySection from '@/components/SustainabilitySection'
import WinSailHomeSection from '@/components/WinSailHomeSection'
import NewsSection from '@/components/NewsSection'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SustainabilitySection />
        <WinSailHomeSection />
        <NewsSection />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
