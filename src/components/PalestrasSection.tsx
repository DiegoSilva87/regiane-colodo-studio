import FadeInSection from "./FadeInSection";
import neuroImg from "@/assets/neuropsicologia.jpeg";
import psiImg from "@/assets/psicologia.jpeg";
import quemSouImg from "@/assets/quemsou.jpeg";

const photos = [quemSouImg, psiImg, neuroImg];

export default function PalestrasSection() {
  return (
    <section id="palestras" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <FadeInSection>
          <p className="font-sans-body text-sm tracking-[0.3em] uppercase text-primary/60 text-center mb-4">Palestras</p>
          <h2 className="font-serif-display text-3xl md:text-5xl font-light text-foreground text-center mb-6 max-w-3xl mx-auto">
            Palestras e eventos
          </h2>
          <p className="font-sans-body text-foreground/70 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
            Compartilhando conhecimento, ciência e estratégia em eventos, empresas e instituições.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo, i) => (
            <FadeInSection key={i} delay={i * 0.15}>
              <div className="aspect-[3/4] overflow-hidden rounded-sm group cursor-pointer">
                <img
                  src={photo}
                  alt={`Dra. Regiane Colodo em palestra ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 group-hover:brightness-90"
                />
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
