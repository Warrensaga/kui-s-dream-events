import { ShieldCheck, Sparkles, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import weddingImg from "@/assets/wedding-decor.jpg";
import corporateImg from "@/assets/corporate-events.jpg";
import partyImg from "@/assets/private-parties.jpg";

const categories = [
  {
    img: weddingImg,
    title: "Wedding Decor",
    text: "Romantic florals, draping, centerpieces and place settings styled to bring your dream day to life.",
  },
  {
    img: corporateImg,
    title: "Corporate Events",
    text: "Polished, professional setups — galas, launches and dinners that impress every guest.",
  },
  {
    img: partyImg,
    title: "Private Parties",
    text: "Birthdays, showers and intimate celebrations with festive, elegant touches for 50–70 guests.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="gold-divider mx-auto mb-5 block" />
          <h2 className="font-serif text-3xl sm:text-4xl">Services &amp; Inventory Showroom</h2>
          <p className="mt-4 text-muted-foreground">
            Browse our curated decor and rental collections across three signature event
            categories. Every piece is selected to make your celebration feel refined and
            unforgettable.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {categories.map((c) => (
            <article
              key={c.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.img}
                  alt={`${c.title} styling by Weddings & Events by Kui`}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
                <Button asChild variant="gold" size="sm" className="mt-5">
                  <a href="#booking">Enquire</a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Pristine condition highlight */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-[image:var(--gradient-gold)] p-8 text-primary-foreground sm:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs uppercase tracking-[0.2em]">
                <ShieldCheck className="h-4 w-4" /> Trusted by clients
              </span>
              <h3 className="mt-4 font-serif text-2xl sm:text-3xl">
                Pristine, Meticulously Maintained Inventory
              </h3>
              <p className="mt-3 max-w-xl text-primary-foreground/90">
                Based on our top client reviews — all rental items and decor are meticulously
                maintained, pristine, and kept in excellent condition, so your event always
                looks flawless.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Gem, label: "Premium quality pieces" },
                { icon: Sparkles, label: "Spotless & well-kept" },
                { icon: ShieldCheck, label: "Inspected every event" },
                { icon: Gem, label: "Curated by Kui" },
              ].map((f, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-primary-foreground/10 p-4 backdrop-blur-sm"
                >
                  <f.icon className="h-5 w-5" />
                  <p className="mt-2 text-sm font-medium">{f.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
