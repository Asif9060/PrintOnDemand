"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { getFeaturedArtists } from "@/lib/data/artists";

export default function ArtistSpotlight() {
  const artists = getFeaturedArtists();

  return (
    <section className="py-20 bg-[#FFF3E8] relative overflow-hidden">
      {/* Background decorative text */}
      <div
        className="absolute top-0 left-0 right-0 text-center text-[120px] font-black text-[#3D2B1F]/[0.03] leading-none select-none pointer-events-none overflow-hidden"
        style={{ fontFamily: "var(--font-playfair, serif)" }}
      >
        ARTISTS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-semibold text-[#7209B7] uppercase tracking-widest mb-3">
              Meet the Creators
            </p>
            <h2
              className="text-4xl md:text-5xl font-black text-[#3D2B1F]"
              style={{ fontFamily: "var(--font-playfair, serif)" }}
            >
              Artists in the Spotlight
            </h2>
            <div className="brush-stroke w-32 mt-4" />
          </div>
          <Link
            href="/artists"
            className="hidden sm:flex items-center gap-2 text-[#7209B7] font-semibold hover:gap-3 transition-all"
          >
            All Artists <ArrowRight size={18} />
          </Link>
        </div>

        {/* Artist cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((artist, i) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link href={`/artists/${artist.id}`}>
                <div className="group bg-white rounded-3xl overflow-hidden border border-[#F0DCC8] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  {/* Cover image */}
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={artist.coverImage}
                      alt={`${artist.name}'s cover art`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  {/* Avatar overlapping */}
                  <div className="px-5 pb-5">
                    <div className="-mt-8 mb-3">
                      <img
                        src={artist.avatar}
                        alt={artist.name}
                        className="w-16 h-16 rounded-2xl object-cover border-4 border-white shadow-lg"
                      />
                    </div>

                    <h3 className="font-bold text-[#3D2B1F] text-base leading-tight">
                      {artist.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-[#8B6F5E] mt-1">
                      <MapPin size={11} />
                      <span>{artist.location}</span>
                    </div>

                    <p className="text-xs text-[#8B6F5E] mt-2 line-clamp-2 leading-relaxed">
                      {artist.bio}
                    </p>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#F0DCC8]">
                      <div className="text-center">
                        <div className="text-sm font-bold text-[#3D2B1F]">
                          {artist.productCount}
                        </div>
                        <div className="text-xs text-[#8B6F5E]">designs</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-[#3D2B1F]">
                          {(artist.followers / 1000).toFixed(1)}k
                        </div>
                        <div className="text-xs text-[#8B6F5E]">followers</div>
                      </div>
                      <span className="text-xs font-semibold text-[#7209B7] group-hover:underline">
                        View Shop →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
