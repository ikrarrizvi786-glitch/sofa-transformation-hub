export const BUSINESS = {
  name: "Jeevan Foam",
  tagline: "Sofa Repair & Upholstery Services",
  address: "Rampur Beta 1, RS Plaza, Shop No. 7",
  areas: "Noida & Greater Noida",
  phoneDisplay: "9368779652",
  telHref: "tel:9368779652",
  whatsappHref: "https://wa.me/919368779652",
} as const;

export function whatsappMessageHref(message: string) {
  return `${BUSINESS.whatsappHref}?text=${encodeURIComponent(message)}`;
}
