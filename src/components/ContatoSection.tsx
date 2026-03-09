import FadeInSection from "./FadeInSection";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function ContatoSection() {
  return (
    <section id="contato" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <FadeInSection>
          <p className="font-sans-body text-sm tracking-[0.3em] uppercase text-primary/60 text-center mb-4">Contato</p>
          <h2 className="font-serif-display text-3xl md:text-5xl font-light text-foreground text-center mb-6">
            Agende seu atendimento
          </h2>
          <p className="font-sans-body text-foreground/70 text-center max-w-2xl mx-auto mb-16">
            Informações para agendamento e atendimento presencial.
          </p>
        </FadeInSection>

        <div className="grid lg:grid-cols-2 gap-12">
          <FadeInSection>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Phone size={20} className="text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-sans-body text-sm tracking-[0.15em] uppercase text-foreground font-medium mb-1">Telefone</h4>
                  <a href="tel:+5511971690657" className="font-sans-body text-foreground/70 hover:text-primary transition-colors">(11) 97169-0657</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={20} className="text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-sans-body text-sm tracking-[0.15em] uppercase text-foreground font-medium mb-1">E-mails</h4>
                  <p className="font-sans-body text-xs text-muted-foreground mb-1">Psicologia & Neuropsicologia</p>
                  <a href="mailto:psicregianecolodo@gmail.com" className="font-sans-body text-foreground/70 hover:text-primary transition-colors text-sm block mb-2">psicregianecolodo@gmail.com</a>
                  <p className="font-sans-body text-xs text-muted-foreground mb-1">Consultoria & Carreira</p>
                  <a href="mailto:colodoconsultoria@gmail.com" className="font-sans-body text-foreground/70 hover:text-primary transition-colors text-sm">colodoconsultoria@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={20} className="text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-sans-body text-sm tracking-[0.15em] uppercase text-foreground font-medium mb-1">Horário de Atendimento</h4>
                  <p className="font-sans-body text-foreground/70 text-sm">Segunda a Sexta — 8h às 18h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-sans-body text-sm tracking-[0.15em] uppercase text-foreground font-medium mb-1">Endereço</h4>
                  <p className="font-sans-body text-foreground/70 text-sm leading-relaxed">
                    Clínica Espaço Gaudium<br />
                    Rua Prudente de Moraes, 1104 — Centro<br />
                    Jundiaí — SP<br />
                    CEP 13201-004
                  </p>
                  <p className="font-sans-body text-xs text-muted-foreground mt-2">Atendimento presencial mediante agendamento.</p>
                </div>
              </div>

              <a
                href="https://wa.me/5511971690657"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-sans-body hover:bg-primary/90 transition-all duration-300 rounded-sm mt-4"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="rounded-sm overflow-hidden border border-border/30 h-80 lg:h-full min-h-[320px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.0!2d-46.8842!3d-23.1897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf2655f5555555%3A0x5555555555555555!2sRua+Prudente+de+Moraes%2C+1104+-+Centro%2C+Jundia%C3%AD+-+SP%2C+13201-004!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica Espaço Gaudium"
              />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
