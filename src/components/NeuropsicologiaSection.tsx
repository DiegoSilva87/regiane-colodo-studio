import FadeInSection from "./FadeInSection";
import neuroImg from "@/assets/neuropsicologia.jpeg";
import { Brain, Eye, Heart, ClipboardList, CheckCircle, AlertTriangle } from "lucide-react";

const habilidades = ["Atenção", "Memória", "Funções executivas(Panejamento, Organização, Controle Inibitório)", "Raciocínio", "Humor e Comportamento"];
const resultados = [
  "Tratamentos adequados",
  "Estratégias para o dia a dia",
  "Orientações para família e escola",
  "Adaptações acadêmicas e profissionais",
  "Intervenções multidisciplinares quando necessário",
];
const etapas = [
  "Entrevista inicial com paciente e/ou familiares",
  "Aplicação de testes e instrumentos padronizados",
  "Contato com escola e/ou outros profissionais envolvidos (quando necessário)",
  "Análise técnica dos dados",
  "Sessão de devolutiva com entrega do laudo e explicação detalhada dos resultados",
];
const indicacoes = [
  "TDAH",
  "Transtornos do Espectro Autista(TEA)",
  "Dificuldades de aprendizagem",
  "Atrasos no desenvolvimento",
  "Altas habilidades/Superdotação",
  "Alzheimer e outros quadros demenciais",
  "Sequelas cognitivas pós AVC ou TCE",
  "Alterações cognitivas associadas a questões emocionais",
];

export default function NeuropsicologiaSection() {
  return (
    <section id="neuropsicologia" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Intro */}
        <FadeInSection>
          <p className="font-sans-body text-sm tracking-[0.3em] uppercase text-primary/60 text-center mb-4">Neuropsicologia</p>
          <h2 className="font-serif-display text-3xl md:text-5xl font-light text-foreground text-center mb-12 max-w-3xl mx-auto leading-tight">
            A ponte entre ciência e cuidado humano
          </h2>
        </FadeInSection>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <FadeInSection>
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img src={neuroImg} alt="Dra. Regiane Colodo - Neuropsicóloga" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="font-sans-body text-foreground/80 leading-relaxed space-y-5 text-[15px]">
              <p>Sempre fui profundamente interessada em compreender como o cérebro influencia nossas emoções, comportamentos e escolhas. A Neuropsicologia surgiu para mim como uma ponte entre ciência e cuidado humano, unindo avaliação técnica rigorosa com escuta sensível.</p>
              <p>Hoje, me dedico a investigar de forma ética e cuidadosa o funcionamento cognitivo, emocional e comportamental de crianças, adolescentes, adultos e idosos, contribuindo para diagnósticos mais precisos e intervenções realmente direcionadas.</p>
              <p>Acredito que entender o próprio funcionamento cognitivo não é rotular, é gerar consciência. E consciência gera estratégia, autonomia e qualidade de vida.</p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              {[{ icon: <Brain size={20} />, label: "Avaliação baseada em evidências" }, { icon: <Heart size={20} />, label: "Escuta sensível" }, { icon: <Eye size={20} />, label: "Clareza e direcionamento" }].map((d) => (
                <div key={d.label} className="flex items-center gap-3 bg-secondary px-5 py-3 rounded-sm border border-border/30">
                  <span className="text-primary">{d.icon}</span>
                  <span className="font-sans-body text-sm text-foreground/80">{d.label}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>

        {/* Avaliação */}
        <FadeInSection>
          <div className="bg-secondary/60 rounded-sm p-8 lg:p-12 mb-12 border border-border/20">
            <h3 className="font-serif-display text-2xl md:text-3xl font-light text-foreground mb-6">Avaliação Neuropsicológica</h3>
            <p className="font-sans-body text-foreground/70 leading-relaxed mb-8 max-w-3xl">
              A avaliação neuropsicológica é um processo estruturado e aprofundado de investigação do funcionamento cerebral e cognitivo. São analisadas habilidades como:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {habilidades.map((h) => (
                <div key={h} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                  <span className="font-sans-body text-sm text-foreground/80">{h}</span>
                </div>
              ))}
            </div>
            <p className="font-sans-body text-foreground/70 leading-relaxed mb-4">
              Os resultados contribuem para hipóteses diagnósticas mais assertivas e, principalmente, para identificar tanto dificuldades quanto potencialidades.
            </p>
            <p className="font-sans-body text-foreground/70 leading-relaxed mb-4">A partir disso, é possível direcionar:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {resultados.map((r) => (
                <div key={r} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                  <span className="font-sans-body text-sm text-foreground/80">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Como funciona */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <FadeInSection>
            <div className="bg-background p-8 lg:p-10 rounded-sm border border-border/30 h-full">
              <ClipboardList size={28} className="text-primary mb-4" strokeWidth={1.2} />
              <h3 className="font-serif-display text-2xl font-light text-foreground mb-4">Como funciona</h3>
              <p className="font-sans-body text-foreground/70 leading-relaxed mb-6">
                Meu objetivo não é apenas entregar um laudo, mas oferecer clareza, direcionamento e segurança para o paciente e sua rede de apoio.
              </p>
              <h4 className="font-sans-body text-sm tracking-[0.2em] uppercase text-primary/70 mb-4">Etapas do processo</h4>
              <ol className="space-y-3">
                {etapas.map((e, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-serif-display text-lg text-primary/50 font-light">{i + 1}.</span>
                    <span className="font-sans-body text-sm text-foreground/80 leading-relaxed">{e}</span>
                  </li>
                ))}
              </ol>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.15}>
            <div className="bg-background p-8 lg:p-10 rounded-sm border border-border/30 h-full">
              <AlertTriangle size={28} className="text-primary mb-4" strokeWidth={1.2} />
              <h3 className="font-serif-display text-2xl font-light text-foreground mb-4">Quando é indicada</h3>
              <p className="font-sans-body text-foreground/70 leading-relaxed mb-6">
                A avaliação é indicada quando há suspeita de:
              </p>
              <div className="space-y-3">
                {indicacoes.map((ind) => (
                  <div key={ind} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="font-sans-body text-sm text-foreground/80">{ind}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
