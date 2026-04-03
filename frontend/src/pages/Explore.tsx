import { useEffect, useState } from "react";
import axios from "axios";
import { apiConfig } from "../config/apiConfig";
import ProductCard from "../components/ProductCard";
import { Product } from "../types";
import SkeletonLoader from "../components/SkeletonLoader";

export default function Explore() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [kecamatanFilter, setKecamatanFilter] = useState("");

  useEffect(() => {
    axios.get(`\( {apiConfig.products}?search= \){search}&kecamatan=${kecamatanFilter}`)
      .then((res) => { setProducts(res.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [search, kecamatanFilter]);

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Cari barang lokal Muna..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 rounded-3xl bg-white dark:bg-gray-800 mb-4"
      />
      <select value={kecamatanFilter} onChange={(e) => setKecamatanFilter(e.target.value)} className="w-full p-4 rounded-3xl bg-white dark:bg-gray-800 mb-6">
        <option value="">Semua Kecamatan</option>
        <option value="Muna">Muna</option>
        <option value="Muna Barat">Muna Barat</option>
        <option value="Muna Tengah">Muna Tengah</option>
      </select>
      {loading ? <SkeletonLoader /> : (
        <div className="grid grid-cols-2 gap-4">
          {products.map((p) => <ProductCard key={p.product_id} product={p} />)}
        </div>
      )}
    </div>
  );
}