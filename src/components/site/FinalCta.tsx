import { MessageCircle } from "lucide-react";
import { waLink, waMessages } from "@/config/clinic";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="section bg-gradient-navy text-primary-foreground">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl leading-tight sm:text-[2.6rem]">
            Pronto para cuidar do seu sorriso?
          </h2>
          <p className="mt-4 text-primary-foreground/75">
            Agende sua avaliação e dê o primeiro passo para cuidar da sua saúde bucal.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex w-full items-center justify-center rounded-full bg-background px-8 py-4.5 text-sm font-semibold tracking-[0.1em] text-navy uppercase shadow-lift transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
            >
              Agendar minha consulta
            </a>
            <a
              href={waLink(waMessages.geral)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-8 py-4.5 text-sm font-semibold tracking-[0.1em] uppercase transition-colors duration-300 hover:bg-primary-foreground/10 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Falar pelo WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
