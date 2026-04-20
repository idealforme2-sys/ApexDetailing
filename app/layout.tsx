import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SitePreloader } from "@/components/site-preloader";
import { business } from "@/lib/site-data";
import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  description: business.description,
  telephone: business.phoneDisplay,
  areaServed: business.serviceArea,
  image: "/APEX_Detailing.jpg",
  knowsAbout: [
    "Mobile auto detailing",
    "Interior detailing",
    "Exterior wash",
    "Pet hair removal",
    "Wax sealant",
    "Extraction",
  ],
};

export const metadata: Metadata = {
  title: {
    default: "APEX MOBILE DETAILING",
    template: "%s | APEX MOBILE DETAILING",
  },
  description: business.description,
  applicationName: business.name,
  keywords: [
    "mobile detailing Franklin",
    "car detailing Franklin",
    "mobile auto detailing",
    "pet hair removal",
    "wax sealant",
    "interior detailing",
  ],
  openGraph: {
    title: business.name,
    description: business.description,
  },
  twitter: {
    card: "summary_large_image",
    title: business.name,
    description: business.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${bodyFont.variable} ${displayFont.variable} bg-background text-foreground`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <SitePreloader />
        <Header />
        <div className="relative overflow-hidden">
          <div className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute left-[8%] top-[20%] h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute bottom-[8%] right-[10%] h-80 w-80 rounded-full bg-white/[0.04] blur-3xl" />
          </div>
          <main className="pt-28 md:pt-32">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
