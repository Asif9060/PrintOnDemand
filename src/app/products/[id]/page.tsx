import { notFound } from "next/navigation";
import { getProductById, products } from "@/lib/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductDetails from "@/components/product/ProductDetails";
import RelatedProducts from "@/components/product/RelatedProducts";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.title} by ${product.artistName} — ArtWear Co.`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) notFound();

  return (
    <div className="bg-[#FFF8F0] min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-[#8B6F5E]">
          <a href="/" className="hover:text-[#E85D04] transition-colors">Home</a>
          <span>/</span>
          <a href="/shop" className="hover:text-[#E85D04] transition-colors">Shop</a>
          <span>/</span>
          <span className="text-[#3D2B1F] font-medium truncate max-w-40">{product.title}</span>
        </nav>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Gallery */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProductGallery product={product} />
          </div>

          {/* Details */}
          <ProductDetails product={product} />
        </div>

        {/* Related products */}
        <RelatedProducts product={product} />
      </div>
    </div>
  );
}
