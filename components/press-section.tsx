import { Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PressSection() {
  const pressPhotos = [
    {
      id: 1,
      src: "/images/press-1.jpg",
      alt: "Felino Zieballe - Snake Print Hooded Look",
    },
    {
      id: 2,
      src: "/images/press-2.jpg",
      alt: "Felino Zieballe - Mesh Top Profile",
    },
    {
      id: 3,
      src: "/images/press-3.jpg",
      alt: "Felino Zieballe - Striped Overalls",
    },
    {
      id: 4,
      src: "/images/press-4.jpg",
      alt: "Felino Zieballe - Sunglasses Black Vest",
    },
  ]

  return (
    <section id="prensa" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl tracking-wider text-foreground mb-4">
              PRENSA
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">Kit de prensa y recursos para medios</p>
          </div>

          {/* Press Kit Banner */}
          <div className="relative rounded-2xl overflow-hidden mb-12 shadow-2xl border-2 border-border">
            <img src="/professional-press-kit-banner-elegant.jpg" alt="Press Kit" className="w-full h-64 md:h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <FileText className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Kit de Prensa Digital</h3>
              <p className="text-white/90 mb-6 max-w-2xl">
                Biografía completa, fotos en alta resolución, rider técnico y material promocional
              </p>
              <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground rounded-full px-8">
                <Download className="mr-2 h-5 w-5" />
                Descargar Press Kit (PDF)
              </Button>
            </div>
          </div>

          {/* Press Photos Grid */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Fotos de Prensa</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {pressPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="aspect-square rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-colors group cursor-pointer shadow-md"
                >
                  <img
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
