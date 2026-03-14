"use client";

import Link from "next/link";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/lib/types";
import Badge from "@/components/ui/Badge";
import { useCart } from "@/lib/cart-context";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [liked, setLiked] = useState(false);
  const [imageError, setImageError] = useState(false);

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    addItem(product, product.sizes[2] ?? product.sizes[0], product.colors[0]);
  }

  return (
    <Link href={`/products/${product.id}`}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="card-shine group bg-white rounded-3xl overflow-hidden border border-[#F0DCC8] shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      >
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-[#F0DCC8]">
          <img
            src={imageError ? `https://picsum.photos/seed/${product.id}-fallback/600/600` : product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImageError(true)}
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.isNew && <Badge variant="new">New</Badge>}
            {product.trending && <Badge variant="trending">🔥 Trending</Badge>}
            {product.originalPrice && (
              <Badge variant="secondary">
                -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </Badge>
            )}
          </div>

          {/* Like button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setLiked((p) => !p);
            }}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white shadow backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
          >
            <Heart
              size={16}
              className={liked ? "fill-red-500 text-red-500" : "text-[#8B6F5E]"}
            />
          </button>

          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={handleAddToCart}
              className="w-full py-2.5 bg-[#3D2B1F] text-white text-sm font-semibold rounded-xl hover:bg-[#E85D04] transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart size={16} />
              Quick Add
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          {/* Artist */}
          <div className="flex items-center gap-2 mb-2">
            <img
              src={product.artistAvatar}
              alt={product.artistName}
              className="w-5 h-5 rounded-full object-cover"
            />
            <span className="text-xs text-[#8B6F5E] font-medium hover:text-[#E85D04] transition-colors">
              {product.artistName}
            </span>
          </div>

          <h3 className="font-bold text-[#3D2B1F] text-sm leading-tight line-clamp-2 mb-2">
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-3">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={
                    i < Math.floor(product.rating)
                      ? "fill-[#F48C06] text-[#F48C06]"
                      : "text-[#F0DCC8]"
                  }
                />
              ))}
            </div>
            <span className="text-xs text-[#8B6F5E]">({product.reviewCount.toLocaleString()})</span>
          </div>

          {/* Price + category */}
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-[#E85D04]">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-[#8B6F5E] line-through">${product.originalPrice}</span>
              )}
            </div>
            <span className="text-xs text-[#8B6F5E] font-medium capitalize">
              {product.category.replace(/-/g, " ")}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
