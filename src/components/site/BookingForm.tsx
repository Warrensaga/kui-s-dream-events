import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { CalendarHeart, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  full_name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  event_date: z.string().max(20).optional().or(z.literal("")),
  guest_count: z.string().max(40).optional().or(z.literal("")),
  service_tier: z.string().max(40).optional().or(z.literal("")),
  event_type: z.string().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

const empty = {
  full_name: "",
  email: "",
  phone: "",
  event_date: "",
  guest_count: "",
  service_tier: "",
  event_type: "",
  message: "",
};

export function BookingForm() {
  const [form, setForm] = useState(empty);
  const [loading, setLoading] = useState(false);

  const set = (key: keyof typeof empty, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("consultation_inquiries").insert({
      full_name: parsed.data.full_name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      event_date: parsed.data.event_date || null,
      guest_count: parsed.data.guest_count || null,
      service_tier: parsed.data.service_tier || null,
      event_type: parsed.data.event_type || null,
      message: parsed.data.message || null,
    });
    setLoading(false);

    if (error) {
      toast.error("Something went wrong. Please try again or reach us on WhatsApp.");
      return;
    }
    toast.success("Thank you! Your consultation request has been received. Kui will be in touch soon.");
    setForm(empty);
  };

  return (
    <section id="booking" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] md:grid md:grid-cols-[0.9fr_1.1fr]">
          <aside className="bg-[image:var(--gradient-gold)] p-8 text-primary-foreground sm:p-10">
            <CalendarHeart className="h-9 w-9" />
            <h2 className="mt-4 font-serif text-3xl">Book a Consultation</h2>
            <p className="mt-3 text-primary-foreground/90">
              Tell us about your celebration and we'll craft a tailored proposal. Perfect for
              intimate and premium parties of 50 to 70 guests.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-primary-foreground/90">
              <li>• Personalized planning with Kui</li>
              <li>• Pristine, well-maintained decor</li>
              <li>• Flexible service tiers for every budget</li>
            </ul>
          </aside>

          <form onSubmit={handleSubmit} className="space-y-4 p-8 sm:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="full_name">Full name</Label>
                <Input
                  id="full_name"
                  value={form.full_name}
                  onChange={(e) => set("full_name", e.target.value)}
                  placeholder="Jane Doe"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  placeholder="07XX XXX XXX"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="event_date">Event date</Label>
                <Input
                  id="event_date"
                  type="date"
                  value={form.event_date}
                  onChange={(e) => set("event_date", e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <Label>Guest count</Label>
                <Select
                  value={form.guest_count}
                  onValueChange={(v) => set("guest_count", v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Under 50">Under 50</SelectItem>
                    <SelectItem value="50-70">50 – 70</SelectItem>
                    <SelectItem value="70+">70+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label>Event type</Label>
                <Select
                  value={form.event_type}
                  onValueChange={(v) => set("event_type", v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Wedding Decor">Wedding Decor</SelectItem>
                    <SelectItem value="Corporate Event">Corporate Event</SelectItem>
                    <SelectItem value="Private Party">Private Party</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Service tier</Label>
                <Select
                  value={form.service_tier}
                  onValueChange={(v) => set("service_tier", v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select tier" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Essential">Essential</SelectItem>
                    <SelectItem value="Premium">Premium</SelectItem>
                    <SelectItem value="Luxury">Luxury</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="message">Tell us about your celebration</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                placeholder="Theme, colours, venue, special requests…"
                rows={3}
              />
            </div>

            <Button type="submit" variant="hero" size="xl" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                "Request My Consultation"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
