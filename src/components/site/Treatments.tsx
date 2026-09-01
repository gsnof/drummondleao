import { useState } from "react";
import {
  Activity,
  AlignCenter,
  Anchor,
  Baby,
  Layers,
  ScanLine,
  Scissors,
  Sparkles,
  Stethoscope,
  ArrowUpRight,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { treatments, waLink, waMessages, type Treatment } from "@/config/clinic";
import { Reveal } from "./Reveal";

const icons: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  "align-center": AlignCenter,
  anchor: Anchor,
  activity: Activity,
  layers: Layers,
  scissors: Scissors,
  sparkles: Sparkles,
  baby: Baby,
  "scan-line": ScanLine,
};

export function Treatments({ highlight }: { highlight?: string | null }) {
  const [selected, setSelected] = useState<Treatment | null>(null);

  return (
    <section id="tratamentos" className="section">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-sky uppercase">Tratamentos</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-navy sm:text-4xl">
            Nossos tratamentos
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Odontologia integrada em um só lugar. A indicação de cada tratamento é sempre definida
            após avaliação individual.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t, i) => {
            const Icon = icons[t.icon] ?? Stethoscope;
            const isHighlighted = Boolean(highlight && t.tags.includes(highlight));
            return (
              <Reveal key={t.id} delay={(i % 3) * 70}>
                <article
                  className={`group flex h-full flex-col rounded-3xl border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${
                    isHighlighted ? "border-sky ring-2 ring-sky/30" : "border-border"
                  }`}
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-soft text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-primary-foreground">
                    <Icon className="h-5.5 w-5.5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-xl text-navy">{t.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {t.short}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelected(t)}
                    className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-navy transition-colors hover:text-sky"
                  >
                    Saiba mais
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Dialog open={Boolean(selected)} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-lg rounded-3xl">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-navy">{selected?.name}</DialogTitle>
            <DialogDescription className="pt-2 text-left leading-relaxed">
              {selected?.details}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <a
              href={selected ? waLink(waMessages.tratamento(selected.name)) : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-soft"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Falar pelo WhatsApp
            </a>
            <a
              href="#contato"
              onClick={() => setSelected(null)}
              className="inline-flex flex-1 items-center justify-center rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-accent"
            >
              Solicitar agendamento
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
