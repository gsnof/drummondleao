import { Instagram } from "lucide-react";
import { clinic, gallery } from "@/config/clinic";
import { Reveal } from "./Reveal";

export function InstagramSection() {
  return (
    <section className="section bg-secondary/40">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] text-sky uppercase">Instagram</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-navy sm:text-4xl">
              Siga a {clinic.name}
            </h2>
            <p className="mt-4 text-muted-foreground">
              Acompanhe os bastidores da clínica, dicas de saúde bucal e novidades.
            </p>
            <p className="mt-2 font-display text-2xl text-navy">{clinic.instagram.handle}</p>
            <a
              href={clinic.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-soft"
            >
              <Instagram className="h-4 w-4" aria-hidden />
              Ver Instagram
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {gallery.map((img) => (
                <a
                  key={img.src}
                  href={clinic.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-border"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 grid place-items-center bg-navy/0 text-primary-foreground opacity-0 transition-all duration-300 group-hover:bg-navy/45 group-hover:opacity-100">
                    <Instagram className="h-6 w-6" aria-hidden />
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
