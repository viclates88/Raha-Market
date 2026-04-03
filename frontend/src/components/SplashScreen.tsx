import { ShoppingBag } from "lucide-react";

export default function SplashScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-white/20 backdrop-blur-xl rounded-3xl">
            <ShoppingBag size={80} className="text-white" />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-white tracking-tighter">Raha Market</h1>
        <p className="text-white/70 mt-2">Pasar lokal Muna • Jual cepat, beli aman</p>
        <div className="mt-8 w-8 h-8 border-4 border-white border-t-transparent animate-spin rounded-full mx-auto"></div>
      </div>
    </div>
  );
}