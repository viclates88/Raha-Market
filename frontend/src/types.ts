export interface Product {
  product_id: number;
  title: string;
  description: string;
  price: number;
  status: "tersedia" | "laku";
  kecamatan: string;
  latitude: number;
  longitude: number;
  images: string[];
  distance_km?: number;
  avg_rating?: number;
  user?: {
    is_verified: boolean;
  };
}