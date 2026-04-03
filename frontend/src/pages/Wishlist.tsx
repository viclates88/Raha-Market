import { useWishlistStore } from "../store/useWishlistStore";
import ProductCard from "../components/ProductCard";

export default function WishlistPage() {
  const { items } = useWishlistStore();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">❤️ Wishlist</h1>
      {items.length === 0 ? (
        <p className="text-center text-gray-500 py-10">Wishlist kosong</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {items.map((product) => <ProductCard key={product.product_id} product={product} />)}
        </div>
      )}
    </div>
  );
}