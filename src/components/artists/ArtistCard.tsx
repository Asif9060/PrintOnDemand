import Link from "next/link";
import type { Artist } from "@/lib/types";
import { MapPin, Package, Users } from "lucide-react";

interface ArtistCardProps {
  artist: Artist;
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <Link href={`/artists/${artist.id}`}>
      <div className="group bg-white rounded-3xl overflow-hidden border border-[#F0DCC8] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        {/* Cover */}
        <div className="relative h-40 overflow-hidden">
          <img
            src={artist.coverImage}
            alt={`${artist.name}'s workshop`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          {artist.featured && (
            <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#F48C06] text-white text-xs font-bold rounded-full">
              Featured
            </div>
          )}
        </div>

        {/* Body */}
        <div className="relative px-6 pb-6">
          {/* Avatar */}
          <div className="-mt-8 mb-4">
            <img
              src={artist.avatar}
              alt={artist.name}
              className="w-16 h-16 rounded-2xl object-cover border-4 border-white shadow-xl"
            />
          </div>

          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="font-bold text-[#3D2B1F] text-lg leading-tight">{artist.name}</h3>
              <span className="text-xs text-[#8B6F5E]">@{artist.username}</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-xs text-[#8B6F5E] mb-3">
            <MapPin size={12} />
            <span>{artist.location}</span>
          </div>

          <p className="text-sm text-[#8B6F5E] leading-relaxed line-clamp-2 mb-4">
            {artist.bio}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {artist.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-[#FFF3E8] text-[#8B6F5E] text-xs rounded-full capitalize"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between pt-4 border-t border-[#F0DCC8]">
            <div className="flex items-center gap-1.5 text-sm text-[#8B6F5E]">
              <Package size={14} />
              <span className="font-bold text-[#3D2B1F]">{artist.productCount}</span>
              <span>designs</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-[#8B6F5E]">
              <Users size={14} />
              <span className="font-bold text-[#3D2B1F]">
                {(artist.followers / 1000).toFixed(1)}k
              </span>
              <span>followers</span>
            </div>
            <span className="text-xs font-semibold text-[#7209B7] group-hover:underline">
              View Shop →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
