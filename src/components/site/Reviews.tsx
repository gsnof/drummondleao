import { Star, Quote, ExternalLink } from "lucide-react";
import { clinic, reviews } from "@/config/clinic";
import { Reveal } from "./Reveal";

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${n} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={i < n ? "h-4 w-4 fill-sand text-sand" : "h-4 w-4 text-border"}
          aria-hidden
        />
      ))}
    </span>
  );
}

export function Reviews() {
  return (
    <section id="depoimentos" className="section bg-secondary/40">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-sky uppercase">Depoimentos</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-navy sm:text-4xl">
              O que nossos pacientes dizem
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-background px-5 py-4 shadow-soft">
              <div>
                <Stars />
                <p className="mt-1 font-display text-2xl text-navy">
                  {clinic.googleReviews.rating} no Google
                </p>
                <p className="text-sm text-muted-foreground">
                  {clinic.googleReviews.count} avaliações
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {reviews.length > 0 && (
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.name + i} delay={(i % 3) * 70}>
                <article className="flex h-full flex-col rounded-3xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <Quote className="h-6 w-6 text-sky" aria-hidden />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {r.text}
                  </p>
                  <div className="mt-5 border-t border-border pt-4">
                    <Stars n={r.stars} />
                    <p className="mt-2 text-sm font-semibold text-navy">{r.name}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        <Reveal className="mt-8">
          <a
            href={clinic.googleReviews.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-background px-6 py-3.5 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-navy/30 hover:shadow-soft"
          >
            Ver todas as avaliações
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
