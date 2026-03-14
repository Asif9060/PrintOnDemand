"use client";

import { useState, useMemo } from "react";
import { products } from "@/lib/data/products";
import type { FilterState } from "@/lib/types";
import FilterBar from "@/components/shop/FilterBar";
import ProductGrid from "@/components/shop/ProductGrid";

const DEFAULT_FILTER: FilterState = {
  category: "all",
  sort: "trending",
  priceMax: 200,
};

export default function ShopPage() {
  const [filter, setFilter] = useState<FilterState>(DEFAULT_FILTER);

  const filtered = useMemo(() => {
    let result = [...products];

    if (filter.category !== "all") {
      result = result.filter((p) => p.category === filter.category);
    }

    result = result.filter((p) => p.price <= filter.priceMax);

    switch (filter.sort) {
      case "trending":
        result.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
        break;
      case "newest":
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
    }

    return result;
  }, [filter]);

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Page header */}
      <div className="bg-[#FFF3E8] border-b border-[#F0DCC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-sm font-semibold text-[#E85D04] uppercase tracking-widest mb-3">
            Browse Designs
          </p>
          <h1
            className="text-4xl md:text-5xl font-black text-[#3D2B1F]"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            The Art Shop
          </h1>
          <p className="text-[#8B6F5E] mt-3 max-w-lg">
            Original designs by independent artists — printed on-demand and shipped worldwide.
          </p>
        </div>
      </div>

      <FilterBar filter={filter} onChange={setFilter} totalCount={filtered.length} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}
