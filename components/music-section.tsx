import { Play } from "lucide-react"

export function MusicSection() {
  return (
    <section id="musica" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl tracking-wider text-foreground mb-4">
              MÚSICA
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explora mi colección musical. Desde composiciones originales hasta interpretaciones únicas.
            </p>
          </div>

          {/* Spotify Player */}
          <div className="bg-background rounded-lg shadow-xl p-6 mb-12 border border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Play className="w-6 h-6 text-primary" />
              Escucha en Spotify
            </h3>
            <div className="aspect-[16/9] md:aspect-[16/6] bg-muted rounded-md flex items-center justify-center">
              <p className="text-muted-foreground">[Spotify Player Embed - Agregar URL de Spotify]</p>
            </div>
          </div>

          {/* YouTube Videos Grid */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Videos Musicales</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((video) => (
                <div
                  key={video}
                  className="bg-background rounded-lg shadow-lg overflow-hidden border border-border group hover:border-primary transition-colors"
                >
                  <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden">
                    <img
                      src={`/music-video-performance-artist-.jpg?height=360&width=640&query=music+video+performance+artist+${video}`}
                      alt={`Video ${video}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-foreground">Video Título {video}</h4>
                    <p className="text-sm text-muted-foreground">Descripción del video musical</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
