import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video-capa.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/40 to-foreground/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans-body text-sm md:text-base tracking-[0.3em] uppercase text-primary-foreground/70 mb-6"
        >
          Psicologia · Neuropsicologia · Consultoria de Carreira
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground leading-tight mb-6"
        >
          Dra. Regiane Colodo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-sans-body text-base md:text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Ciência, estratégia e acolhimento humano para transformar sua vida pessoal e profissional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/5511971690657"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-sans-body hover:bg-primary/90 transition-all duration-300 rounded-sm"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-3 border border-primary-foreground/40 text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-sans-body hover:bg-primary-foreground/10 transition-all duration-300 rounded-sm"
          >
            <Phone size={18} />
            Agendar Atendimento
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-12 bg-primary-foreground/30 mx-auto mb-2" />
      </motion.div>
    </section>
  );
}
