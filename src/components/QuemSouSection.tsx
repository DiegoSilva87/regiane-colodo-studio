import FadeInSection from "./FadeInSection";
import quemSouImg from "@/assets/quemsou.jpeg";

const valores = ["Empatia", "Singularidade", "Humanização", "Ética", "Respeito", "Comprometimento", "Desenvolvimento Humano"];

export default function QuemSouSection() {
  return (
    <section id="quem-sou" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <FadeInSection>
          <p className="font-sans-body text-sm tracking-[0.3em] uppercase text-primary/60 text-center mb-4">Quem Sou Eu</p>
          <h2 className="font-serif-display text-3xl md:text-5xl lg:text-6xl font-light text-foreground text-center mb-16">
            Dra. Regiane Colodo
          </h2>
        </FadeInSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Photo */}
          <FadeInSection>
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img
                  src={quemSouImg}
                  alt="Dra. Regiane Colodo - Psicóloga e Neuropsicóloga"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 rounded-sm -z-10" />
            </div>
          </FadeInSection>

          {/* Text */}
          <FadeInSection delay={0.2}>
            <p className="font-sans-body text-sm tracking-[0.2em] uppercase text-primary/70 mb-6">
              Psicóloga · Neuropsicóloga · Consultora de Carreira & Posicionamento Profissional
            </p>

            <div className="font-sans-body text-foreground/80 leading-relaxed space-y-4 text-[15px]">
              <p>
                Atuei por mais de 15 anos na área corporativa e, há mais de 5 anos, me dedico integralmente à área clínica. Essa vivência me permite integrar estratégia, comportamento e saúde emocional de forma prática e profunda. Auxilio pessoas no desenvolvimento emocional, comportamental e profissional, promovendo mais consciência, clareza e direcionamento. Meu trabalho contribui para o gerenciamento das emoções, fortalecimento das funções cognitivas e comportamentais e construção de uma trajetória profissional mais satisfatória e alinhada à identidade de cada indivíduo. Integro ciência, estratégia e acolhimento humano para promover uma evolução consistente, ética e personalizada. Na prática clínica, atuo com a abordagem humanista, centrada na pessoa, fundamentada nos princípios de Carl Rogers. Acredito no potencial inato de autorrealização e crescimento de cada indivíduo, oferecendo um ambiente acolhedor, empático e não diretivo, que favorece o autoconhecimento, a autonomia e a liberdade de escolha.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-border/50">
              <div>
                <p className="font-serif-display text-3xl text-primary font-light">+15</p>
                <p className="font-sans-body text-xs text-muted-foreground mt-1 tracking-wide">anos de experiência</p>
              </div>
              <div>
                <p className="font-serif-display text-lg text-primary font-light leading-tight">Clínica &<br/>Corporativa</p>
                <p className="font-sans-body text-xs text-muted-foreground mt-1 tracking-wide">Atuação clínica e corporativa</p>
              </div>
              <div>
                <p className="font-serif-display text-lg text-primary font-light leading-tight">Baseada em<br/>Evidências</p>
                <p className="font-sans-body text-xs text-muted-foreground mt-1 tracking-wide">Abordagem baseada em evidências</p>
              </div>
            </div>

            {/* Values */}
            <div className="mt-10">
              <p className="font-sans-body text-sm tracking-[0.2em] uppercase text-primary/70 mb-4">Minha atuação é baseada em :</p>
              <div className="flex flex-wrap gap-3">
                {valores.map((v) => (
                  <span key={v} className="px-4 py-2 bg-secondary text-secondary-foreground text-xs tracking-wider font-sans-body rounded-sm border border-border/30">
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
