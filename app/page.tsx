import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MusicSection } from "@/components/music-section"
import { ShowsSection } from "@/components/shows-section"
import { GallerySection } from "@/components/gallery-section"
import { PressSection } from "@/components/press-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <ShowsSection />
      <GallerySection />
      <PressSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
