import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Menu } from "@/components/menu";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
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
      <body className={inter.variable}>
        <Navigation />
        <Menu />
        <div className="page-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
