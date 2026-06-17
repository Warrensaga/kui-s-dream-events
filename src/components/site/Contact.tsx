import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, whatsappLink, telLink } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="gold-divider mx-auto mb-5 block" />
          <h2 className="font-serif text-3xl sm:text-4xl">Visit or Reach Us</h2>
          <p className="mt-4 text-muted-foreground">
            We'd love to help bring your celebration to life. Get in touch any day, Monday to
            Saturday.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: MapPin,
              title: "Our Location",
              lines: [SITE.address, SITE.plusCode],
              href: SITE.mapsUrl,
            },
            {
              icon: Phone,
              title: "Call Us",
              lines: [SITE.phoneDisplay],
              href: telLink,
            },
            {
              icon: Clock,
              title: "Working Hours",
              lines: ["Monday – Saturday", "Closes at 5:30 PM"],
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-card p-7 text-center shadow-[var(--shadow-card)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-serif text-lg">{c.title}</h3>
              <div className="mt-2 space-y-0.5 text-sm text-muted-foreground">
                {c.lines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </div>
              {c.href && (
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
                >
                  {c.icon === Phone ? "Tap to call" : "View on map"}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl bg-gradient-soft p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="font-serif text-2xl">Prefer to chat?</h3>
            <p className="mt-1 text-muted-foreground">
              Message us directly on WhatsApp for a quick response.
            </p>
          </div>
          <Button asChild variant="whatsapp" size="xl">
            <a
              href={whatsappLink("Hello Kui, I'd like to enquire about your event planning and decor services.")}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-5 w-5" /> Chat via WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
