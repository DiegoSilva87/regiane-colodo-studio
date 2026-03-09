import FadeInSection from "./FadeInSection";
import { Quote } from "lucide-react";

const categories = [
  {
    title: "Psicoterapia Adulto",
    depoimentos: [
      {
        text: `Regiane, fico imensamente grata por ter você me auxiliando nessa loucura que é a vida! Uma loucura boa, que só conseguimos valorizar e ver o lado bom qdo estamos em paz com nós mesmas, qdo nos conhecemos mais, qdo sabemos o que queremos e aceitamos da vida! E você tem um papel lindo em ajudar a "organizar" essa loucura toda!! Parabéns pela profissional que é! Obrigada por mais um ano!! Grande beijo!`,
        author: "Gabriela",
        label: "Psicoterapia Adulto",
      },
      {
        text: "Poxa Rê, faltam até palavras pra te descrever, eu sou fã do seu trabalho ✨, te admiro demais pessoalmente e profissionalmente, fico muito grato por ter você na minha vida 💓, por estar me ajudando a manter a saúde mental em dia, me ajudando profissionalmente, e me dando conselhos pra melhorar a cada dia! Você é muito foda, e vamos juntos pra temporada de 2026 da série vida!! 😘😘",
        author: "Lucas Siqueira",
        label: "Psicoterapia Adulto",
      },
    ],
  },
  {
    title: "Psicoterapia Infantil",
    depoimentos: [
      {
        text: `Rê, a sua ajuda para com a nossa família foi e está sendo essencial. Nós tivemos dificuldade em assumir que precisavamos de ajuda, justamente por medo de nós colocarmos numa posição de fragilidade. Além disso, eu também tinha medo de confiar em outras pessoas que iriam entrar na nossa família e influencia-la. Por isso, entregar o nosso filho e a nossa família a você foi um ato de confiança que você correspondeu à altura, e hoje, se a gente tem já alguma orientação, algum caminho, alguma luz para aprender a lidar com o Lucas devemos agradecer a você. Eu sou muito grata pela sua ajuda, pelo seu profissionalismo e pelo seu cuidado com o Lucas. Ele é uma das coisas mais importantes na nossa vida e eu vejo que o seu tratamento com ele está compatível com o que a gente espera. Eu só tenho agradecer.`,
        author: "Fernanda - Mãe de Paciente",
        label: "Psicoterapia Infantil",
      },
      {
        text: `Em 2024, após chegar ao limite da sustentação de situações emocionalmente desumanas, entendi que já não era mais capaz de controlar os impactos negativos no meu corpo, colocando em risco a minha segurança, minha saúde e afetando minha família …foi então que pedi indicações e cheguei até a Regiane … Com poucas sessões, me fez entender aquilo que eu já sabia porém, não conseguia refletir em meu corpo e minha mente, de forma efetiva, fazendo resultar em saúde, em todos os aspectos… a partir dali, fui capaz de tomar decisões que esta adiando há muito tempo … mudando a minha vida por completo … pessoalmente e profissionalmente também … Logo na sequência, minha filha com 6 anos também precisou de ajuda em função de vários motivos, entre outros, a perda do avô que tanto amava … a mais uma vez, nossa "Bisicóloga" (como minha filha á chama ) ajudou significativamente a continuarmos seguindo nossas vidas com muito mais equilíbrio ! Quando é conosco, tem um peso … quando é com um filho, triplica ! Obrigada, Re Desejamos que você possa continuar ajudando pessoas a transformarem suas vidas!`,
        author: "Renata - Mãe de Paciente",
        label: "Psicoterapia Infantil",
      },
    ],
  },
  {
    title: "Consultoria de Carreira",
    depoimentos: [
      {
        text: "Tenho grande satisfação em recomendar Regiane Colodo, uma profissional cujo altíssimo grau de profissionalismo, dedicação e competência se destaca em todos os contextos em que atua. Ao longo do período em que trabalhamos juntos, Regiane demonstrou um comprometimento exemplar com cada processo de Recursos Humanos, sempre conduzindo suas atividades com rigor técnico, ética irrepreensível e uma sensibilidade humana rara. Sua capacidade de oferecer apoio integral — desde o acompanhamento individual até a gestão de processos estratégicos — faz dela uma referência na área. Regiane alia precisão técnica a uma postura acolhedora e colaborativa, criando um ambiente de confiança e desenvolvimento para todos ao seu redor. Além de sua atuação impecável em RH, Regiane é uma psicóloga ímpar. Sua escuta qualificada, visão sistêmica e habilidade em compreender necessidades complexas fazem dela uma profissional essencial em qualquer organização que valorize pessoas, cultura e evolução contínua. Recomendo Regiane Colodo sem qualquer ressalva. Sua presença engrandece equipes, fortalece processos e inspira resultados de excelência.",
        author: "Lucas",
        label: "Consultoria de Carreira",
      },
      {
        text: "Passei em dois processos seletivos. Estou super feliz de ter aparecido duas vagas, pois três semanas atrás eu não tinha nada e agora pude escolher qual eu preferia.Pois bem, consegui voltar ao mercado de trabalho, é meu primeiro degrau para conseguir voltar ao ponto em que eu estava e sem sua ajuda, isso não teria sido possível, então te agradeço Regiane,muito obrigado de verdade. Nunca vou esquecer o apoio que você me deu neste período tão tenebroso que eu passei.",
        author: "Amer",
        label: "Consultoria de Carreira",
      },
    ],
  },
];

export default function DepoimentosSection() {
  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-6 lg:px-12">
        <FadeInSection>
          <p className="font-sans-body text-sm tracking-[0.3em] uppercase text-primary/60 text-center mb-4">Depoimentos</p>
          <h2 className="font-serif-display text-3xl md:text-5xl font-light text-foreground text-center mb-16">
            O que dizem sobre meu trabalho
          </h2>
        </FadeInSection>

        {categories.map((cat, ci) => (
          <div key={cat.title} className="mb-16 last:mb-0">
            <FadeInSection>
              <h3 className="font-serif-display text-xl md:text-2xl font-light text-primary text-center mb-8">{cat.title}</h3>
            </FadeInSection>
            <div className="grid md:grid-cols-2 gap-8">
              {cat.depoimentos.map((dep, di) => (
                <FadeInSection key={di} delay={di * 0.15}>
                  <div className="bg-background p-8 lg:p-10 rounded-sm border border-border/30 h-full relative">
                    <Quote size={32} className="text-primary/15 absolute top-6 right-6" />
                    <p className="font-sans-body text-sm text-foreground/75 leading-relaxed mb-6 italic">
                      {dep.text}
                    </p>
                    <div className="border-t border-border/30 pt-4">
                      <p className="font-sans-body text-sm font-medium text-foreground">{dep.author}</p>
                      <p className="font-sans-body text-xs text-muted-foreground">{dep.label}</p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
