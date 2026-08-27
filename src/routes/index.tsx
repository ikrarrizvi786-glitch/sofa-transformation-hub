import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/About";
import { ContactCTA } from "@/components/ContactCTA";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ServiceArea } from "@/components/ServiceArea";
import { Services } from "@/components/Services";
import { WhyChoose } from "@/components/WhyChoose";

const TITLE = "Jeevan Foam | Sofa Repair & Upholstery in Noida & Greater Noida";
const DESCRIPTION =
  "Jeevan Foam provides sofa repair, upholstery, foam replacement, sofa renovation, cushioning, recliner repair and custom sofa work in Noida and Greater Noida.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Jeevan Foam",
          description: DESCRIPTION,
          telephone: "+919368779652",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rampur Beta 1, RS Plaza, Shop No. 7",
            addressCountry: "IN",
          },
          areaServed: [
            { "@type": "Place", name: "Noida" },
            { "@type": "Place", name: "Greater Noida" },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <Gallery />
        <About />
        <ServiceArea />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
