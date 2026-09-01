import { MapPin, Phone, Navigation, Clock } from "lucide-react";
import { clinic, mapsUrl, mapsEmbedUrl } from "@/config/clinic";
import { Reveal } from "./Reveal";

export function Location() {
  return (
    <section id="localizacao" className="section">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.22em] text-sky uppercase">
                Localização
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-navy sm:text-4xl">
                Estamos esperando por você
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-7 flex gap-4 rounded-3xl border border-border bg-background p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky-soft text-navy">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <address className="min-w-0 text-sm leading-relaxed text-muted-foreground not-italic">
                  <span className="block font-semibold text-navy">{clinic.address.line1}</span>
                  {clinic.address.line2}
                  <br />
                  {clinic.address.line3}
                  <br />
                  {clinic.address.zip}
                </address>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-soft"
                >
                  <Navigation className="h-4 w-4" aria-hidden />
                  Como chegar
                </a>
                <a
                  href={clinic.phoneHref}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-navy/15 px-6 py-3.5 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  Ligar agora
                </a>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-4 rounded-3xl border border-border bg-secondary/50 p-6">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-sky" aria-hidden />
                  <h3 className="font-display text-xl text-navy">Horário de atendimento</h3>
                </div>
                <dl className="mt-4 divide-y divide-border text-sm">
                  {clinic.hours.map((h) => (
                    <div key={h.label} className="flex items-center justify-between gap-4 py-2.5">
                      <dt className="text-muted-foreground">{h.label}</dt>
                      <dd
                        className={
                          "closed" in h && h.closed
                            ? "font-medium text-muted-foreground"
                            : "font-semibold text-navy"
                        }
                      >
                        {h.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title={`Mapa da localização da ${clinic.name}`}
                src={mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[380px] w-full lg:h-[560px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
