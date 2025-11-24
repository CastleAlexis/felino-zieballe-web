import { User, Users, Music2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: User,
    title: "Solista",
    description: "Presentación íntima con voz y un instrumento. Ideal para eventos privados y ambientes exclusivos.",
    features: ["1 hora de show", "Repertorio personalizado", "Setup minimalista"],
    price: "Consultar",
  },
  {
    icon: Music2,
    title: "Acústico",
    description: "Formato acústico con músicos seleccionados. Perfecto para bodas, eventos corporativos y fiestas.",
    features: ["1.5 horas de show", "2-3 músicos", "Amplificación incluida"],
    price: "Consultar",
  },
  {
    icon: Users,
    title: "Full Banda",
    description: "Experiencia completa con banda completa. Para festivales, conciertos y grandes eventos.",
    features: ["2+ horas de show", "Banda completa", "Producción profesional"],
    price: "Consultar",
  },
]

export function ShowsSection() {
  return (
    <section id="shows" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl tracking-wider text-foreground mb-4">
              SHOWS
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tres formatos únicos para hacer de tu evento una experiencia inolvidable
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="bg-secondary rounded-lg p-8 border border-border hover:border-primary hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-border">
                    <p className="text-2xl font-semibold text-primary mb-4">{service.price}</p>
                    <Button className="w-full bg-primary hover:bg-accent text-primary-foreground rounded-full" asChild>
                      <a href="#contacto">Reservar</a>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Upcoming Shows */}
          <div className="bg-secondary rounded-lg p-8 md:p-12 border border-border">
            <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl tracking-wider text-foreground mb-8 text-center">
              PRÓXIMOS SHOWS
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { date: "15 MAR", venue: "Teatro Municipal", location: "Ciudad Capital" },
                { date: "22 MAR", venue: "Sala de Conciertos", location: "Centro Cultural" },
                { date: "5 ABR", venue: "Festival de Música", location: "Parque Central" },
                { date: "18 ABR", venue: "Club Privado", location: "Zona Premium" },
              ].map((show) => (
                <div
                  key={show.date}
                  className="flex gap-6 bg-background p-6 rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg bg-primary flex flex-col items-center justify-center text-white">
                    <span className="text-2xl font-bold">{show.date.split(" ")[0]}</span>
                    <span className="text-sm">{show.date.split(" ")[1]}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-1">{show.venue}</h4>
                    <p className="text-muted-foreground">{show.location}</p>
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
