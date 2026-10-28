import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const title = "Max Shine Mobile Detailing | Broken Bow, Idabel & Hochatown, OK";
const description =
  "Professional mobile auto detailing in Southeast Oklahoma. We come to you in Broken Bow, Idabel, Hochatown and surrounding areas. Call or text for a quote.";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 1536, height: 864 }],
  },
};

export const viewport = { themeColor: "#000000" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "Max Shine Mobile Detailing",
  telephone: "+15803062528",
  areaServed: ["Broken Bow, OK", "Idabel, OK", "Hochatown, OK"],
  sameAs: ["https://www.facebook.com/profile.php?id=61581700734123"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
