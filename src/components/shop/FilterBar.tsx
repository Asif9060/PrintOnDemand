"use client";

import { useState } from "react";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import type { FilterState, CategoryId } from "@/lib/types";
import { categories } from "@/lib/data/categories";

interface FilterBarProps {
  filter: FilterState;
  onChange: (filter: FilterState) => void;
  totalCount: number;
}

const sortOptions: { value: FilterState["sort"]; label: string }[] = [
  { value: "trending", label: "Trending" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
];

export default function FilterBar({ filter, onChange, totalCount }: FilterBarProps) {
  const [showFilters, setShowFilters] = useState(false);

  function setCategory(id: CategoryId | "all") {
    onChange({ ...filter, category: id });
  }

  function setSort(sort: FilterState["sort"]) {
    onChange({ ...filter, sort });
  }

  return (
    <div className="bg-white border-b border-[#F0DCC8] sticky top-16 md:top-20 z-20">
      {/* Main bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-[#8B6F5E] font-medium flex-shrink-0">
            <span className="font-bold text-[#3D2B1F]">{totalCount}</span> designs
          </p>

          <div className="flex items-center gap-3 overflow-x-auto pb-1 flex-1 justify-center">
            {/* Category pills */}
            <button
              onClick={() => setCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-semibold flex-shrink-0 transition-colors ${
                filter.category === "all"
                  ? "bg-[#3D2B1F] text-white"
                  : "bg-[#FFF3E8] text-[#8B6F5E] hover:bg-[#F0DCC8]"
              }`}
            >
              All
            </button>
            {categories.slice(0, 6).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium flex-shrink-0 transition-colors flex items-center gap-1.5 ${
                  filter.category === cat.id
                    ? "bg-[#E85D04] text-white"
                    : "bg-[#FFF3E8] text-[#8B6F5E] hover:bg-[#F0DCC8]"
                }`}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <div className="relative flex-shrink-0">
            <select
              value={filter.sort}
              onChange={(e) => setSort(e.target.value as FilterState["sort"])}
              className="appearance-none pl-3 pr-8 py-2 bg-[#FFF3E8] border border-[#F0DCC8] rounded-xl text-sm font-medium text-[#3D2B1F] cursor-pointer focus:outline-none focus:border-[#E85D04] transition-colors"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-[#8B6F5E] pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
