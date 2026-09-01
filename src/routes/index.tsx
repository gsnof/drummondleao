import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Treatments } from "@/components/site/Treatments";
import { NeedFinder } from "@/components/site/NeedFinder";
import { Team } from "@/components/site/Team";
import { Booking } from "@/components/site/Booking";
import { Reviews } from "@/components/site/Reviews";
import { Gallery } from "@/components/site/Gallery";
import { Location } from "@/components/site/Location";
import { InstagramSection } from "@/components/site/InstagramSection";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { clinic, mapsUrl } from "@/config/clinic";

const TITLE = "Drummond Leão Odontologia | Clínica Odontológica em Belo Horizonte";
const DESCRIPTION =
  "Drummond Leão Odontologia em Belo Horizonte. Atendimento odontológico personalizado, profissionais especializados e diversos tratamentos para cuidar do seu sorriso.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: import.meta.env.BASE_URL },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: import.meta.env.BASE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: clinic.name,
          telephone: "+55 31 2520-7030",
          url: import.meta.env.BASE_URL,
          image: clinic.images.recepcao,
          sameAs: [clinic.instagram.url],
          hasMap: mapsUrl,
          address: {
            "@type": "PostalAddress",
            streetAddress: `${clinic.address.line1}, ${clinic.address.line2}`,
            addressLocality: "Belo Horizonte",
            addressRegion: "MG",
            postalCode: "30190-000",
            addressCountry: "BR",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Saturday"],
              opens: "09:00",
              closes: "12:00",
            },
          ],
        }),
      },
    ],
  }),
});

function Index() {
  const [need, setNeed] = useState<string | null>(null);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Treatments highlight={need} />
        <NeedFinder selected={need} onSelect={setNeed} />
        <Team />
        <Booking />
        <Reviews />
        <Gallery />
        <Location />
        <InstagramSection />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
      <Toaster position="top-center" richColors />
    </>
  );
}
