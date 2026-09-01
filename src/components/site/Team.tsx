import { clinic, team } from "@/config/clinic";
import { Reveal } from "./Reveal";

export function Team() {
  return (
    <section id="equipe" className="section">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-sky uppercase">Nossa equipe</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-navy sm:text-4xl">
            Profissionais dedicados ao seu cuidado
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Uma equipe que acompanha cada paciente de perto, do primeiro contato ao acompanhamento
            após o tratamento.
          </p>
        </Reveal>

        {team.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 70}>
                <article className="group h-full overflow-hidden rounded-3xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  {m.photo && (
                    <img
                      src={m.photo}
                      alt={m.name}
                      loading="lazy"
                      className="aspect-4/5 w-full object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="font-display text-xl text-navy">{m.name}</h3>
                    {m.role && <p className="mt-1 text-sm text-sky">{m.role}</p>}
                    {m.cro && <p className="mt-2 text-xs text-muted-foreground">{m.cro}</p>}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-10">
            <div className="grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-secondary/40 md:grid-cols-2">
              <img
                src={clinic.images.equipe}
                alt={`Equipe da ${clinic.name}`}
                loading="lazy"
                className="aspect-4/3 h-full w-full object-cover"
              />
              <div className="p-7 md:p-10">
                <h3 className="font-display text-2xl text-navy">
                  Cuidado que começa no acolhimento
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  A {clinic.name} reúne profissionais que atuam de forma integrada para oferecer um
                  atendimento seguro, confortável e humanizado em todas as etapas do tratamento.
                </p>
                <a
                  href="#contato"
                  className="mt-6 inline-flex rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-soft"
                >
                  Marcar uma avaliação
                </a>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
