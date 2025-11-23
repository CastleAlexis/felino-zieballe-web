import { Instagram, Facebook, Youtube } from "lucide-react"
import { Music2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#d4ccc0] border-t-2 border-primary py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-foreground mb-2">
                FELINO ZIEBALLE
              </h3>
              <p className="text-muted-foreground">Artista · Compositor · Showman</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                {["Música", "Shows", "Bio", "Galería", "Prensa", "Contacto"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Sígueme</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/felinozieballe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://facebook.com/felinozieballe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Spotify"
                >
                  <Music2 className="w-6 h-6" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-primary/20 text-center">
            <p className="text-sm text-muted-foreground">© 2025 Felino Zieballe. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
