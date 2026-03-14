"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { categories } from "@/lib/data/categories";

export default function CategorySection() {
  return (
    <section className="bg-[#FFF3E8] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#E85D04] uppercase tracking-widest mb-3">
            Browse by Category
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-[#3D2B1F]"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Find Your Canvas
          </h2>
          <div className="brush-stroke w-32 mx-auto mt-4" />
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link
                href={`/shop?category=${cat.id}`}
                className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#F0DCC8]"
              >
                {/* Image */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity"
                    style={{
                      background: `linear-gradient(135deg, ${cat.color}60, transparent)`,
                    }}
                  />
                  <span className="absolute top-3 left-3 text-2xl">{cat.icon}</span>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-bold text-[#3D2B1F] text-sm">{cat.label}</h3>
                  <p className="text-xs text-[#8B6F5E] mt-0.5">
                    {cat.productCount.toLocaleString()} designs
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
