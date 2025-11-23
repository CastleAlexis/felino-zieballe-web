import { Award, Mic, Music } from "lucide-react"

export function AboutSection() {
  return (
    <section id="bio" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000" />
            <img
              src="/images/felino-about.jpg"
              alt="Felino Zieballe Portrait"
              className="relative rounded-lg w-full h-auto shadow-2xl border-2 border-primary/20"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl tracking-wider text-foreground">
              SOBRE MÍ
            </h2>
            <div className="w-24 h-1 bg-primary" />

            <p className="text-lg text-muted-foreground leading-relaxed">
              Felino Zieballe es un artista versátil que ha cautivado audiencias en diferentes escenarios y plataformas.
              Con una carrera marcada por la pasión y la dedicación, ha logrado posicionarse como una figura destacada
              en la escena musical.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Su estilo único combina elementos clásicos con innovación contemporánea, creando experiencias musicales
              que conectan profundamente con el público.
            </p>

            {/* Achievements */}
            <div className="grid md:grid-cols-2 gap-6 pt-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Gran Rojo</h3>
                  <p className="text-sm text-muted-foreground">Participación destacada en el programa de televisión</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mic className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">The Voice</h3>
                  <p className="text-sm text-muted-foreground">
                    Reconocimiento en uno de los programas más importantes
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start md:col-span-2">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Music className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Compositor Original</h3>
                  <p className="text-sm text-muted-foreground">Creador de música auténtica con identidad propia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
