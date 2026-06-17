import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { BookingForm } from "@/components/site/BookingForm";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Weddings & Events by Kui Ltd | Luxury Event Planning & Decor Rental, Nairobi",
      },
      {
        name: "description",
        content:
          "Boutique event planning and decor rental in Nairobi. Elegant weddings, corporate events and private parties for 50-70 guests. Book a consultation with Kui.",
      },
      {
        property: "og:title",
        content: "Weddings & Events by Kui Ltd | Luxury Event Planning, Nairobi",
      },
      {
        property: "og:description",
        content:
          "Bringing your dream celebrations to life. Elegant decor rental and event styling in Nairobi for parties of 50-70 guests.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EventPlanner",
          name: "Weddings & Events by Kui Ltd",
          description:
            "Boutique event planning and decor rental in Nairobi for intimate and premium celebrations of 50 to 70 guests.",
          telephone: "+254737609899",
          address: {
            "@type": "PostalAddress",
            streetAddress: "406 Ndovu Crescent",
            addressLocality: "Nairobi",
            addressCountry: "KE",
          },
          openingHours: "Mo-Sa 08:00-17:30",
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
        <About />
        <Services />
        <Testimonials />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster richColors position="top-center" />
    </div>
  );
}
