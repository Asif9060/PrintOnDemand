import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/ui/CartDrawer";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ArtWear Co. — Wear Original Art",
  description:
    "A global marketplace for print-on-demand products designed by independent artists. Shop unique T-shirts, hoodies, stickers, mugs, and more.",
  keywords: ["print on demand", "artist marketplace", "custom t-shirts", "art prints", "indie artists"],
  openGraph: {
    title: "ArtWear Co. — Wear Original Art",
    description: "Shop unique designs from independent artists around the world.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-[#FFF8F0] text-[#3D2B1F]">
        <CartProvider>
          <Header />
          <main className="min-h-screen pt-16 md:pt-20">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
