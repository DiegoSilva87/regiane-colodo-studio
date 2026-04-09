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
    <section id="palestras" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Text content */}
          <FadeInSection>
            <div className="space-y-8">
              <div>
                <p className="font-sans-body text-sm tracking-[0.3em] uppercase text-primary/50 mb-4">
                  Palestras
                </p>
                <h2 className="font-serif-display text-4xl md:text-5xl lg:text-[3.4rem] font-light text-foreground leading-[1.1] mb-3">
                  Palestras Corporativas
                </h2>
                <p className="font-serif-display text-2xl md:text-3xl font-light text-gold italic">
                  Saúde Emocional & Performance
                </p>
              </div>

              <div className="w-16 h-px bg-primary/20" />

              <div className="space-y-5">
                <p className="font-sans-body text-foreground/70 leading-[1.85] text-[0.95rem]">
                  Ofereço palestras corporativas voltadas ao desenvolvimento da saúde emocional no ambiente de trabalho, contribuindo diretamente para o bem-estar, engajamento e produtividade das equipes.
                </p>
                <p className="font-sans-body text-foreground/70 leading-[1.85] text-[0.95rem]">
                  Os conteúdos são personalizados de acordo com a realidade e necessidade de cada empresa, podendo abordar temas como: burnout, saúde mental, prevenção ao suicídio (Setembro Amarelo), campanhas como Outubro Rosa, Novembro Azul, Janeiro Branco, além de datas como Dia das Mulheres, Dia das Mães e Dia dos Homens.
                </p>
                <p className="font-sans-body text-foreground/70 leading-[1.85] text-[0.95rem]">
                  Também trabalho temas como dependências (química e comportamental), regulação emocional, autocuidado, equilíbrio entre vida pessoal e profissional e estratégias práticas para aumento de performance com saúde.
                </p>
                <p className="font-sans-body text-foreground/70 leading-[1.85] text-[0.95rem]">
                  Cada palestra é construída em parceria com a empresa, com linguagem acessível, aplicabilidade prática e foco em promover consciência, responsabilidade emocional e mudança real no dia a dia dos colaboradores.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Right — Photo collage */}
          <FadeInSection delay={0.15}>
            <div className="grid grid-cols-6 grid-rows-[repeat(4,minmax(0,1fr))] gap-3 h-[560px] md:h-[640px] lg:h-[700px]">
              {/* Large hero photo — top left, 4 cols × 2 rows */}
              <div className="col-span-4 row-span-2 overflow-hidden rounded-2xl group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-500">
                <img
                  src={photos[0].src}
                  alt={photos[0].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Top right — 2 cols × 1 row */}
              <div className="col-span-2 row-span-1 overflow-hidden rounded-2xl group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-500">
                <img
                  src={photos[1].src}
                  alt={photos[1].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Mid right — 2 cols × 1 row */}
              <div className="col-span-2 row-span-1 overflow-hidden rounded-2xl group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-500">
                <img
                  src={photos[2].src}
                  alt={photos[2].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Bottom left — 3 cols × 2 rows */}
              <div className="col-span-3 row-span-2 overflow-hidden rounded-2xl group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-500">
                <img
                  src={photos[3].src}
                  alt={photos[3].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Bottom mid — 3 cols × 1 row */}
              <div className="col-span-3 row-span-1 overflow-hidden rounded-2xl group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-500">
                <img
                  src={photos[4].src}
                  alt={photos[4].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Bottom right — 3 cols × 1 row (uses remaining space) */}
              <div className="col-span-3 row-span-1 overflow-hidden rounded-2xl group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-500">
                <img
                  src={photos[5].src}
                  alt={photos[5].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
