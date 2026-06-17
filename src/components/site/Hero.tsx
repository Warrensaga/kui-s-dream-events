import { Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.jpg";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Elegant blush and gold wedding reception decor by Weddings & Events by Kui"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 py-32 text-center text-primary-foreground">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5" /> Boutique Event Planning &amp; Decor Rental
        </p>

        <h1 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
          {SITE.tagline}
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base text-primary-foreground/90 sm:text-lg">
          Romantic, meticulously styled celebrations in Nairobi — perfect for hosting
          intimate and premium parties of{" "}
          <span className="font-semibold">50 to 70 guests</span>.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="hero" size="xl">
            <a href="#booking">Book a Consultation</a>
          </Button>
          <Button asChild variant="heroOutline" size="xl">
            <a href="#services">Browse Our Inventory</a>
          </Button>
        </div>

        <div className="mt-10 inline-flex items-center gap-2 text-sm text-primary-foreground/85">
          <Users className="h-4 w-4" />
          Designed for intimate gatherings of 50–70 guests
        </div>
      </div>
    </section>
  );
}
