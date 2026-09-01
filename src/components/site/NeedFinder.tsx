import { treatments, needs, waLink, waMessages } from "@/config/clinic";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Props = {
  selected: string | null;
  onSelect: (id: string | null) => void;
};

export function NeedFinder({ selected, onSelect }: Props) {
  const related = selected ? treatments.filter((t) => t.tags.includes(selected)) : [];
  const isUrgency = selected === "urgencia";

  return (
    <section className="section bg-gradient-navy text-primary-foreground">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-sky uppercase">
            Encontre o tratamento ideal
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
            Como podemos ajudar você?
          </h2>
          <p className="mt-4 leading-relaxed text-primary-foreground/70">
            Escolha a opção que mais combina com o seu momento e veja os caminhos possíveis.
          </p>
        </Reveal>

        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {needs.map((n, i) => (
            <Reveal key={n.id} delay={(i % 3) * 60}>
              <button
                type="button"
                aria-pressed={selected === n.id}
                onClick={() => onSelect(selected === n.id ? null : n.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-2xl border px-5 py-4 text-left transition-all duration-300",
                  selected === n.id
                    ? "border-sky bg-primary-foreground/12"
                    : "border-primary-foreground/15 hover:-translate-y-0.5 hover:border-primary-foreground/40 hover:bg-primary-foreground/8",
                )}
              >
                <span className="text-xl" aria-hidden>
                  {n.emoji}
                </span>
                <span className="min-w-0 text-sm font-medium">{n.label}</span>
              </button>
            </Reveal>
          ))}
        </div>

        {selected && (
          <div className="mt-8 rounded-3xl border border-primary-foreground/15 bg-primary-foreground/8 p-6 sm:p-8">
            {isUrgency ? (
              <>
                <h3 className="font-display text-2xl">Vamos cuidar disso agora</h3>
                <p className="mt-2 text-sm text-primary-foreground/75">
                  Fale com a nossa equipe pelo WhatsApp para verificarmos a disponibilidade de
                  atendimento o quanto antes.
                </p>
              </>
            ) : (
              <>
                <h3 className="font-display text-2xl">Tratamentos relacionados</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {related.map((t) => (
                    <a
                      key={t.id}
                      href="#tratamentos"
                      className="rounded-full border border-primary-foreground/25 px-4 py-2 text-sm transition-colors hover:bg-primary-foreground/15"
                    >
                      {t.name}
                    </a>
                  ))}
                </div>
              </>
            )}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink(isUrgency ? waMessages.urgencia : waMessages.geral)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-navy transition-transform duration-300 hover:-translate-y-0.5"
              >
                Falar pelo WhatsApp
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
              >
                Solicitar agendamento
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
