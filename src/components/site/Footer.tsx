import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { clinic, mapsUrl, waLink, waMessages } from "@/config/clinic";

const quickLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Equipe", href: "#equipe" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={clinic.logo}
                alt={`Logo ${clinic.name}`}
                loading="lazy"
                className="h-12 w-12 rounded-full object-cover ring-1 ring-border"
              />
              <span className="font-display text-lg leading-tight text-navy">
                Drummond Leão
                <span className="block text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase">
                  Odontologia
                </span>
              </span>
            </div>
            <address className="mt-5 text-sm leading-relaxed text-muted-foreground not-italic">
              {clinic.address.line1}
              <br />
              {clinic.address.line2}
              <br />
              {clinic.address.line3} — {clinic.address.zip}
            </address>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={waLink(waMessages.geral)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-navy transition-colors hover:bg-accent"
              >
                <MessageCircle className="h-3.5 w-3.5" aria-hidden /> WhatsApp
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-navy transition-colors hover:bg-accent"
              >
                <MapPin className="h-3.5 w-3.5" aria-hidden /> Google Maps
              </a>
              <a
                href={clinic.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-navy transition-colors hover:bg-accent"
              >
                <Instagram className="h-3.5 w-3.5" aria-hidden /> {clinic.instagram.handle}
              </a>
            </div>
          </div>

          <nav aria-label="Links do rodapé">
            <h2 className="text-xs font-semibold tracking-[0.22em] text-sky uppercase">Navegação</h2>
            <ul className="mt-5 grid grid-cols-2 gap-y-3 text-sm md:grid-cols-1">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-muted-foreground transition-colors hover:text-navy">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.22em] text-sky uppercase">Contato</h2>
            <a
              href={clinic.phoneHref}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy"
            >
              <Phone className="h-4 w-4 text-sky" aria-hidden /> {clinic.phone}
            </a>
            <dl className="mt-5 space-y-2 text-sm">
              {clinic.hours.map((h) => (
                <div key={h.label} className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">{h.label}</dt>
                  <dd className="text-navy">{h.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {clinic.name}. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <Link to="/politica-de-privacidade" className="transition-colors hover:text-navy">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="transition-colors hover:text-navy">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
