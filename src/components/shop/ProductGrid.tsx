"use client";

import ProductCard from "./ProductCard";
import type { Product } from "@/lib/types";
import { motion } from "framer-motion";
import { PackageX } from "lucide-react";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-4 text-center">
        <div className="w-20 h-20 rounded-full bg-[#F0DCC8] flex items-center justify-center">
          <PackageX size={32} className="text-[#8B6F5E]" />
        </div>
        <h3 className="text-xl font-bold text-[#3D2B1F]">No designs found</h3>
        <p className="text-[#8B6F5E] text-sm max-w-xs">
          Try adjusting your filters or search for something different.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((product, i) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: Math.min(i * 0.05, 0.4), duration: 0.4 }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </div>
  );
}
