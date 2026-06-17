import { MapPin, Phone, Clock } from "lucide-react";
import { SITE, telLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[oklch(0.3_0.02_45)] text-[oklch(0.95_0.01_80)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-serif text-xl">Weddings &amp; Events by Kui Ltd</p>
          <p className="mt-1 text-xs uppercase tracking-[0.3em] text-[oklch(0.78_0.07_80)]">
            Bringing your dream celebrations to life
          </p>
          <p className="mt-4 max-w-sm text-sm text-[oklch(0.82_0.02_70)]">
            Boutique event planning and decor rental in Nairobi for intimate and premium
            celebrations of 50 to 70 guests.
          </p>
        </div>

        <div className="space-y-3 text-sm text-[oklch(0.85_0.02_70)]">
          <p className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 text-[oklch(0.78_0.07_80)]" />
            <span>
              {SITE.address}
              <br />
              {SITE.plusCode}
            </span>
          </p>
          <p className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-[oklch(0.78_0.07_80)]" />
            <a href={telLink} className="hover:underline">
              {SITE.phoneDisplay}
            </a>
          </p>
          <p className="flex items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 text-[oklch(0.78_0.07_80)]" />
            <span>Open Monday – Saturday · Closes 5:30 PM</span>
          </p>
        </div>

        <nav className="space-y-2 text-sm">
          {[
            { label: "About", href: "#about" },
            { label: "Services & Inventory", href: "#services" },
            { label: "Testimonials", href: "#testimonials" },
            { label: "Book a Consultation", href: "#booking" },
            { label: "Contact", href: "#contact" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-[oklch(0.85_0.02_70)] transition-colors hover:text-[oklch(0.78_0.07_80)]"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-[oklch(1_0_0/0.1)] py-5 text-center text-xs text-[oklch(0.75_0.02_70)]">
        © {new Date().getFullYear()} Weddings &amp; Events by Kui Ltd. All rights reserved.
      </div>
    </footer>
  );
}
