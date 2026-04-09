import FadeInSection from "./FadeInSection";
import palestra1 from "@/assets/palestra1.jpeg";
import palestra2 from "@/assets/palestra2.jpeg";
import palestra3 from "@/assets/palestra3.jpeg";
import palestra4 from "@/assets/palestra4.jpeg";
import palestra5 from "@/assets/palestra5.jpeg";
import palestra6 from "@/assets/palestra6.jpeg";

const photos = [
  { src: palestra1, alt: "Dra. Regiane Colodo palestrando sobre Doenças Psicossomáticas para plateia corporativa" },
  { src: palestra2, alt: "Dra. Regiane Colodo apresentando sobre Prejuízos do Excesso de Cortisol" },
  { src: palestra3, alt: "Dra. Regiane Colodo em palestra para equipe operacional" },
  { src: palestra4, alt: "Dra. Regiane Colodo em palestra sobre Saúde Mental no Ambiente Escolar" },
  { src: palestra5, alt: "Dra. Regiane Colodo apresentando seu percurso profissional" },
  { src: palestra6, alt: "Dra. Regiane Colodo em roda de conversa corporativa" },
];

export default function PalestrasSection() {
  return (
    <section id="palestras" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <FadeInSection>
          <p className="font-sans-body text-sm tracking-[0.3em] uppercase text-primary/60 text-center mb-4">
            Palestras
          </p>
          <h2 className="font-serif-display text-3xl md:text-5xl font-light text-foreground text-center mb-6 max-w-4xl mx-auto">
            Palestras Corporativas | Saúde Emocional & Performance
          </h2>
        </FadeInSection>

        {/* Text content */}
        <FadeInSection delay={0.1}>
          <div className="max-w-3xl mx-auto mb-20 space-y-6">
            <p className="font-sans-body text-foreground/70 leading-relaxed text-center">
              Ofereço palestras corporativas voltadas ao desenvolvimento da saúde emocional no ambiente de trabalho, contribuindo diretamente para o bem-estar, engajamento e produtividade das equipes.
            </p>
            <p className="font-sans-body text-foreground/70 leading-relaxed text-center">
              Os conteúdos são personalizados de acordo com a realidade e necessidade de cada empresa, podendo abordar temas como: burnout, saúde mental, prevenção ao suicídio (Setembro Amarelo), campanhas como Outubro Rosa, Novembro Azul, Janeiro Branco, além de datas como Dia das Mulheres, Dia das Mães e Dia dos Homens.
            </p>
            <p className="font-sans-body text-foreground/70 leading-relaxed text-center">
              Também trabalho temas como dependências (química e comportamental), regulação emocional, autocuidado, equilíbrio entre vida pessoal e profissional e estratégias práticas para aumento de performance com saúde.
            </p>
            <p className="font-sans-body text-foreground/70 leading-relaxed text-center">
              Cada palestra é construída em parceria com a empresa, com linguagem acessível, aplicabilidade prática e foco em promover consciência, responsabilidade emocional e mudança real no dia a dia dos colaboradores.
            </p>
          </div>
        </FadeInSection>

        {/* Photo grid — bento-style layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          {/* Large — spans 2 cols & 2 rows */}
          <FadeInSection delay={0} className="col-span-2 row-span-2">
            <div className="w-full h-full overflow-hidden rounded-sm group cursor-pointer">
              <img
                src={photos[0].src}
                alt={photos[0].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 group-hover:brightness-90"
              />
            </div>
          </FadeInSection>

          {/* Top right */}
          <FadeInSection delay={0.1} className="col-span-1">
            <div className="w-full h-full overflow-hidden rounded-sm group cursor-pointer">
              <img
                src={photos[1].src}
                alt={photos[1].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 group-hover:brightness-90"
              />
            </div>
          </FadeInSection>

          <FadeInSection delay={0.15} className="col-span-1">
            <div className="w-full h-full overflow-hidden rounded-sm group cursor-pointer">
              <img
                src={photos[2].src}
                alt={photos[2].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 group-hover:brightness-90"
              />
            </div>
          </FadeInSection>

          {/* Bottom right */}
          <FadeInSection delay={0.2} className="col-span-1">
            <div className="w-full h-full overflow-hidden rounded-sm group cursor-pointer">
              <img
                src={photos[3].src}
                alt={photos[3].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 group-hover:brightness-90"
              />
            </div>
          </FadeInSection>

          <FadeInSection delay={0.25} className="col-span-1">
            <div className="w-full h-full overflow-hidden rounded-sm group cursor-pointer">
              <img
                src={photos[4].src}
                alt={photos[4].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 group-hover:brightness-90"
              />
            </div>
          </FadeInSection>

          {/* Full-width bottom */}
          <FadeInSection delay={0.3} className="col-span-2 md:col-span-4">
            <div className="w-full h-full overflow-hidden rounded-sm group cursor-pointer">
              <img
                src={photos[5].src}
                alt={photos[5].alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 group-hover:brightness-90"
              />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
