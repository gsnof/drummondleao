import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/config/clinic";
import { Reveal } from "./Reveal";

export function Faq() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] text-sky uppercase">Dúvidas</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-navy sm:text-4xl">
              Perguntas frequentes
            </h2>
            <p className="mt-4 text-muted-foreground">
              Não encontrou o que procurava? Fale com a nossa equipe pelo WhatsApp.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, i) => (
                <AccordionItem key={item.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-display text-lg text-navy hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
