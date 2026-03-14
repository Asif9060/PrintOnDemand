export interface Artist {
  id: string;
  name: string;
  username: string;
  avatar: string;
  coverImage: string;
  bio: string;
  location: string;
  followers: number;
  productCount: number;
  tags: string[];
  socialLinks: {
    instagram?: string;
    twitter?: string;
    website?: string;
  };
  featured: boolean;
  joinedYear: number;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  artistId: string;
  artistName: string;
  artistAvatar: string;
  category: CategoryId;
  tags: string[];
  description: string;
  image: string;
  thumbnails: string[];
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  sizes: string[];
  colors: ProductColor[];
  availableProducts: AvailableProduct[];
  trending: boolean;
  featured: boolean;
  isNew: boolean;
  createdAt: string;
}

export interface ProductColor {
  name: string;
  hex: string;
}

export interface AvailableProduct {
  type: string;
  price: number;
  icon: string;
}

export type CategoryId =
  | "t-shirts"
  | "hoodies"
  | "stickers"
  | "mugs"
  | "tote-bags"
  | "phone-cases"
  | "posters"
  | "art-prints";

export interface Category {
  id: CategoryId;
  label: string;
  description: string;
  icon: string;
  image: string;
  productCount: number;
  color: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: ProductColor;
}

export interface FilterState {
  category: CategoryId | "all";
  sort: "trending" | "newest" | "price-asc" | "price-desc";
  priceMax: number;
}
