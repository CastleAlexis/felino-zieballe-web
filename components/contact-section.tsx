import { Mail, MessageCircle, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+54 9 11 XXXX-XXXX",
    href: "https://wa.me/5491112345678",
    color: "hover:bg-green-50 hover:border-green-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contacto@paulozieballe.com",
    href: "mailto:contacto@paulozieballe.com",
    color: "hover:bg-blue-50 hover:border-blue-500",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@paulozieballe",
    href: "https://instagram.com/paulozieballe",
    color: "hover:bg-pink-50 hover:border-pink-500",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "Paulo Zieballe",
    href: "https://facebook.com/paulozieballe",
    color: "hover:bg-blue-50 hover:border-blue-600",
  },
]

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl tracking-wider text-foreground mb-4">
              CONTACTO
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ¿Listo para hacer de tu evento algo memorable? Contáctame para reservas y consultas
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-background p-8 rounded-lg border-2 border-border ${method.color} transition-all duration-300 group shadow-md hover:shadow-xl`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{method.label}</h3>
                      <p className="text-muted-foreground">{method.value}</p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>

          {/* CTA Box */}
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Tienes una consulta?</h3>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Estoy disponible para shows en formato solista, acústico o full banda. Contáctame directamente para
              discutir los detalles de tu evento.
            </p>
            <Button size="lg" variant="secondary" className="rounded-full px-8 py-6 text-lg font-semibold" asChild>
              <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Enviar mensaje por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
