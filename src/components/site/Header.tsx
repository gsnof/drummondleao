import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { clinic, navLinks, waLink, waMessages } from "@/config/clinic";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/90 shadow-soft backdrop-blur-md" : "bg-background/70 backdrop-blur-sm",
      )}
    >
      <div className="container-x">
        <div className="grid h-18 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 lg:flex lg:justify-between">
          <a href="#inicio" className="flex min-w-0 items-center gap-3" aria-label={clinic.name}>
            <img
              src={clinic.logo}
              alt={`Logo ${clinic.name}`}
              width={44}
              height={44}
              className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-border"
            />
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-display text-base text-navy sm:text-lg">
                Drummond Leão
              </span>
              <span className="block text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase">
                Odontologia
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm font-medium text-foreground/75 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-sky after:transition-transform after:duration-300 hover:text-navy hover:after:origin-left hover:after:scale-x-100"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={clinic.phoneHref}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {clinic.phone}
            </a>
            <a
              href={waLink(waMessages.header)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-navy px-5 py-2.5 text-xs font-semibold tracking-[0.12em] text-primary-foreground uppercase shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-soft hover:shadow-lift"
            >
              Agendar consulta
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border text-navy transition-colors hover:bg-accent lg:hidden"
          >
            {open ? <Menu className="h-5 w-5 opacity-0" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background transition-opacity duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="container-x flex h-18 items-center justify-between py-3">
          <span className="font-display text-lg text-navy">Menu</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-border text-navy"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="container-x flex flex-col gap-1 pt-2" aria-label="Navegação mobile">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${i * 30}ms` }}
              className="border-b border-border/70 py-4 font-display text-xl text-navy"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink(waMessages.header)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-6 rounded-full bg-navy px-6 py-4 text-center text-sm font-semibold tracking-[0.12em] text-primary-foreground uppercase"
          >
            Agendar consulta
          </a>
          <a
            href={clinic.phoneHref}
            className="mt-3 flex items-center justify-center gap-2 rounded-full border border-border px-6 py-4 text-sm font-semibold text-navy"
          >
            <Phone className="h-4 w-4" aria-hidden /> {clinic.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
