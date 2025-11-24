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
            <div className="bg-muted rounded-md">
              <iframe
                src="https://open.spotify.com/embed/artist/7CBE77GM6zUye4E5YsHiu8?utm_source=generator"
                title="Paulo Zieballe - Spotify"
                loading="lazy"
                frameBorder={0}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                className="w-full h-[352px] rounded-xl"
              />
            </div>
          </div>

          {/* YouTube Videos Grid */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Videos Musicales</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { id: 'EYfMBiwr3W8', title: 'POLIAMOR x PAULO ZIEBALLE ( VIDEO OFICIAL )' },
                { id: 'd8x8BIMIIIM', title: 'Paulo Zieballe - Déjala que pruebe ( Oficial Video )' },
                { id: 'OXympwlXDkI', title: 'Encuentro - Paulo Zieballe ( video oficial )' },
                { id: 'Fe98yAqDsXk', title: 'Ya no se que hacer - Paulo Zieballe ( Video Oficial )' },
              ].map((video) => (
                <div
                  key={video.id}
                  className="bg-background rounded-lg shadow-lg overflow-hidden border border-border"
                >
                  <div className="aspect-video bg-muted rounded-t-md overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-foreground">
                      <a
                        href={`https://youtu.be/${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {video.title}
                      </a>
                    </h4>
                    <p className="text-sm text-muted-foreground">Reproducir en YouTube</p>
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
