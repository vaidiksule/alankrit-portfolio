import type { Metadata, Viewport } from "next";
import { Bebas_Neue, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alankrit Sharma — Video Editor",
  description:
    "Professional video editor based in Bilaspur, Chhattisgarh. Brand content, clothing edits, AI longform, influencer work, and gym montages.",
  openGraph: {
    title: "Alankrit Sharma — Video Editor",
    description:
      "Professional video editor based in Bilaspur, Chhattisgarh. Cinematic cuts with typographic precision.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F5F5DD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${dmSans.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
