"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { getFeaturedProducts, getTrendingProducts } from "@/lib/data/products";
import ProductCard from "@/components/shop/ProductCard";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();
  const trending = getTrendingProducts();

  return (
    <section className="py-20 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-semibold text-[#E85D04] uppercase tracking-widest mb-3 flex items-center gap-2">
              <TrendingUp size={16} /> Trending This Week
            </p>
            <h2
              className="text-4xl md:text-5xl font-black text-[#3D2B1F]"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Designs the World
              <br />
              <span className="text-gradient-warm">is Wearing</span>
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden sm:flex items-center gap-2 text-[#E85D04] font-semibold hover:gap-3 transition-all"
          >
            View All <ArrowRight size={18} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {trending.slice(0, 8).map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10 sm:hidden">
          <Link href="/shop">
            <button className="px-8 py-3 bg-[#E85D04] text-white font-semibold rounded-xl hover:bg-[#C94D02] transition-colors">
              View All Designs
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
