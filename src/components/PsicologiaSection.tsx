import FadeInSection from "./FadeInSection";
import psiImg from "@/assets/psicologia.jpeg";
import { Briefcase, MessageCircle, Baby, Users } from "lucide-react";

const services = [
  {
    icon: <Briefcase size={28} strokeWidth={1.2} />,
    title: "Psicoterapia Adultos",
    desc: "Psicoterapia focada no autoconhecimento, gestão emocional, ansiedade e desafios pessoais e profissionais.",
  },
  {
    icon: <MessageCircle size={28} strokeWidth={1.2} />,
    title: "Psicoterapia Adolescentes",
    desc: "Atendimento voltado às demandas emocionais da adolescência, autoestima, ansiedade e relações familiares.",
  },
  {
    icon: <Baby size={28} strokeWidth={1.2} />,
    title: "Psicoterapia Infantil",
    desc: "Acompanhamento especializado para crianças, promovendo o desenvolvimento emocional e social.",
  },
  {
    icon: <Users size={28} strokeWidth={1.2} />,
    title: "Orientação Parental",
    desc: "Suporte aos pais para fortalecer vínculos e lidar com os desafios do desenvolvimento infantil.",
  },
];

export default function PsicologiaSection() {
  return (
    <section id="psicologia" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <FadeInSection>
            <p className="font-sans-body text-sm tracking-[0.3em] uppercase text-primary/60 mb-4">Psicologia</p>
            <h2 className="font-serif-display text-3xl md:text-5xl font-light text-foreground mb-8 leading-tight">
              Atendimentos personalizados
            </h2>
            <p className="font-sans-body text-foreground/70 leading-relaxed">
              Atendimentos personalizados, baseados em ciência, escuta ativa e respeito à singularidade de cada pessoa.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={psiImg}
                alt="Dra. Regiane Colodo - Psicóloga"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </FadeInSection>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <FadeInSection key={s.title} delay={i * 0.1}>
              <div className="bg-background p-8 rounded-sm border border-border/30 hover:shadow-lg hover:border-primary/20 transition-all duration-500 h-full group">
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                <h3 className="font-serif-display text-xl font-medium text-foreground mb-3">{s.title}</h3>
                <p className="font-sans-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
