import { Quote, Star } from "lucide-react";

const reviews = [
  {
    quote: "Good service. Her items are well maintained.",
    name: "Rose Otieno",
    role: "Local Guide · Google Review",
  },
  {
    quote:
      "The owner Kui is a great host. The place is conducive for a party of 50 to 70 guests.",
    name: "Catherine Bunyassi Kahuria",
    role: "Local Guide · Google Review",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gradient-soft py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="gold-divider mx-auto mb-5 block" />
          <h2 className="font-serif text-3xl sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 text-muted-foreground">
            Real reviews from clients who celebrated with us.
          </p>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="relative rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
            >
              <Quote className="h-8 w-8 text-secondary" />
              <div className="mt-3 flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 font-serif text-xl leading-relaxed text-foreground">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-5">
                <p className="font-medium">{r.name}</p>
                <p className="text-sm text-muted-foreground">{r.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
