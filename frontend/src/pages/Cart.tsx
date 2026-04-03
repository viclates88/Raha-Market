import { useCartStore } from "../store/useCartStore";
import ProductCard from "../components/ProductCard";

export default function CartPage() {
  const { items, removeFromCart, clearCart } = useCartStore();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">🛒 Keranjang</h1>
      {items.length === 0 ? (
        <p className="text-center text-gray-500 py-10">Keranjang kosong</p>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4">
            {items.map((product) => (
              <div key={product.product_id} className="relative">
                <ProductCard product={product} />
                <button onClick={() => removeFromCart(product.product_id)} className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 text-xs rounded-2xl">Hapus</button>
              </div>
            ))}
          </div>
          <button onClick={clearCart} className="mt-8 w-full bg-red-500 text-white py-4 rounded-3xl font-semibold">Kosongkan Keranjang</button>
        </>
      )}
    </div>
  );
}