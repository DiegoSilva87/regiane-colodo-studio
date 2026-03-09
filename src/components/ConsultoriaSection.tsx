import FadeInSection from "./FadeInSection";
import { FileText, Linkedin, Rocket, Award } from "lucide-react";

const services = [
  {
    icon: <FileText size={28} strokeWidth={1.2} />,
    title: "Currículo Estratégico",
    subtitle: "Consultoria Individual",
    oQue: "Elaboração de um currículo estratégico, claro e direcionado, alinhado ao objetivo de carreira do profissional, seguindo as estratégias necessárias para aprovação nos sistemas ATS e na análise de recrutadores humanos.",
    resultado: "Um currículo objetivo, profissional e bem posicionado, transmitindo autoridade sobre aquilo que você sabe fazer e deseja atuar, aumentando significativamente as chances de passar pela triagem e ser chamado para entrevistas.",
  },
  {
    icon: <Linkedin size={28} strokeWidth={1.2} />,
    title: "Posicionamento Profissional Estratégico",
    subtitle: "Consultoria de LinkedIn",
    oQue: "Construção completa e estratégica do LinkedIn, posicionando sua imagem profissional com clareza, autoridade e segurança, facilitando a leitura pelo mercado e pelos sistemas de triagem ATS.",
    resultado: "Um LinkedIn bem posicionado, alinhado ao seu objetivo profissional, com todos os campos estratégicos preenchidos corretamente, favorecendo a leitura do algoritmo e aumentando sua visibilidade profissional.",
  },
  {
    icon: <Rocket size={28} strokeWidth={1.2} />,
    title: "Destrave seu LinkedIn",
    subtitle: "Do Perfil Invisível ao Profissional Desejado",
    oQue: "Mentoria individual online focada no LinkedIn, onde ensino de forma estratégica como destravar o algoritmo da plataforma, aumentar a visibilidade do perfil e gerar mais oportunidades de emprego ou serviços.",
    resultado: "Mais visibilidade, aumento de conexões, networking qualificado e geração ativa de oportunidades alinhadas ao seu perfil profissional.",
  },
  {
    icon: <Award size={28} strokeWidth={1.2} />,
    title: "O Momento do SIM",
    subtitle: "Mentoria para Entrevistas",
    oQue: "Mentoria individual online para preparação estratégica de entrevistas de emprego, com foco em clareza na comunicação, atualização sobre o comportamento do mercado e compreensão do uso da inteligência artificial nos processos seletivos.",
    resultado: 'Discurso profissional estruturado, mais segurança emocional e aumento real das chances de ouvir o seu próximo "sim".',
  },
];

export default function ConsultoriaSection() {
  return (
    <section id="consultoria" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-6 lg:px-12">
        <FadeInSection>
          <p className="font-sans-body text-sm tracking-[0.3em] uppercase text-primary/60 text-center mb-4">
            Consultoria de Carreira e Posicionamento Profissional
          </p>
          <h2 className="font-serif-display text-3xl md:text-5xl font-light text-foreground text-center mb-6 max-w-4xl mx-auto leading-tight">
            Estratégia para sua carreira
          </h2>
          <p className="font-sans-body text-foreground/70 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            Uma consultoria que te ajuda a organizar sua trajetória, fortalecer seu posicionamento profissional e se destacar de forma estratégica no mercado de trabalho. Currículo Estratégico.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <FadeInSection key={s.title} delay={i * 0.1}>
              <div className="bg-background p-8 lg:p-10 rounded-sm border border-border/30 hover:shadow-lg hover:border-primary/20 transition-all duration-500 h-full group">
                <div className="text-primary mb-5 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                <h3 className="font-serif-display text-xl md:text-2xl font-medium text-foreground mb-1">{s.title}</h3>
                <p className="font-sans-body text-xs tracking-[0.15em] uppercase text-primary/60 mb-6">{s.subtitle}</p>

                <div className="mb-5">
                  <p className="font-sans-body text-xs tracking-[0.15em] uppercase text-primary/80 mb-2 font-medium">O que é</p>
                  <p className="font-sans-body text-sm text-foreground/70 leading-relaxed">{s.oQue}</p>
                </div>

                <div>
                  <p className="font-sans-body text-xs tracking-[0.15em] uppercase text-primary/80 mb-2 font-medium">Resultado</p>
                  <p className="font-sans-body text-sm text-foreground/70 leading-relaxed">{s.resultado}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
