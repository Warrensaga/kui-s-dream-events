import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 shadow-[var(--shadow-card)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a href="#home" className="flex min-w-0 flex-col leading-tight">
          <span
            className={`font-serif text-lg font-semibold tracking-tight sm:text-xl ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            Weddings &amp; Events
          </span>
          <span
            className={`text-[0.6rem] uppercase tracking-[0.35em] ${
              scrolled ? "text-primary" : "text-primary-foreground/80"
            }`}
          >
            by Kui Ltd
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild variant={scrolled ? "hero" : "heroOutline"} size="default">
            <a href="#booking">Book a Consultation</a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm font-medium text-foreground hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="flex flex-col gap-2 pt-3">
              <Button asChild variant="hero">
                <a href="#booking" onClick={() => setOpen(false)}>
                  Book a Consultation
                </a>
              </Button>
              <Button asChild variant="whatsapp">
                <a href={whatsappLink("Hello Kui, I'd like to enquire about your event services.")}>
                  Chat via WhatsApp
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
