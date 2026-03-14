"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#FFF8F0]">
      {/* Animated blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob-shape absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#E85D04]/10 opacity-60" />
        <div
          className="blob-shape absolute -bottom-40 -right-20 w-[500px] h-[500px] bg-[#7209B7]/10 opacity-50"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="blob-shape absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#F48C06]/8 opacity-40"
          style={{ animationDelay: "6s" }}
        />
      </div>

      {/* Decorative dots grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#3D2B1F 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <Sparkles size={16} className="text-[#E85D04]" />
            <span className="text-sm font-semibold text-[#E85D04] uppercase tracking-widest">
              10,000+ Independent Artists
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#3D2B1F] leading-[1.05] mb-6"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Wear Art.{" "}
            <span className="relative inline-block">
              <span className="text-gradient-warm">Own the Story.</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 8 Q75 2 150 6 Q225 10 300 4"
                  fill="none"
                  stroke="#E85D04"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-lg text-[#8B6F5E] leading-relaxed max-w-lg mb-10">
            A global marketplace where independent artists showcase their designs on T-shirts,
            hoodies, mugs, and more. Every purchase directly funds a creator.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/shop">
              <Button variant="primary" size="lg">
                Explore Designs <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="/artists">
              <Button variant="outline" size="lg">
                Start Selling
              </Button>
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-8 mt-12">
            {[
              { value: "50K+", label: "Unique Designs" },
              { value: "10K+", label: "Artists" },
              { value: "100+", label: "Products" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl font-bold text-[#3D2B1F]"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-[#8B6F5E] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Visual composition */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:block relative h-[560px]"
        >
          {/* Card stack */}
          {[
            { seed: "hero1", rot: -8, y: 40, x: -20, z: 1 },
            { seed: "hero2", rot: 4, y: 10, x: 60, z: 2 },
            { seed: "hero3", rot: -2, y: 60, x: 120, z: 3 },
          ].map((card, i) => (
            <motion.div
              key={card.seed}
              className="absolute w-52 h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
              style={{
                transform: `rotate(${card.rot}deg) translate(${card.x}px, ${card.y}px)`,
                zIndex: card.z,
                left: i * 80,
                top: i * 30,
              }}
              animate={{ y: [card.y, card.y - 10, card.y] }}
              transition={{ duration: 4 + i * 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={`https://picsum.photos/seed/${card.seed}/300/400`}
                alt="Featured artwork"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
          ))}

          {/* Price tag decoration */}
          <motion.div
            className="absolute bottom-20 right-16 bg-white rounded-2xl shadow-xl p-4 border border-[#F0DCC8] z-10"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="text-xs text-[#8B6F5E] font-medium mb-1">Trending Now</div>
            <div className="font-bold text-[#3D2B1F]">Glitch Shrine</div>
            <div className="text-[#E85D04] font-bold text-lg">$48</div>
          </motion.div>

          {/* Artist badge */}
          <motion.div
            className="absolute top-16 right-4 bg-[#3D2B1F] text-white rounded-2xl shadow-xl p-3 z-10 flex items-center gap-2"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <img
              src="https://i.pravatar.cc/150?u=theonaka"
              alt="Artist"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <div className="text-xs text-[#C4A882]">by</div>
              <div className="text-xs font-semibold">Theo Nakamura</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 fill-[#FFF3E8]">
          <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 20 L1440 60 Z" />
        </svg>
      </div>
    </section>
  );
}
