import { createFileRoute, Link } from "@tanstack/react-router";
import { clinic } from "@/config/clinic";

const TITLE = "Termos de Uso | Drummond Leão Odontologia";
const DESCRIPTION =
  "Condições de uso do site institucional da Drummond Leão Odontologia em Belo Horizonte.";

export const Route = createFileRoute("/termos-de-uso")({
  component: Termos,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${import.meta.env.BASE_URL}termos-de-uso` },
    ],
    links: [{ rel: "canonical", href: `${import.meta.env.BASE_URL}termos-de-uso` }],
  }),
});

function Termos() {
  return (
    <main className="container-x py-20">
      <Link to="/" className="text-sm font-semibold text-sky hover:text-navy">
        ← Voltar ao site
      </Link>
      <h1 className="mt-6 font-display text-4xl text-navy">Termos de Uso</h1>
      <div className="mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          O conteúdo deste site tem caráter informativo e institucional e não substitui uma consulta
          ou avaliação odontológica presencial.
        </p>
        <p>
          O envio do formulário representa uma <strong>solicitação de agendamento</strong>. A data e
          o horário só são considerados confirmados após retorno da equipe da {clinic.name}.
        </p>
        <p>
          Indicações de tratamento, prazos e resultados dependem de avaliação individual realizada
          por profissional habilitado.
        </p>
        <p>
          Textos, imagens e marca apresentados neste site pertencem à {clinic.name} e não podem ser
          reproduzidos sem autorização.
        </p>
      </div>
    </main>
  );
}
