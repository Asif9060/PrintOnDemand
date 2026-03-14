import Link from "next/link";
import type { Product } from "@/lib/types";
import ProductCard from "@/components/shop/ProductCard";
import { getRelatedProducts } from "@/lib/data/products";

interface RelatedProductsProps {
  product: Product;
}

export default function RelatedProducts({ product }: RelatedProductsProps) {
  const related = getRelatedProducts(product, 4);

  if (related.length === 0) return null;

  return (
    <section className="py-16 border-t border-[#F0DCC8]">
      <div className="flex items-center justify-between mb-8">
        <h2
          className="text-2xl md:text-3xl font-black text-[#3D2B1F]"
          style={{ fontFamily: "var(--font-playfair, serif)" }}
        >
          You May Also Like
        </h2>
        <Link
          href="/shop"
          className="text-sm text-[#E85D04] font-semibold hover:underline"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
