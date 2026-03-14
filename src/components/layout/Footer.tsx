"use client";

import Link from "next/link";
import { Palette, Instagram, Twitter, Globe } from "lucide-react";

const footerLinks = {
  Shop: [
    { label: "All Products", href: "/shop" },
    { label: "T-Shirts", href: "/shop?category=t-shirts" },
    { label: "Hoodies", href: "/shop?category=hoodies" },
    { label: "Stickers", href: "/shop?category=stickers" },
    { label: "Mugs", href: "/shop?category=mugs" },
    { label: "Art Prints", href: "/shop?category=art-prints" },
  ],
  Artists: [
    { label: "Browse Creators", href: "/artists" },
    { label: "Start Selling", href: "/artists" },
    { label: "Artist FAQ", href: "/about" },
    { label: "Upload Design", href: "/artists" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "How It Works", href: "/about" },
    { label: "Blog", href: "/about" },
    { label: "Careers", href: "/about" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#3D2B1F] text-[#F5EDD6]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#E85D04] rounded-full flex items-center justify-center">
                <Palette size={20} className="text-white" />
              </div>
              <span
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-display, serif)" }}
              >
                ArtWear<span className="text-[#F48C06]"> Co.</span>
              </span>
            </Link>
            <p className="text-[#C4A882] text-sm leading-relaxed max-w-xs">
              A global marketplace where artists share their designs and wear their art. Every
              purchase supports an independent creator.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-[#E85D04] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-[#E85D04] transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-[#E85D04] transition-colors"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#C4A882] hover:text-[#F48C06] text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter stripe */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#C4A882] text-sm">New designs every week. Join 40,000+ art lovers.</p>
          <form className="flex gap-2 w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-[#8B6F5E] text-sm focus:outline-none focus:border-[#E85D04] transition-colors"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#E85D04] text-white font-semibold text-sm rounded-xl hover:bg-[#C94D02] transition-colors flex-shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#8B6F5E]">
          <p>© 2026 ArtWear Co. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#F48C06] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#F48C06] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#F48C06] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
