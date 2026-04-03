# Raha-Marke# Raha Market - Pusat Belanja Online Muna

![Raha Market](https://via.placeholder.com/800x400/FF7A00/FFFFFF?text=Raha+Market)

**Pasar Digital Lokal Muna** – Jual beli barang dengan cepat dan aman.

---

## ✨ Fitur Utama

### ✅ Fitur Pengguna
- Login & Register
- Browse & Search barang
- Filter berdasarkan kecamatan
- Keranjang belanja
- Wishlist
- Chat WhatsApp langsung ke penjual
- Dark / Light Mode

### ✅ Fitur Penjual
- Jual barang dengan multi foto (max 5)
- Edit & Hapus barang
- Tandai barang "Laku"
- Nomor WhatsApp sendiri untuk setiap barang
- Profil penjual dengan rating toko

### ✅ Fitur Lain
- Geolocation simulasi (jarak KM)
- Responsive design
- Modern UI dengan Tailwind

---

## 🛠️ Teknologi yang Digunakan

### Backend
- **FastAPI** (Python)
- SQLAlchemy + SQLite
- Pydantic
- JWT Authentication
- CORS support

### Frontend
- **React + TypeScript**
- Vite
- Tailwind CSS
- Zustand (State Management)
- Lucide React (Icons)

---

## 🚀 Cara Menjalankan

### 1. Backend

cd backend
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000

## 2.  frontend

cd frontend
npm install
npm run dev

buka di browser : http://localhost:5173

# catatan penting

backend berjalan di port 8000
frontend berjalan di port 5173
pastikan backend sudah jalan sebelum menjalankan frontend

DEVELOPER
ADHITYABIMA 
proyek ini di buat untuk mendukung ekonomi lokal muna
made with ❤ FOR MUNA
