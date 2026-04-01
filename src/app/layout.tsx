import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Menu } from "@/components/menu";

const helvetica = localFont({
  src: [
    { path: "../fonts/HelveticaNeue-UltraLigExt.otf", weight: "100" },
    { path: "../fonts/HelveticaNeue-Thin.otf", weight: "200" },
    { path: "../fonts/HelveticaNeue-LightExt.otf", weight: "300" },
    { path: "../fonts/HelveticaNeueMedium.ttf", weight: "500" },
    { path: "../fonts/HelveticaNeueBold.ttf", weight: "700" },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

const helveticaCondensed = localFont({
  src: [
    { path: "../fonts/HelveticaNeueBlackCondensed.ttf", weight: "900" },
  ],
  variable: "--font-helvetica-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arterra Projects — A Fusion of Music and Literature",
  description:
    "Arterra Projects is an artist collective by actor John Malkovich and pianist Anastasya Terenkova. A fusion of music and literature.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helvetica.variable} ${helveticaCondensed.variable}`}>
        <Navigation />
        <Menu />
        <div className="page-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
