import { useEffect, useState } from "react";
import axios from "axios";
import { apiConfig } from "../config/apiConfig";
import ProductCard from "../components/ProductCard";
import { Product } from "../types";
import SkeletonLoader from "../components/SkeletonLoader";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${apiConfig.products}/nearby?lat=-4.5&lon=121.5`) // contoh koordinat Muna
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">🏠 Raha Market</h1>
      {loading ? (
        <SkeletonLoader count={4} />
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}