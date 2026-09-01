import { Star, MapPin, ArrowRight } from "lucide-react";
import { clinic, waLink, waMessages } from "@/config/clinic";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-[34rem] w-[34rem] rounded-full bg-sky-soft blur-3xl"
      />
      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-sky uppercase">
                <span className="h-px w-8 bg-sky" aria-hidden />
                Odontologia integrada
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-[2.1rem] leading-[1.12] text-navy sm:text-5xl lg:text-[3.4rem]">
                Seu sorriso merece cuidado, confiança e excelência.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Odontologia integrada com atendimento humanizado, tecnologia e cuidado em cada
                detalhe.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink(waMessages.geral)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 text-sm font-semibold tracking-wide text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-soft hover:shadow-lift"
                >
                  Agendar consulta
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#tratamentos"
                  className="inline-flex items-center justify-center rounded-full border border-navy/15 bg-background px-7 py-4 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-navy/30 hover:bg-accent"
                >
                  Conhecer tratamentos
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-sky" aria-hidden />
                Atendimento odontológico em {clinic.city}
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-8 inline-flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-border bg-secondary/60 px-5 py-3.5">
                <span className="flex items-center gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-sand text-sand" />
                  ))}
                </span>
                <span className="text-sm font-semibold text-navy">
                  {clinic.googleReviews.rating} no Google
                </span>
                <span className="h-4 w-px bg-border" aria-hidden />
                <span className="text-sm text-muted-foreground">
                  {clinic.googleReviews.count} avaliações
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={clinic.images.equipe}
                alt={`Profissionais da ${clinic.name} na recepção da clínica`}
                width={1200}
                height={800}
                fetchPriority="high"
                className="aspect-4/3 w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-2 hidden rounded-2xl border border-border bg-background/95 px-5 py-4 shadow-soft backdrop-blur sm:block">
              <p className="font-display text-2xl text-navy">Atendimento</p>
              <p className="text-sm text-muted-foreground">humanizado e individualizado</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
