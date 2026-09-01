/**
 * ============================================================
 *  DRUMMOND LEÃO ODONTOLOGIA — Arquivo central de conteúdo
 * ------------------------------------------------------------
 *  Tudo que a clínica pode querer alterar (textos, telefone,
 *  horários, tratamentos, equipe, depoimentos, fotos) está aqui.
 *  Basta editar este arquivo — nenhum componente precisa mudar.
 * ============================================================
 */

import logo from "@/assets/logo.svg";
import fotoRecepcao from "@/assets/clinica-recepcao.png";
import fotoEquipe from "@/assets/equipe.png";
import fotoConsultorio from "@/assets/consultorio.png";
import fotoCopa from "@/assets/copa.png";

export const clinic = {
  name: "Drummond Leão Odontologia",
  shortName: "Drummond Leão",
  city: "Belo Horizonte",
  logo,

  /** Telefone fixo exibido no site */
  phone: "(31) 2520-7030",
  phoneHref: "tel:+553125207030",

  /** Número usado nos links de WhatsApp (somente dígitos, com DDI 55) */
  whatsapp: "553125207030",

  instagram: {
    handle: "@delodontologia",
    url: "https://www.instagram.com/delodontologia/",
  },

  address: {
    line1: "Av. Augusto de Lima, 479",
    line2: "Sala 1907 — Centro",
    line3: "Belo Horizonte — MG",
    zip: "CEP 30190-000",
  },

  googleReviews: {
    rating: "4,8",
    count: "320+",
    /** Link para o perfil da clínica no Google */
    url: "https://www.google.com/maps/search/?api=1&query=Drummond+Le%C3%A3o+Odontologia+Av.+Augusto+de+Lima+479+Belo+Horizonte",
  },

  hours: [
    { label: "Segunda a sexta", value: "08:00 às 18:00" },
    { label: "Sábado", value: "09:00 às 12:00" },
    { label: "Domingo", value: "Fechado", closed: true },
  ],

  images: {
    recepcao: fotoRecepcao,
    equipe: fotoEquipe,
    consultorio: fotoConsultorio,
    copa: fotoCopa,
  },
} as const;

export const mapsQuery = encodeURIComponent(
  `${clinic.address.line1}, ${clinic.address.line2}, ${clinic.address.line3}, ${clinic.address.zip}`,
);
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
export const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

/** Monta um link de WhatsApp com mensagem pré-preenchida */
export function waLink(message: string) {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  geral: `Olá! Vim pelo site da ${clinic.name} e gostaria de agendar uma avaliação.`,
  header: `Olá! Vim pelo site da ${clinic.name} e gostaria de agendar uma consulta.`,
  tratamento: (nome: string) =>
    `Olá! Vim pelo site da ${clinic.name} e gostaria de saber mais sobre ${nome}.`,
  urgencia: `Olá! Vim pelo site da ${clinic.name}. Estou com dor / tenho uma urgência e gostaria de atendimento.`,
};

/* ------------------------------------------------------------------ */
/* Tratamentos                                                         */
/* ------------------------------------------------------------------ */

export type Treatment = {
  id: string;
  name: string;
  icon: string;
  short: string;
  details: string;
  tags: string[];
};

export const treatments: Treatment[] = [
  {
    id: "clinica-geral",
    name: "Clínica Geral",
    icon: "stethoscope",
    short: "Avaliação, prevenção e cuidados essenciais para a saúde da sua boca.",
    details:
      "A clínica geral é a porta de entrada do cuidado odontológico. Inclui avaliação completa, orientação e o acompanhamento contínuo da sua saúde bucal, com encaminhamento para as especialidades quando necessário.",
    tags: ["saude", "avaliacao"],
  },
  {
    id: "ortodontia",
    name: "Ortodontia",
    icon: "align-center",
    short: "Correção do posicionamento dos dentes e da mordida.",
    details:
      "A ortodontia cuida do alinhamento dos dentes e do encaixe da mordida. O plano é definido após avaliação individual, considerando o seu caso e os seus objetivos.",
    tags: ["corrigir", "estetica"],
  },
  {
    id: "implantodontia",
    name: "Implantodontia",
    icon: "anchor",
    short: "Reabilitação de dentes ausentes com planejamento individualizado.",
    details:
      "A implantodontia trabalha a reposição de dentes ausentes, devolvendo função e estética. Todo tratamento começa por uma avaliação clínica e radiográfica detalhada.",
    tags: ["saude", "estetica"],
  },
  {
    id: "endodontia",
    name: "Endodontia",
    icon: "activity",
    short: "Tratamento de canal com foco em conforto e preservação do dente.",
    details:
      "A endodontia trata o interior do dente quando há comprometimento da polpa, buscando preservar o dente natural e aliviar a dor.",
    tags: ["saude", "urgencia"],
  },
  {
    id: "protese",
    name: "Prótese",
    icon: "layers",
    short: "Reabilitação da função mastigatória e da estética do sorriso.",
    details:
      "As próteses devolvem forma, função e estética ao sorriso. O tipo mais indicado é definido em conjunto com o paciente após avaliação.",
    tags: ["estetica", "saude"],
  },
  {
    id: "cirurgia",
    name: "Cirurgia",
    icon: "scissors",
    short: "Procedimentos cirúrgicos odontológicos com protocolo de segurança.",
    details:
      "Procedimentos cirúrgicos realizados com planejamento prévio, ambiente controlado e acompanhamento em todas as etapas do pós-operatório.",
    tags: ["saude"],
  },
  {
    id: "botox",
    name: "Botox",
    icon: "sparkles",
    short: "Aplicação em harmonização, dentro do escopo odontológico.",
    details:
      "A aplicação é realizada dentro do escopo da odontologia, sempre após avaliação individual e conversa sobre expectativas e indicações.",
    tags: ["estetica"],
  },
  {
    id: "odontopediatria",
    name: "Odontopediatria",
    icon: "baby",
    short: "Atendimento odontológico para crianças, com acolhimento.",
    details:
      "Atendimento voltado ao público infantil, com foco em acolhimento, prevenção e na construção de uma relação positiva da criança com o dentista.",
    tags: ["infantil", "saude"],
  },
  {
    id: "radiologia",
    name: "Radiologia Odontológica",
    icon: "scan-line",
    short: "Exames de imagem para diagnóstico e planejamento.",
    details:
      "Exames de imagem que apoiam o diagnóstico preciso e o planejamento dos tratamentos, com protocolos de segurança.",
    tags: ["avaliacao", "saude"],
  },
];

/* ------------------------------------------------------------------ */
/* "Como podemos ajudar você?"                                          */
/* ------------------------------------------------------------------ */

export const needs = [
  { id: "saude", emoji: "🦷", label: "Quero cuidar da minha saúde bucal" },
  { id: "estetica", emoji: "✨", label: "Quero melhorar meu sorriso" },
  { id: "corrigir", emoji: "😁", label: "Quero corrigir meus dentes" },
  { id: "avaliacao", emoji: "🧑‍⚕️", label: "Preciso de uma avaliação" },
  { id: "urgencia", emoji: "🚨", label: "Estou com dor ou tenho uma urgência" },
  { id: "infantil", emoji: "👶", label: "Atendimento para meu filho" },
];

/* ------------------------------------------------------------------ */
/* Equipe                                                              */
/* ------------------------------------------------------------------ */
/* Preencha com os dados oficiais fornecidos pela clínica.
   Enquanto a lista estiver vazia, a seção mostra a foto da equipe
   e o texto institucional — nenhum dado é inventado.
   Exemplo:
   { name: "Dra. Nome Sobrenome", role: "Ortodontia", cro: "CRO-MG 00000", photo: "/caminho.jpg" }
*/
export type TeamMember = {
  name: string;
  role?: string;
  cro?: string;
  photo?: string;
};

export const team: TeamMember[] = [];

/* ------------------------------------------------------------------ */
/* Depoimentos                                                         */
/* ------------------------------------------------------------------ */
/* Insira aqui apenas avaliações reais fornecidas pela clínica.
   Exemplo: { name: "Maria S.", stars: 5, text: "..." }
*/
export type Review = { name: string; stars: number; text: string };

export const reviews: Review[] = [];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const faq = [
  {
    q: "Como faço para agendar uma consulta?",
    a: `Você pode solicitar o agendamento pelo formulário do site, pelo botão de WhatsApp ou ligando para ${clinic.phone}. A equipe confirma a disponibilidade e retorna com a confirmação.`,
  },
  {
    q: "Onde a clínica está localizada?",
    a: `${clinic.address.line1}, ${clinic.address.line2}, ${clinic.address.line3} — ${clinic.address.zip}.`,
  },
  {
    q: "Quais tratamentos são oferecidos?",
    a: "Clínica Geral, Ortodontia, Implantodontia, Endodontia, Prótese, Cirurgia, Botox, Odontopediatria e Radiologia Odontológica, entre outros. A indicação é sempre definida após avaliação.",
  },
  {
    q: "Como funciona a avaliação?",
    a: "Na avaliação o profissional conhece o seu caso, entende os seus objetivos e apresenta as possibilidades de tratamento. Para agendar, fale com a equipe pelo WhatsApp.",
  },
  {
    q: "A clínica atende crianças?",
    a: "Sim. A clínica oferece odontopediatria, com atendimento voltado ao público infantil.",
  },
  {
    q: "Como entrar em contato?",
    a: `Pelo WhatsApp, pelo telefone ${clinic.phone} ou pelo Instagram ${clinic.instagram.handle}.`,
  },
  {
    q: "Quais são os horários de atendimento?",
    a: "Segunda a sexta, das 08:00 às 18:00. Sábado, das 09:00 às 12:00. Domingo fechado.",
  },
];

/* ------------------------------------------------------------------ */
/* Galeria                                                             */
/* ------------------------------------------------------------------ */

export const gallery = [
  { src: clinic.images.recepcao, alt: "Recepção da clínica com divisórias de vidro e balcão em mármore" },
  { src: clinic.images.equipe, alt: "Profissionais da Drummond Leão Odontologia na recepção" },
  { src: clinic.images.consultorio, alt: "Consultório odontológico equipado e iluminado" },
  { src: clinic.images.copa, alt: "Espaço de convivência para pacientes da clínica" },
];

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "A Clínica", href: "#clinica" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Nossa Equipe", href: "#equipe" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];
