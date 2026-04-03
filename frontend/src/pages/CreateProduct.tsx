import { useState } from "react";
import axios from "axios";
import { apiConfig } from "../config/apiConfig";
import MultiPhotoUpload from "../components/MultiPhotoUpload";

export default function CreateProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [kecamatan, setKecamatan] = useState("Muna");
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("kecamatan", kecamatan);
    formData.append("latitude", "-4.5");
    formData.append("longitude", "121.5");
    files.forEach((file) => formData.append("files", file));

    await axios.post(`${apiConfig.products}/`, formData, { headers: { "Content-Type": "multipart/form-data" } });
    alert("Produk berhasil di-post!");
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">➕ Jual Barang Baru</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="text" placeholder="Judul barang" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-4 rounded-3xl" required />
        <input type="number" placeholder="Harga (Rp)" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full p-4 rounded-3xl" required />
        <textarea placeholder="Deskripsi" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-4 rounded-3xl h-32" />
        <select value={kecamatan} onChange={(e) => setKecamatan(e.target.value)} className="w-full p-4 rounded-3xl">
          <option value="Muna">Muna</option>
          <option value="Muna Barat">Muna Barat</option>
        </select>
        <MultiPhotoUpload onImagesChange={setFiles} />
        <button type="submit" className="w-full bg-orange-500 text-white py-5 rounded-3xl font-bold text-lg">Post ke Raha Market</button>
      </form>
    </div>
  );
}