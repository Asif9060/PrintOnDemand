import { artists } from "@/lib/data/artists";
import ArtistCard from "@/components/artists/ArtistCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artists & Creators — ArtWear Co.",
  description: "Meet the independent artists and designers behind every unique design on ArtWear Co.",
};

export default function ArtistsPage() {
  const featured = artists.filter((a) => a.featured);
  const all = artists;

  return (
    <div className="bg-[#FFF8F0] min-h-screen">
      {/* Hero */}
      <div
        className="relative bg-[#3D2B1F] text-white py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #3D2B1F 0%, #7209B7 100%)" }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#FFF 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#F48C06] uppercase tracking-widest mb-4">
            Independent Creators
          </p>
          <h1
            className="text-5xl md:text-6xl font-black mb-6"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Meet the Artists
          </h1>
          <p className="text-[#C4A882] max-w-xl mx-auto text-lg leading-relaxed">
            Over 10,000 creators from around the globe. Each one pours their soul into every design.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-12 mt-10">
            {[
              { value: "10K+", label: "Artists" },
              { value: "50K+", label: "Designs" },
              { value: "140+", label: "Countries" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl font-black text-[#F48C06]"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-[#C4A882]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Featured */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2
              className="text-3xl font-black text-[#3D2B1F]"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Featured Artists
            </h2>
            <div className="flex-1 h-px bg-[#F0DCC8]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </section>

        {/* All artists */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2
              className="text-3xl font-black text-[#3D2B1F]"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              All Creators ({all.length})
            </h2>
            <div className="flex-1 h-px bg-[#F0DCC8]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {all.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </section>

        {/* CTA for artists */}
        <section className="bg-[#FFF3E8] rounded-3xl p-12 text-center border border-[#F0DCC8]">
          <h2
            className="text-3xl md:text-4xl font-black text-[#3D2B1F] mb-4"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Are You an Artist?
          </h2>
          <p className="text-[#8B6F5E] max-w-lg mx-auto mb-8 leading-relaxed">
            Join ArtWear Co. and start earning royalties from your designs. Upload once, earn forever.
            It{`'`}s free to start.
          </p>
          <button className="px-8 py-4 bg-[#E85D04] text-white font-bold text-lg rounded-2xl hover:bg-[#C94D02] transition-colors shadow-lg">
            Start Selling Today
          </button>
        </section>
      </div>
    </div>
  );
}
