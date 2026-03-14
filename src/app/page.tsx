import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ArtistSpotlight from "@/components/home/ArtistSpotlight";
import HowItWorks from "@/components/home/HowItWorks";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <ArtistSpotlight />
      <HowItWorks />
    </>
  );
}
