import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://psicostimulos.es'),
  title: "Stímulos Centro Infantil | Psicología y Apoyo al Desarrollo en Málaga",
  description: "Centro especializado en psicología infantil, neuropsicología, logopedia y psicopedagogía en Málaga. Atención personalizada para el desarrollo y bienestar de cada niño.",
  openGraph: {
    title: "Stímulos Centro Infantil | Psicología en Málaga",
    description: "Centro especializado en psicología infantil, neuropsicología, logopedia y psicopedagogía en Málaga.",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Stímulos Centro Infantil | Psicología en Málaga",
    description: "Centro especializado en psicología infantil, neuropsicología, logopedia y psicopedagogía en Málaga.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
