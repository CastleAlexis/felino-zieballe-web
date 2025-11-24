import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/images/paulo-portada.jpg" alt="Paulo Zieballe" className="w-full h-full object-contain" />
        {/* Overlay with beige gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e8dfd3]/90 via-[#f5f2e9]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h1 className="font-sans text-6xl md:text-8xl lg:text-9xl tracking-widest mb-4">
          <span className="font-light text-foreground">Paulo</span>
          <br />
          <span className="font-bold text-primary">Zieballe</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide mb-8">
          Artista · Compositor · Showman
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-accent text-primary-foreground font-medium rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
          asChild
        >
          <a href="#musica">
            Descubre mi música
            <ArrowDown className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  )
}
