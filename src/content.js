// Everything the owner may want to edit lives here.
// Swap photos by replacing the files in /public/images (keep the same names)
// or by changing the `src` paths below.

export const business = {
  name: "Max Shine Mobile Detailing",
  short: "Max Shine",
  phoneDisplay: "+1 580-306-2528",
  phoneTel: "tel:+15803062528",
  phoneSms: "sms:+15803062528",
  facebook: "https://www.facebook.com/profile.php?id=61581700734123",
  tagline: "We come to you. You enjoy the shine.",
  areas: ["Broken Bow", "Idabel", "Hochatown", "Surrounding areas"],
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Service Areas", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

// Presentation categories only: no prices, packages or guarantees.
export const services = [
  {
    icon: "exterior",
    title: "Exterior Detailing",
    text: "A refreshed exterior with attention to the vehicle's visible surfaces.",
  },
  {
    icon: "interior",
    title: "Interior Detailing",
    text: "A cleaner, more refreshed cabin.",
  },
  {
    icon: "plan",
    title: "Maintenance Plans",
    text: "Ongoing vehicle care to help maintain a clean appearance.",
  },
];

export const benefits = [
  {
    icon: "pin",
    title: "We Come to You",
    text: "Mobile detailing for your convenience.",
  },
  {
    icon: "sparkle",
    title: "Attention to Detail",
    text: "Careful vehicle cleaning with a focus on the finish.",
  },
  {
    icon: "calendar",
    title: "Maintenance Plans Available",
    text: "Ask about options for keeping your vehicle looking its best.",
  },
];

// `size: "large"` tiles are the wide landscape images; "small" are supporting images.
export const gallery = [
  { src: "/images/work-1.jpg", alt: "Freshly detailed white SUV", size: "large", w: 1536, h: 1024 },
  { src: "/images/work-2.jpg", alt: "Detailed white SUV in the sun", size: "small", w: 1100, h: 1467 },
  { src: "/images/work-3.jpg", alt: "Detailed white SUV under a carport", size: "small", w: 1100, h: 1467 },
  { src: "/images/work-4.jpg", alt: "Detailed heavy-duty truck parked beside a camper", size: "large", w: 1536, h: 1024 },
];
