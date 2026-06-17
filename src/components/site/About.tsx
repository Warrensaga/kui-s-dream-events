import { Heart, Star, HandHeart } from "lucide-react";
import ownerImage from "@/assets/owner-kui.jpg";

const highlights = [
  { icon: Star, title: "Highly Praised", text: "Consistently rated by clients as a warm, attentive and exceptional host." },
  { icon: HandHeart, title: "Personalized Service", text: "Every celebration is tailored to your vision, budget and guest experience." },
  { icon: Heart, title: "Genuine Warmth", text: "A welcoming touch that makes you and your guests feel completely at home." },
];

export function About() {
  return (
    <section id="about" className="bg-gradient-soft py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
            <img
              src={ownerImage}
              alt="Kui, founder and host of Weddings & Events by Kui Ltd"
              width={800}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden rounded-xl bg-card px-6 py-4 shadow-[var(--shadow-card)] sm:block">
            <p className="font-serif text-3xl text-primary">Kui</p>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Founder &amp; Host
            </p>
          </div>
        </div>

        <div>
          <span className="gold-divider mb-5 block" />
          <h2 className="font-serif text-3xl sm:text-4xl">Meet Kui</h2>
          <p className="mt-5 text-muted-foreground">
            At the heart of every celebration is Kui — the founder and host whose warmth and
            attention to detail keep clients coming back. Praised again and again as a{" "}
            <span className="font-medium text-foreground">great host</span>, she offers
            exceptional, personalized service from first consultation to the final toast.
          </p>
          <p className="mt-4 text-muted-foreground">
            Whether you are planning an intimate wedding, a polished corporate gathering or a
            joyful private party, Kui curates a space that feels effortless, elegant and
            entirely yours — perfectly suited for parties of 50 to 70 guests.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.title}>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
                  <h.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 font-serif text-lg">{h.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
