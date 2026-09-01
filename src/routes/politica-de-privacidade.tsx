import { createFileRoute, Link } from "@tanstack/react-router";
import { clinic } from "@/config/clinic";

const TITLE = "Política de Privacidade | Drummond Leão Odontologia";
const DESCRIPTION =
  "Saiba como a Drummond Leão Odontologia trata os dados informados no site e no contato por WhatsApp.";

export const Route = createFileRoute("/politica-de-privacidade")({
  component: Privacidade,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${import.meta.env.BASE_URL}politica-de-privacidade` },
    ],
    links: [{ rel: "canonical", href: `${import.meta.env.BASE_URL}politica-de-privacidade` }],
  }),
});

function Privacidade() {
  return (
    <main className="container-x py-20">
      <Link to="/" className="text-sm font-semibold text-sky hover:text-navy">
        ← Voltar ao site
      </Link>
      <h1 className="mt-6 font-display text-4xl text-navy">Política de Privacidade</h1>
      <div className="mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          Este site é institucional e tem como objetivo apresentar a {clinic.name} e facilitar o
          contato com a clínica.
        </p>
        <p>
          Os dados informados no formulário de agendamento (nome, telefone, e-mail opcional e
          preferências de atendimento) são utilizados apenas para montar a mensagem enviada por você
          à clínica pelo WhatsApp. O site não armazena esses dados em servidores nem no navegador.
        </p>
        <p>
          Ao entrar em contato pelo WhatsApp, a conversa passa a ser tratada pela clínica, que
          utiliza as informações exclusivamente para atendimento e agendamento.
        </p>
        <p>
          Para dúvidas sobre o tratamento dos seus dados, entre em contato pelo telefone{" "}
          {clinic.phone}.
        </p>
      </div>
    </main>
  );
}
