import { User, LogOut, CheckCircle } from "lucide-react";

export default function Profile() {
  return (
    <div className="p-4">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-20 h-20 bg-orange-500 rounded-3xl flex items-center justify-center text-4xl text-white">👤</div>
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            Adhitya <CheckCircle className="text-blue-500" />
          </h2>
          <p className="text-gray-500">Muna • Verified Seller</p>
        </div>
      </div>
      <div className="space-y-6">
        <button className="w-full bg-white dark:bg-gray-800 p-5 rounded-3xl flex items-center justify-between text-left">
          <span className="font-semibold">Edit Profil</span>
        </button>
        <button className="w-full bg-white dark:bg-gray-800 p-5 rounded-3xl flex items-center justify-between text-left">
          <span className="font-semibold">Jual Barang</span>
          <span className="text-orange-500">→</span>
        </button>
        <button className="w-full flex items-center justify-center gap-3 bg-red-500 text-white py-5 rounded-3xl font-semibold">
          <LogOut /> Keluar
        </button>
      </div>
    </div>
  );
}