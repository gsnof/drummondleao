import { useState, type FormEvent } from "react";
import { z } from "zod";
import { ListChecks, UserRound, CalendarClock, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { clinic, treatments, waLink } from "@/config/clinic";
import { Reveal } from "./Reveal";

const steps = [
  { icon: ListChecks, title: "Escolha o atendimento", text: "Diga qual tratamento ou objetivo." },
  { icon: UserRound, title: "Informe seu contato", text: "Nome e telefone para retorno." },
  { icon: CalendarClock, title: "Indique dia e horário", text: "Sua preferência de atendimento." },
  { icon: MessageCircle, title: "Confirme pelo WhatsApp", text: "A equipe verifica a disponibilidade." },
];

const schema = z.object({
  nome: z.string().trim().min(3, "Informe seu nome completo").max(100),
  telefone: z
    .string()
    .trim()
    .min(10, "Informe um telefone válido com DDD")
    .max(20)
    .regex(/^[0-9()+\-\s]+$/, "Use apenas números e os símbolos ( ) + -"),
  email: z.union([z.string().trim().email("E-mail inválido").max(255), z.literal("")]),
  atendimento: z.string().trim().min(1, "Selecione o tipo de atendimento"),
  dia: z.string().trim().max(60),
  horario: z.string().trim().max(60),
  mensagem: z.string().trim().max(600),
});

const inputClass =
  "w-full rounded-2xl border border-input bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-sky focus:ring-2 focus:ring-sky/25";

export function Booking() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Confira os campos destacados para continuar.");
      return;
    }
    setErrors({});
    const v = parsed.data;

    const message = [
      `Olá! Gostaria de agendar uma consulta na ${clinic.name}.`,
      "",
      `Nome: ${v.nome}`,
      `Telefone: ${v.telefone}`,
      ...(v.email ? [`E-mail: ${v.email}`] : []),
      `Procedimento/objetivo: ${v.atendimento}`,
      `Dia de preferência: ${v.dia || "sem preferência"}`,
      `Horário de preferência: ${v.horario || "sem preferência"}`,
      ...(v.mensagem ? ["", `Observação: ${v.mensagem}`] : []),
      "",
      "Gostaria de verificar a disponibilidade.",
    ].join("\n");

    window.open(waLink(message), "_blank", "noopener,noreferrer");
    toast.success("Abrimos o WhatsApp com a sua solicitação.");
    form.reset();
  }

  return (
    <section id="contato" className="section bg-secondary/40">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-sky uppercase">Agendamento</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-navy sm:text-4xl">
            Agende sua consulta em poucos passos
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            O envio é uma solicitação de agendamento: a equipe confirma a disponibilidade com você
            pelo WhatsApp.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="h-full rounded-3xl border border-border bg-background p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky-soft text-navy">
                    <s.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="font-display text-2xl text-border">0{i + 1}</span>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-navy">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-border bg-background p-6 shadow-soft sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nome completo" error={errors.nome} htmlFor="nome" required>
                <input id="nome" name="nome" autoComplete="name" className={inputClass} placeholder="Seu nome" />
              </Field>

              <Field label="Telefone / WhatsApp" error={errors.telefone} htmlFor="telefone" required>
                <input
                  id="telefone"
                  name="telefone"
                  inputMode="tel"
                  autoComplete="tel"
                  className={inputClass}
                  placeholder="(31) 90000-0000"
                />
              </Field>

              <Field label="E-mail (opcional)" error={errors.email} htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={inputClass}
                  placeholder="voce@email.com"
                />
              </Field>

              <Field label="Tipo de atendimento" error={errors.atendimento} htmlFor="atendimento" required>
                <select id="atendimento" name="atendimento" defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option value="Avaliação">Avaliação</option>
                  {treatments.map((t) => (
                    <option key={t.id} value={t.name}>
                      {t.name}
                    </option>
                  ))}
                  <option value="Urgência / dor">Urgência / dor</option>
                  <option value="Outro">Outro</option>
                </select>
              </Field>

              <Field label="Dia de preferência" error={errors.dia} htmlFor="dia">
                <input id="dia" name="dia" className={inputClass} placeholder="Ex.: terça-feira ou 12/09" />
              </Field>

              <Field label="Horário de preferência" error={errors.horario} htmlFor="horario">
                <input id="horario" name="horario" className={inputClass} placeholder="Ex.: manhã ou 14h" />
              </Field>

              <div className="sm:col-span-2">
                <Field label="Mensagem adicional" error={errors.mensagem} htmlFor="mensagem">
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    className={inputClass}
                    placeholder="Conte brevemente o que você precisa"
                  />
                </Field>
              </div>
            </div>

            <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-soft hover:shadow-lift sm:w-auto"
              >
                <Send className="h-4 w-4" aria-hidden />
                Solicitar agendamento
              </button>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Ao enviar, abrimos o WhatsApp com a sua mensagem pronta. Nenhum dado é armazenado
                pelo site.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-navy">
        {label}
        {required && <span className="text-sky"> *</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
