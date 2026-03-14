import { notFound } from "next/navigation";
import { getArtistById, artists } from "@/lib/data/artists";
import { getProductsByArtist } from "@/lib/data/products";
import ProductCard from "@/components/shop/ProductCard";
import { MapPin, Users, Package, Instagram, Twitter, Globe, Calendar } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return artists.map((a) => ({ id: a.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const artist = getArtistById(id);
  if (!artist) return { title: "Artist Not Found" };
  return {
    title: `${artist.name} — ArtWear Co.`,
    description: artist.bio,
  };
}

export default async function ArtistProfilePage({ params }: Props) {
  const { id } = await params;
  const artist = getArtistById(id);

  if (!artist) notFound();

  const artistProducts = getProductsByArtist(artist.id);

  return (
    <div className="bg-[#FFF8F0] min-h-screen">
      {/* Cover banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={artist.coverImage}
          alt={`${artist.name}'s cover`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/70 via-transparent to-transparent" />
      </div>

      {/* Profile section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-16 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <img
                src={artist.avatar}
                alt={artist.name}
                className="w-28 h-28 rounded-3xl object-cover border-4 border-white shadow-2xl"
              />
            </div>

            {/* Info */}
            <div className="flex-1 pb-2">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <h1
                    className="text-3xl md:text-4xl font-black text-white text-shadow"
                    style={{ fontFamily: "var(--font-playfair, serif)", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                  >
                    {artist.name}
                  </h1>
                  <div className="flex items-center gap-3 mt-1 flex-wrap">
                    <span className="text-white/80 text-sm">@{artist.username}</span>
                    <div className="flex items-center gap-1 text-white/80 text-sm">
                      <MapPin size={13} />
                      <span>{artist.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/80 text-sm">
                      <Calendar size={13} />
                      <span>Joined {artist.joinedYear}</span>
                    </div>
                  </div>
                </div>
                <button className="px-6 py-2.5 bg-[#7209B7] text-white font-semibold rounded-xl hover:bg-[#5A0692] transition-colors shadow-lg flex-shrink-0">
                  + Follow Artist
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats + bio */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Bio */}
          <div className="md:col-span-2">
            <p className="text-[#8B6F5E] leading-relaxed text-base">{artist.bio}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {artist.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-[#FFF3E8] text-[#E85D04] text-sm font-medium rounded-full border border-[#F0DCC8] capitalize"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-5">
              {artist.socialLinks.instagram && (
                <a
                  href={`#`}
                  className="flex items-center gap-2 px-4 py-2 bg-[#FFF3E8] rounded-xl text-sm text-[#3D2B1F] font-medium hover:bg-[#F0DCC8] transition-colors border border-[#F0DCC8]"
                >
                  <Instagram size={16} />
                  @{artist.socialLinks.instagram}
                </a>
              )}
              {artist.socialLinks.twitter && (
                <a
                  href={`#`}
                  className="flex items-center gap-2 px-4 py-2 bg-[#FFF3E8] rounded-xl text-sm text-[#3D2B1F] font-medium hover:bg-[#F0DCC8] transition-colors border border-[#F0DCC8]"
                >
                  <Twitter size={16} />
                  @{artist.socialLinks.twitter}
                </a>
              )}
              {artist.socialLinks.website && (
                <a
                  href={`#`}
                  className="flex items-center gap-2 px-4 py-2 bg-[#FFF3E8] rounded-xl text-sm text-[#3D2B1F] font-medium hover:bg-[#F0DCC8] transition-colors border border-[#F0DCC8]"
                >
                  <Globe size={16} />
                  {artist.socialLinks.website}
                </a>
              )}
            </div>
          </div>

          {/* Stats card */}
          <div className="bg-white rounded-2xl border border-[#F0DCC8] p-6 shadow-sm space-y-4">
            <h3 className="font-bold text-[#3D2B1F] text-sm uppercase tracking-wide mb-2">
              Stats
            </h3>
            {[
              { icon: Package, label: "Designs", value: artist.productCount },
              { icon: Users, label: "Followers", value: `${(artist.followers / 1000).toFixed(1)}k` },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFF3E8] flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#E85D04]" />
                </div>
                <div>
                  <div className="font-bold text-[#3D2B1F] text-xl">{value}</div>
                  <div className="text-xs text-[#8B6F5E]">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Products grid */}
        <div className="pb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2
              className="text-2xl md:text-3xl font-black text-[#3D2B1F]"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              {artist.name.split(" ")[0]}&apos;s Designs ({artistProducts.length})
            </h2>
            <div className="flex-1 h-px bg-[#F0DCC8]" />
          </div>

          {artistProducts.length === 0 ? (
            <div className="text-center py-20 text-[#8B6F5E]">
              No designs yet — check back soon!
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {artistProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
