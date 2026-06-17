// Shared business / contact constants for Weddings & Events by Kui Ltd
export const SITE = {
  name: "Weddings & Events by Kui Ltd",
  shortName: "Weddings & Events by Kui",
  tagline: "Bringing Your Dream Celebrations to Life",
  phoneDisplay: "0737 609899",
  phoneIntl: "254737609899", // Kenya country code for WhatsApp / tel links
  address: "406 Ndovu Crescent, Nairobi",
  plusCode: "JQM2+3W Nairobi",
  hours: "Open Monday to Saturday, closes at 5:30 PM",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=JQM2%2B3W+Nairobi",
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${SITE.phoneIntl}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const telLink = `tel:+${SITE.phoneIntl}`;
