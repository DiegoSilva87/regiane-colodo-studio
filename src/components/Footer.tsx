import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif-display text-2xl text-primary-foreground font-light mb-2">Regiane Colodo</h3>
            <p className="font-sans-body text-xs text-primary-foreground/50 tracking-wider">
              Psicóloga · Neuropsicóloga · Consultora de Carreira
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/colodoconsultoria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300"
              aria-label="Instagram @colodoconsultoria"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.instagram.com/psicregiane"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300"
              aria-label="Instagram @psicregiane"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/regiane-colodo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-8 text-center">
          <p className="font-sans-body text-xs text-primary-foreground/40 tracking-wider">
            © {new Date().getFullYear()} Regiane Colodo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
