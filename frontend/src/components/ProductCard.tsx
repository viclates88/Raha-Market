import { Star, MapPin, CheckCircle, Heart } from "lucide-react";
import { useCartStore } from "../store/useCartStore";
import { useWishlistStore } from "../store/useWishlistStore";
import { Product } from "../types";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const addToCart = useCartStore((state) => state.addToCart);
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const isWishlisted = useWishlistStore((state) => state.items.some((item) => item.product_id === product.product_id));

  const handleWhatsApp = () => {
    const phone = "6281234567890"; // ganti dengan nomor penjual nanti
    window.open(`https://wa.me/\( {phone}?text=Halo,%20saya%20tertarik%20dengan%20 \){encodeURIComponent(product.title)}`, "_blank");
  };

  return (
    <div className="modern-card">
      <div className="relative">
        <img
          src={product.images[0] || "https://via.placeholder.com/400x300"}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        {product.status === "laku" && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-2xl font-bold">Laku</div>
        )}
        <button
          onClick={() => toggleWishlist(product)}
          className="absolute top-3 left-3 bg-white dark:bg-gray-800 p-2 rounded-2xl shadow"
        >
          <Heart size={20} className={isWishlisted ? "fill-red-500 text-red-500" : ""} />
        </button>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg line-clamp-2">{product.title}</h3>
            <p className="text-orange-500 font-bold text-xl">Rp {product.price.toLocaleString("id-ID")}</p>
          </div>
          {product.user?.is_verified && <CheckCircle className="text-blue-500" size={24} />}
        </div>

        <div className="flex items-center gap-1 mt-2 text-sm text-gray-500 dark:text-gray-400">
          <MapPin size={16} />
          <span>{product.kecamatan} • {product.distance_km} km</span>
        </div>

        <div className="flex items-center gap-1 mt-3">
          {Array(5).fill(0).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < Math.floor(product.avg_rating || 0) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
            />
          ))}
          <span className="text-xs ml-2 text-gray-500">({product.avg_rating || 0})</span>
        </div>

        <div className="flex gap-2 mt-4">
          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-2xl font-semibold text-sm"
          >
            + Keranjang
          </button>
          <button
            onClick={handleWhatsApp}
            className="flex-1 border border-green-500 text-green-600 dark:text-green-400 py-3 rounded-2xl font-semibold text-sm"
          >
            Chat WA
          </button>
        </div>
      </div>
    </div>
  );
}