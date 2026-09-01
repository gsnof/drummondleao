import { useState } from "react";
import { X } from "lucide-react";
import { gallery } from "@/config/clinic";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const active = index !== null ? gallery[index] : null;

  return (
    <section className="section">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-sky uppercase">Galeria</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-navy sm:text-4xl">
            Conheça o nosso espaço
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {gallery.map((img, i) => (
            <Reveal key={img.src} delay={(i % 4) * 60}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group block w-full overflow-hidden rounded-2xl border border-border"
                aria-label={`Ampliar imagem: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={index !== null} onOpenChange={(o) => !o && setIndex(null)}>
        <DialogContent
          showCloseButton={false}
          className="max-w-3xl overflow-hidden rounded-3xl border-0 bg-transparent p-0 shadow-none"
        >
          <DialogTitle className="sr-only">{active?.alt ?? "Imagem da clínica"}</DialogTitle>
          {active && (
            <div className="relative">
              <img src={active.src} alt={active.alt} className="w-full rounded-3xl object-contain" />
              <button
                type="button"
                onClick={() => setIndex(null)}
                aria-label="Fechar"
                className="absolute top-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-background/90 text-navy shadow-soft"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
