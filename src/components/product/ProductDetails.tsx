"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, Heart, Share2, ShoppingCart, Check, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";
import type { Product, ProductColor } from "@/lib/types";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { useCart } from "@/lib/cart-context";
import { getArtistById } from "@/lib/data/artists";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[2] ?? product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  const artist = getArtistById(product.artistId);

  function handleAddToCart() {
    addItem(product, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="space-y-8">
      {/* Title & badges */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          {product.isNew && <Badge variant="new">New</Badge>}
          {product.trending && <Badge variant="trending">🔥 Trending</Badge>}
          <span className="text-xs text-[#8B6F5E] font-medium capitalize">
            {product.category.replace(/-/g, " ")}
          </span>
        </div>
        <h1
          className="text-3xl md:text-4xl font-black text-[#3D2B1F] leading-tight"
          style={{ fontFamily: "var(--font-playfair, serif)" }}
        >
          {product.title}
        </h1>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className={
                i < Math.floor(product.rating)
                  ? "fill-[#F48C06] text-[#F48C06]"
                  : "text-[#F0DCC8]"
              }
            />
          ))}
        </div>
        <span className="font-bold text-[#3D2B1F]">{product.rating}</span>
        <span className="text-[#8B6F5E] text-sm">({product.reviewCount.toLocaleString()} reviews)</span>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span
          className="text-4xl font-black text-[#E85D04]"
          style={{ fontFamily: "var(--font-playfair, serif)" }}
        >
          ${product.price}
        </span>
        {product.originalPrice && (
          <span className="text-xl text-[#8B6F5E] line-through">${product.originalPrice}</span>
        )}
      </div>

      {/* Color selector */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="font-semibold text-[#3D2B1F] text-sm">Color:</span>
          <span className="text-sm text-[#8B6F5E]">{selectedColor.name}</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {product.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color)}
              title={color.name}
              className={`relative w-10 h-10 rounded-full border-2 transition-all ${
                selectedColor.name === color.name
                  ? "border-[#E85D04] scale-110 shadow-md"
                  : "border-[#F0DCC8] hover:border-[#C4A882]"
              }`}
              style={{ backgroundColor: color.hex }}
            >
              {selectedColor.name === color.name && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <Check
                    size={14}
                    className={
                      color.hex === "#FFFFFF" || color.hex === "#FEFEFE"
                        ? "text-black"
                        : "text-white"
                    }
                  />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Size selector */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold text-[#3D2B1F] text-sm">Size:</span>
          <span className="text-xs text-[#E85D04] font-medium cursor-pointer hover:underline">
            Size Guide
          </span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all ${
                selectedSize === size
                  ? "border-[#E85D04] bg-[#E85D04] text-white"
                  : "border-[#F0DCC8] text-[#3D2B1F] hover:border-[#C4A882]"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Available on products */}
      <div className="bg-[#FFF3E8] rounded-2xl p-4">
        <p className="text-sm font-semibold text-[#3D2B1F] mb-3">Also available on:</p>
        <div className="flex flex-wrap gap-2">
          {product.availableProducts.map((p) => (
            <div
              key={p.type}
              className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-[#F0DCC8] text-sm"
            >
              <span>{p.icon}</span>
              <span className="font-medium text-[#3D2B1F]">{p.type}</span>
              <span className="text-[#E85D04] font-bold">${p.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Add to cart */}
      <div className="flex gap-3">
        <motion.div className="flex-1" whileTap={{ scale: 0.98 }}>
          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={handleAddToCart}
            className={added ? "bg-green-600 hover:bg-green-700" : ""}
          >
            {added ? (
              <>
                <Check size={20} /> Added to Cart!
              </>
            ) : (
              <>
                <ShoppingCart size={20} /> Add to Cart
              </>
            )}
          </Button>
        </motion.div>
        <button
          onClick={() => setLiked((p) => !p)}
          className="p-4 rounded-xl border-2 border-[#F0DCC8] hover:border-[#E85D04] transition-colors"
        >
          <Heart
            size={22}
            className={liked ? "fill-red-500 text-red-500" : "text-[#8B6F5E]"}
          />
        </button>
        <button className="p-4 rounded-xl border-2 border-[#F0DCC8] hover:border-[#E85D04] transition-colors">
          <Share2 size={22} className="text-[#8B6F5E]" />
        </button>
      </div>

      {/* Description */}
      <div className="border-t border-[#F0DCC8] pt-6">
        <h3 className="font-bold text-[#3D2B1F] mb-3">About This Design</h3>
        <p className="text-[#8B6F5E] leading-relaxed text-sm">{product.description}</p>
      </div>

      {/* Artist card */}
      {artist && (
        <div className="border-t border-[#F0DCC8] pt-6">
          <h3 className="font-bold text-[#3D2B1F] mb-4">About the Artist</h3>
          <Link href={`/artists/${artist.id}`}>
            <div className="flex items-start gap-4 p-4 bg-[#FFF3E8] rounded-2xl hover:bg-[#F0DCC8] transition-colors cursor-pointer">
              <img
                src={artist.avatar}
                alt={artist.name}
                className="w-14 h-14 rounded-2xl object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-[#3D2B1F]">{artist.name}</h4>
                  <button className="text-xs px-3 py-1.5 bg-[#7209B7] text-white rounded-full font-semibold hover:bg-[#5A0692] transition-colors">
                    Follow
                  </button>
                </div>
                <div className="flex items-center gap-1 text-xs text-[#8B6F5E] mt-0.5">
                  <MapPin size={11} />
                  <span>{artist.location}</span>
                  <span className="mx-2">·</span>
                  <Users size={11} />
                  <span>{(artist.followers / 1000).toFixed(1)}k followers</span>
                </div>
                <p className="text-xs text-[#8B6F5E] mt-2 line-clamp-2">{artist.bio}</p>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {product.tags.map((tag) => (
          <Link key={tag} href={`/shop?tag=${tag}`}>
            <span className="px-3 py-1.5 bg-[#FFF3E8] text-[#8B6F5E] text-xs font-medium rounded-full hover:bg-[#F0DCC8] hover:text-[#E85D04] transition-colors capitalize">
              #{tag}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
