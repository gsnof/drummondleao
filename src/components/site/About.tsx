import { HeartHandshake, GraduationCap, Building2, ShieldCheck, UserRoundCheck, Sparkles } from "lucide-react";
import { clinic } from "@/config/clinic";
import { Reveal } from "./Reveal";

const differentials = [
  { icon: HeartHandshake, label: "Atendimento humanizado" },
  { icon: GraduationCap, label: "Profissionais especializados" },
  { icon: Building2, label: "Estrutura moderna" },
  { icon: ShieldCheck, label: "Tecnologia e segurança" },
  { icon: UserRoundCheck, label: "Tratamentos personalizados" },
  { icon: Sparkles, label: "Cuidado em todas as etapas" },
];

export function About() {
  return (
    <section id="clinica" className="section bg-secondary/40">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={clinic.images.recepcao}
                alt="Recepção da clínica com divisórias de vidro e balcão em mármore"
                loading="lazy"
                className="col-span-2 aspect-16/10 w-full rounded-3xl object-cover shadow-soft"
              />
              <img
                src={clinic.images.consultorio}
                alt="Consultório odontológico equipado"
                loading="lazy"
                className="aspect-square w-full rounded-3xl object-cover shadow-soft"
              />
              <img
                src={clinic.images.copa}
                alt="Espaço de convivência para pacientes"
                loading="lazy"
                className="aspect-square w-full rounded-3xl object-cover shadow-soft"
              />
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.22em] text-sky uppercase">A Clínica</p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-navy sm:text-4xl">
                Um espaço pensado para cuidar do seu sorriso
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Na {clinic.name}, cada paciente é atendido de forma individualizada, buscando unir
                conhecimento, tecnologia e cuidado para proporcionar uma experiência odontológica
                segura, confortável e humanizada.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {differentials.map((d, i) => (
                <Reveal key={d.label} delay={i * 60}>
                  <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-background p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky-soft text-navy">
                      <d.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="min-w-0 text-sm font-medium text-navy">{d.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
