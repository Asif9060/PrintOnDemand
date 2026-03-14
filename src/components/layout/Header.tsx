"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, Search, Palette } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/artists", label: "Artists" },
  { href: "/about", label: "How It Works" },
];

export default function Header() {
  const { totalItems, toggleCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FFF8F0]/95 backdrop-blur-md shadow-sm border-b border-[#F0DCC8]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-[#E85D04] rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <Palette size={18} className="text-white" />
              </div>
              <span
                className="font-display text-xl font-bold text-[#3D2B1F] tracking-tight"
                style={{ fontFamily: "var(--font-display, serif)" }}
              >
                ArtWear<span className="text-[#E85D04]"> Co.</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#3D2B1F] hover:text-[#E85D04] font-medium transition-colors relative group text-sm"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E85D04] transition-all group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button className="p-2 rounded-xl hover:bg-[#F0DCC8] transition-colors text-[#3D2B1F]">
                <Search size={20} />
              </button>
              <button
                onClick={toggleCart}
                className="relative p-2 rounded-xl hover:bg-[#F0DCC8] transition-colors text-[#3D2B1F]"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 bg-[#E85D04] text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {totalItems > 99 ? "99+" : totalItems}
                  </span>
                )}
              </button>
              <Link
                href="/shop"
                className="px-5 py-2 bg-[#3D2B1F] text-white text-sm font-semibold rounded-xl hover:bg-[#E85D04] transition-colors"
              >
                Start Selling
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleCart}
                className="relative p-2 rounded-xl hover:bg-[#F0DCC8] transition-colors"
              >
                <ShoppingBag size={20} className="text-[#3D2B1F]" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 bg-[#E85D04] text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                className="p-2 rounded-xl hover:bg-[#F0DCC8] transition-colors text-[#3D2B1F]"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-16 z-20 bg-[#FFF8F0] border-b border-[#F0DCC8] shadow-lg md:hidden"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-[#3D2B1F] font-medium hover:bg-[#F0DCC8] hover:text-[#E85D04] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-[#F0DCC8] mt-2 pt-2">
                <Link
                  href="/shop"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full px-4 py-3 bg-[#E85D04] text-white text-center font-semibold rounded-xl hover:bg-[#C94D02] transition-colors"
                >
                  Start Selling
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
