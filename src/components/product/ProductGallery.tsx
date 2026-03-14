"use client";

import { useState } from "react";
import type { Product } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";

interface ProductGalleryProps {
  product: Product;
}

export default function ProductGallery({ product }: ProductGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#F0DCC8] shadow-lg">
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={product.thumbnails[active] ?? product.image}
            alt={product.title}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        {/* Category badge */}
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#3D2B1F] capitalize">
          {product.category.replace(/-/g, " ")}
        </div>
      </div>

      {/* Thumbnails */}
      {product.thumbnails.length > 1 && (
        <div className="flex gap-3">
          {product.thumbnails.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative flex-1 aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                active === i
                  ? "border-[#E85D04] shadow-md"
                  : "border-[#F0DCC8] opacity-60 hover:opacity-100"
              }`}
            >
              <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
