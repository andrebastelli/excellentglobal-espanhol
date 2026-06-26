import heroImg from "@/assets/hero-classroom.jpg";
import schoolImg from "@/assets/school-space.jpg";
import groupImg from "@/assets/group-class.jpg";
import teacherImg from "@/assets/teacher.jpg";
import {
  MessageCircle,
  CheckCircle2,
  GraduationCap,
  Users,
  Award,
  Sparkles,
  Clock,
  Globe2,
  Building2,
  Mic,
  RotateCw,
  Star,
  MapPin,
  Phone,
  ChevronDown,
} from "lucide-react"; 
import egLogo from "@/assets/eg-logo.png";
import { useEffect, type ReactNode } from "react";

// ============================================================
// EDITE AQUI: número do WhatsApp ou defina VITE_WHATSAPP_NUMBER no .env
// ============================================================

function CTA({
  event,
  variant = "primary",
  children,
  className = "",
}: {
  event: string;
  variant?: "primary" | "secondary" | "whatsapp";
  children: ReactNode;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 active:scale-[0.98]";

  const styles = {
    primary:
      "bg-gradient-accent text-accent-foreground shadow-elegant hover:shadow-[0_25px_70px_-15px_oklch(0.65_0.2_145/0.5)] hover:-translate-y-0.5",
    secondary:
      "bg-white text-primary border border-primary/15 hover:bg-primary/5",
    whatsapp:
      "bg-whatsapp text-whatsapp-foreground hover:brightness-110 shadow-soft",
  }[variant];

  return (
    <a
      href="#agendamento"
      data-event={event}
      aria-label="Ir para o agendamento da aula gratuita"
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

function AgendamentoSection() {
  const WHATSAPP_NUMBER =
    import.meta.env.VITE_WHATSAPP_NUMBER || "5519999999999";

  const mensagem = encodeURIComponent(
    "Olá! Quero agendar minha aula experimental de espanhol. Pode me passar os horários disponíveis?"
  );

  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensagem}`;

  return (
    <section id="agendamento" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center">
        
        <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-bold tracking-wide">
          AULA EXPERIMENTAL GRATUITA
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-foreground">
          Agende sua aula pelo WhatsApp em poucos segundos
        </h2>

        <p className="mt-5 text-lg text-muted-foreground">
          Clique no botão abaixo, fale direto com nossa equipe e escolha o melhor dia e horário para sua aula experimental.
        </p>

        <div className="mt-10">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-base font-bold bg-whatsapp text-whatsapp-foreground shadow-elegant hover:brightness-110 transition active:scale-[0.98]"
          >
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp agora
          </a>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Atendimento rápido • Sem burocracia • Resposta em poucos minutos
        </p>
      </div>
    </section>
  );
}

function LandingPage() {
   useEffect(() => {
    const links = document.querySelectorAll("[data-event]");

    links.forEach((el) => {
      el.addEventListener("click", () => {
        const event = el.getAttribute("data-event");
        if (event) {
          localStorage.setItem("origem_lp", event);
        }
      });
    });
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border/60">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-5 py-3.5">
          <a href="#top" className="flex items-center">
            <span
              className="block h-11 w-[180px] bg-[#2b6dcb]"
              style={{
                WebkitMaskImage: `url(${egLogo})`,
                maskImage: `url(${egLogo})`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
              aria-label="Excellent Global"
            />
          </a>

          <a
            href="#agendamento"
            className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-5 py-2.5 text-sm font-semibold shadow-soft hover:brightness-110 transition-all duration-200 active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar Aula Gratuita
          </a>
        </div>
      </header>

      <main role="main" id="top">
       {/* HERO */}
<section className="relative overflow-hidden bg-gradient-hero text-white">

  {/* IMAGEM SUPER SUTIL */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay"
    style={{
      backgroundImage: "url('/hero-espanhol.png')",
    }}
  />

  {/* EFEITO RADIAL (mantém seu estilo original) */}
  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_60%,white,transparent_40%)]" />

  <div className="relative mx-auto max-w-7xl px-5 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
    
    {/* TEXTO */}
    <div>
      <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold tracking-wide">
        <MapPin className="h-3.5 w-3.5" /> LIMEIRA / SP — ESCOLA DE ESPANHOL
      </span>

      <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
        Curso de Espanhol em Limeira para Conversar com Confiança Desde a Primeira Aula
      </h1>

      <p className="mt-5 text-lg md:text-xl text-white/90 max-w-xl">
        Mesmo que você seja iniciante, aprenda espanhol de forma prática e comece a falar desde as primeiras aulas.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#agendamento"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-sm font-bold shadow-lg hover:bg-white/90 transition-colors"
        >
          <Sparkles className="h-5 w-5" />
          Agendar aula demonstrativa grátis
        </a>

        <a
          href="#agendamento"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white/15 backdrop-blur border border-white/25 text-white px-6 py-3 text-sm font-bold hover:bg-white/25 transition-colors"
        >
          Escolher melhor dia e horário
        </a>
      </div>
    </div>

    {/* DIREITA */}
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-accent rounded-3xl blur-2xl opacity-30" />

      <img
        src={heroImg}
        alt="Aula de espanhol"
        className="relative w-full h-auto rounded-3xl shadow-elegant object-cover aspect-[3/2]"
      />

      {/* FLAGS */}
      <div className="absolute top-4 right-4 flex gap-2 z-20">
        {[
          { src: "https://flagcdn.com/w40/es.png", alt: "Espanha" },
          { src: "https://flagcdn.com/w40/mx.png", alt: "México" },
          { src: "https://flagcdn.com/w40/ar.png", alt: "Argentina" },
        ].map((flag) => (
          <img
            key={flag.alt}
            src={flag.src}
            alt={flag.alt}
            className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-md"
          />
        ))}
      </div>

      {/* LABEL */}
      <div className="absolute top-16 right-4 bg-white/90 backdrop-blur text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow z-20">
        Curso de Espanhol • Conversação Real
      </div>
    <div className="absolute -bottom-5 -left-5 bg-white text-foreground rounded-2xl p-4 shadow-elegant flex items-center gap-3 max-w-[230px]">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-9 w-9 rounded-full bg-gradient-accent border-2 border-white" />
                  ))}
                </div>

                <div>
                  <div className="flex text-[oklch(0.78_0.17_75)]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs text-muted-foreground font-medium">+4.000 alunos atendidos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AgendamentoSection />

        {/* SEÇÃO 2 — DOR */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Você até entende espanhol, mas trava na hora de falar?
            </h2>

            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              A maioria das pessoas estuda espanhol por anos, mas não consegue conversar na prática.
              Aqui, você aprende falando — com orientação, correção e prática real desde o início.
            </p>
          </div>

          <div className="mx-auto max-w-6xl px-5 mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
                "Tenho vergonha de falar espanhol.",
                "Entendo, mas não consigo responder.",
                "Preciso do espanhol para viagens ou trabalho.",
                "Já tentei aprender e não evoluí.",
                "Quero aprender rápido e na prática.",
                "Quero perder o medo de conversar.",
              ].map((dor) => (
              <div
                key={dor}
                className="bg-card border border-border rounded-2xl p-5 shadow-soft hover:border-primary/30 hover:-translate-y-0.5 transition"
              >
                <p className="text-base font-medium">"{dor}"</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 px-5">
            <p className="text-muted-foreground mb-5">
              Se você se identificou, a aula demonstrativa gratuita é o melhor primeiro passo.
            </p>

            <CTA event="click_whatsapp_dor">
              <Sparkles className="h-5 w-5" /> Agendar aula demonstrativa grátis
            </CTA>
          </div>
        </section>

        {/* SEÇÃO 3 — DIFERENCIAIS */}
        <section className="py-20 md:py-28 bg-secondary/40">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Por que escolher</span>

              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
                Muito mais que um curso de inglês em Limeira
              </h2>
            </div>

            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  i: Mic,
                  t: "Conversação desde a primeira aula",
                  d: "Você começa a falar espanhol desde o início, mesmo sendo iniciante.",
                },
                {
                  i: RotateCw,
                  t: "Método prático e direto",
                  d: "Nada de teoria excessiva — foco total no que você realmente vai usar.",
                },
                {
                  i: Award,
                  t: "Mais de 25 anos de experiência",
                  d: "Uma escola consolidada em Limeira, com trajetória, autoridade e milhares de alunos atendidos.",
                },
                {
                  i: GraduationCap,
                  t: "Certificado",
                  d: "Ao concluir sua formação, você recebe certificado para valorizar sua jornada.",
                },
                {
                  i: Users,
                  t: "Aulas em grupo ou individuais",
                  d: "Escolha o formato que mais combina com sua rotina, objetivo e nível de aprendizado.",
                },
                {
                  i: Building2,
                  t: "Ambiente moderno e acolhedor",
                  d: "Salas confortáveis, estrutura física de qualidade e espaço preparado para aprender.",
                },
              ].map(({ i: Icon, t, d }) => (
                <div
                  key={t}
                  className="bg-card rounded-2xl p-7 shadow-soft border border-border/60 hover:border-primary/30 hover:-translate-y-1 transition"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-hero grid place-items-center text-white mb-4">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold">{t}</h3>
                  <p className="mt-2 text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 4 — METODOLOGIA */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Metodologia</span>

              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
                Um método pensado para destravar seu espanhol
              </h2>

              <p className="mt-5 text-lg text-muted-foreground">
                Aqui você não fica preso em regras gramaticais. Você aprende espanhol usando,
                praticando e repetindo em situações reais, até ganhar confiança para conversar naturalmente.
              </p>

              <ol className="mt-7 space-y-3">
                {[
                  "Você aprende novos conteúdos",
                  "Revisa de forma contínua",
                  "Pratica em conversações",
                  "Recebe orientação dos professores",
                  "Desenvolve confiança",
                  "Evolui de forma progressiva",
                ].map((s, i) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="flex-shrink-0 h-7 w-7 rounded-full bg-primary text-primary-foreground grid place-items-center text-sm font-bold">
                      {i + 1}
                    </span>

                    <span className="pt-0.5 font-medium">{s}</span>
                  </li>
                ))}
              </ol>

              <blockquote className="mt-8 p-5 border-l-4 border-accent bg-accent/5 rounded-r-xl">
                <p className="text-lg font-semibold italic">
                  "Aqui, o espanhol sai do papel e vira conversa de verdade."
                </p>
              </blockquote>

              <div className="mt-8">
                <CTA event="click_whatsapp_metodologia">
                  <Sparkles className="h-5 w-5" /> Quero experimentar essa metodologia
                </CTA>
              </div>
            </div>

            <div className="relative">
              <img
                src={teacherImg}
                alt="Professora de espanhol orientando aluna em aula de conversação"
                width={1024}
                height={768}
                loading="lazy"
                className="rounded-3xl shadow-elegant w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </section>

        {/* SEÇÃO 5 — AULA DEMONSTRATIVA */}
        <section className="py-20 md:py-28 bg-gradient-hero text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_30%,white,transparent_40%)]" />

          <div className="relative mx-auto max-w-5xl px-5 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Experimente uma aula de espanhol gratuita
            </h2>

            <p className="mt-5 text-lg text-white/85 max-w-2xl mx-auto">
              Antes de decidir, você pode testar na prática. Conheça o método, fale espanhol na aula e entenda exatamente como será sua evolução.
            </p>

            <div className="mt-12 grid md:grid-cols-3 gap-5 text-left">
              {[
                {
                  n: "1",
                  t: "Clique em agendar",
                  d: "Escolha o melhor dia e horário disponível para sua aula demonstrativa.",
                },
                {
                  n: "2",
                  t: "Confirme seus dados",
                  d: "Preencha as informações solicitadas para confirmar seu agendamento.",
                },
                {
                  n: "3",
                  t: "Conheça a metodologia na prática",
                  d: "Participe de uma experiência real e tire suas dúvidas com a equipe.",
                },
              ].map((s) => (
                <div key={s.n} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                  <div className="h-12 w-12 rounded-full bg-white text-primary grid place-items-center text-xl font-extrabold">
                    {s.n}
                  </div>

                  <h3 className="mt-4 text-lg font-bold">{s.t}</h3>
                  <p className="mt-2 text-white/80 text-sm">{s.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a
                href="#agendamento"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-primary px-7 py-4 text-base font-semibold shadow-elegant hover:bg-white/90 transition-all active:scale-[0.98]"
              >
                <Sparkles className="h-5 w-5" /> Quero agendar minha aula grátis
              </a>

              <p className="mt-3 text-sm text-white/75">
                As vagas demonstrativas são limitadas. Atendimento exclusivo para Limeira/SP.
              </p>
            </div>
          </div>
        </section>

        {/* SEÇÃO 6 — PROGRAMAS */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Programas</span>

              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
                Escolha como você quer aprender espanhol
              </h2>

              <p className="mt-4 text-muted-foreground text-lg">
                Diferentes formatos de estudo para se adaptar à rotina e ao objetivo de cada aluno.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { t: "Extensivo", h: "2 h / semana", d: "Para quem quer aprender com constância e equilíbrio." },
                { t: "Semi-intensivo", h: "4 a 6 h / semana", d: "Para acelerar a evolução sem comprometer toda a rotina." },
                { t: "Intensivo", h: "10 a 15 h / semana", d: "Para quem tem urgência em desenvolver o inglês." },
                { t: "Imersão", h: "20 a 26 h / mês", d: "Experiência mais profunda de aprendizado e prática." },
              ].map((p) => (
                <div
                  key={p.t}
                  className="rounded-2xl p-6 bg-card border border-border shadow-soft hover:border-primary hover:-translate-y-1 transition"
                >
                  <Clock className="h-7 w-7 text-primary" />

                  <h3 className="mt-4 text-xl font-extrabold">{p.t}</h3>
                  <p className="mt-1 text-accent-foreground font-bold text-sm">{p.h}</p>
                  <p className="mt-3 text-muted-foreground text-sm">{p.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <CTA event="click_whatsapp_programas">
                <Sparkles className="h-5 w-5" /> Descobrir o melhor programa para mim
              </CTA>
            </div>
          </div>
        </section>

        {/* SEÇÃO 7 — PARA QUEM É */}
        <section className="py-20 md:py-28 bg-secondary/40">
          <div className="mx-auto max-w-5xl px-5">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center max-w-3xl mx-auto">
              Esse curso de espanhol é para você que:
            </h2>

            <ul className="mt-12 grid sm:grid-cols-2 gap-4">
              {[
                "Quer aprender espanhol em Limeira.",
                "Quer viajar e se comunicar com confiança.",
                "Precisa do espanhol para trabalho.",
                "Quer aprender rápido e na prática.",
                "Já tentou antes e não evoluiu.",
                "Quer perder o medo de falar.",
                "Prefere aulas com acompanhamento.",
                "Busca um método que realmente funciona.",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SEÇÃO 8 — INTERCÂMBIO */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={groupImg}
                alt="Alunos em troca cultural durante aulas de inglês"
                width={1024}
                height={768}
                loading="lazy"
                className="rounded-3xl shadow-elegant w-full h-auto object-cover aspect-[4/3]"
              />
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Intercâmbio cultural</span>

              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
  Aprenda espanhol e conecte-se com o mundo
</h2>

<p className="mt-5 text-lg text-muted-foreground">
  Tenha contato com culturas da América Latina e Espanha, ampliando suas oportunidades
  pessoais e profissionais através do idioma.
</p>

              <div className="mt-8">
                <CTA event="click_whatsapp_intercambio">
                  <Globe2 className="h-5 w-5" /> Quero começar pelo inglês
                </CTA>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 9 — DEPOIMENTOS */}
        <section className="py-20 md:py-28 bg-secondary/40">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center">
              Depoimento sobre a evolução no espanhol e confiança para conversar.
            </h2>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                {
                  n: "Nome do aluno",
                  d: "Depoimento sobre a experiência com as aulas de inglês, evolução na conversação e atendimento da escola.",
                },
                {
                  n: "Nome do aluno",
                  d: "Depoimento sobre como a metodologia ajudou a ganhar confiança para falar inglês.",
                },
                {
                  n: "Nome do aluno",
                  d: "Depoimento sobre estrutura, professores e evolução no aprendizado.",
                },
              ].map((t, i) => (
                <figure key={i} className="bg-card rounded-2xl p-7 shadow-soft border border-border">
                  <div className="flex text-[oklch(0.78_0.17_75)] mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-foreground/90 italic">"{t.d}"</blockquote>

                  <figcaption className="mt-5 flex items-center gap-3">
                    <div className="h-11 w-11 rounded-full bg-gradient-accent" />

                    <div>
                      <p className="font-bold">{t.n}</p>
                      <p className="text-sm text-muted-foreground">Aluno(a) Excellent Global</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 10 — ESPAÇO FÍSICO */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Uma escola preparada para receber você em Limeira
              </h2>

              <p className="mt-5 text-lg text-muted-foreground">
                Salas modernas, confortáveis e bem equipadas, além de um ambiente acolhedor para aulas,
                eventos, interação entre alunos e experiências culturais.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[schoolImg, heroImg, groupImg, teacherImg, schoolImg, groupImg].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Espaço Excellent Global em Limeira — foto ${i + 1}`}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="rounded-2xl shadow-soft w-full h-auto object-cover aspect-[4/3]"
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <CTA event="click_whatsapp_espaco">
                <Building2 className="h-5 w-5" /> Quero conhecer a escola
              </CTA>
            </div>
          </div>
        </section>

        {/* SEÇÃO 11 — FAQ */}
        <section className="py-20 md:py-28 bg-secondary/40">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center">
              Perguntas frequentes
            </h2>

            <div className="mt-12 space-y-3">
              {[
                [
                  "A aula gratuita é mesmo sem custo?",
                  "Sim. A aula é 100% gratuita para você conhecer o método antes de começar.",
                ],
                [
                  "Preciso saber algo de espanhol?",
                  "Não. Você pode começar do zero.",
                ],
                [
                  "As aulas são presenciais em Limeira?",
                  "Sim. O atendimento e as aulas são presenciais em Limeira/SP.",
                ],
                [
                  "Tenho vergonha de falar inglês. Esse curso é para mim?",
                  "Sim. As aulas são conduzidas para ajudar o aluno a ganhar confiança aos poucos, com prática e acompanhamento.",
                ],
                ["A escola oferece certificado?", "Sim. A Excellent Global oferece certificado ao aluno."],
                [
                  "Posso fazer aula em grupo ou individual?",
                  "Sim. A escola oferece opções em grupo ou individuais, de acordo com disponibilidade e objetivo.",
                ],
                [
                  "Como faço para agendar a aula demonstrativa?",
                  "Basta clicar em Agendar aula demonstrativa grátis e escolher o melhor dia e horário disponível.",
                ],
              ].map(([q, a]) => (
                <details
                  key={q}
                  className="group bg-card rounded-xl border border-border shadow-soft overflow-hidden [&[open]>summary>svg]:rotate-180"
                >
                  <summary className="cursor-pointer list-none p-5 flex items-center justify-between font-semibold gap-4 hover:bg-secondary/50">
                    {q}
                    <ChevronDown className="h-5 w-5 text-primary transition-transform flex-shrink-0" />
                  </summary>

                  <div className="px-5 pb-5 text-muted-foreground">{a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 12 — CTA FINAL */}
        <section className="py-20 md:py-28 bg-gradient-hero text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_50%_50%,white,transparent_50%)]" />

          <div className="relative mx-auto max-w-3xl px-5">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Comece a falar espanhol com confiança
            </h2>

            <p className="mt-5 text-lg md:text-xl text-white/85">
              Agende sua aula gratuita e descubra como é possível aprender espanhol de verdade.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="#agendamento"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-primary px-7 py-4 text-base font-semibold shadow-elegant hover:bg-white/90 transition-all active:scale-[0.98]"
              >
                <Sparkles className="h-5 w-5" /> Quero minha aula demonstrativa grátis
              </a>

            </div>

            <p className="mt-4 text-sm text-white/75">
              Atendimento para Limeira/SP. Vagas demonstrativas limitadas.
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer role="contentinfo" className="bg-primary text-primary-foreground py-12">
        <div className="mx-auto max-w-6xl px-5 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 font-extrabold text-lg">
              <Globe2 className="h-5 w-5" /> Excellent Global
            </div>

            <p className="mt-3 text-primary-foreground/75 text-sm">
              Escola de espanhol em Limeira/SP. +25 anos formando alunos com conversação real e metodologia prática.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-3">Contato</h3>

            <ul className="space-y-2 text-sm text-primary-foreground/85">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Limeira / SP
              </li>

              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> WhatsApp para agendamento
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Ação rápida</h3>

            <a
              href="#agendamento"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-sm font-bold shadow-soft hover:bg-white/90 transition-colors"
            >
              <Sparkles className="h-4 w-4" /> Agendar aula grátis
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-5 mt-10 pt-6 border-t border-white/10 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Excellent Global — Curso de Espanhol em Limeira. Todos os direitos reservados. Desenvolvido por{" "}
<a
  href="https://bastelliconsultoria.com.br/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-current/80 transition hover:text-current hover:underline underline-offset-4"
>
  Bastelli Consultoria
</a>
        </div>
      </footer>

      {/* Botão flutuante WhatsApp mobile */}
      <a
        href="#agendamento"
        data-event="click_agendamento_float"
        aria-label="Ir para o agendamento da aula gratuita"
        className="md:hidden fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-whatsapp text-whatsapp-foreground grid place-items-center shadow-elegant active:scale-95 transition"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}

export default LandingPage;
