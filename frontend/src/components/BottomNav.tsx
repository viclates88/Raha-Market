import { Home, Search, ShoppingCart, Heart, User } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-50">
      <div className="max-w-xl mx-auto px-6 py-2 flex justify-between items-center">
        <NavLink to="/" className={({ isActive }) => `flex flex-col items-center ${isActive ? "text-orange-500" : "text-gray-500 dark:text-gray-400"}`}>
          <Home size={24} />
          <span className="text-xs mt-1">Beranda</span>
        </NavLink>
        <NavLink to="/explore" className={({ isActive }) => `flex flex-col items-center ${isActive ? "text-orange-500" : "text-gray-500 dark:text-gray-400"}`}>
          <Search size={24} />
          <span className="text-xs mt-1">Cari</span>
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => `flex flex-col items-center ${isActive ? "text-orange-500" : "text-gray-500 dark:text-gray-400"}`}>
          <ShoppingCart size={24} />
          <span className="text-xs mt-1">Keranjang</span>
        </NavLink>
        <NavLink to="/wishlist" className={({ isActive }) => `flex flex-col items-center ${isActive ? "text-orange-500" : "text-gray-500 dark:text-gray-400"}`}>
          <Heart size={24} />
          <span className="text-xs mt-1">Wishlist</span>
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => `flex flex-col items-center ${isActive ? "text-orange-500" : "text-gray-500 dark:text-gray-400"}`}>
          <User size={24} />
          <span className="text-xs mt-1">Profil</span>
        </NavLink>
      </div>
    </nav>
  );
}