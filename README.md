
# JER.CO - Football Jersey Store (Frontend Demo)

Selamat datang di repositori frontend untuk JER.CO, sebuah UI demo untuk toko online yang khusus menjual jersey sepak bola. Proyek ini dibangun menggunakan React dan Tailwind CSS dengan fokus pada pengalaman pengguna yang bersih dan modern.

## 🚀 Fitur Utama

- **Otentikasi Pengguna & Admin:** Sistem login terpisah untuk pelanggan dan administrator.
- **Navigasi & Pencarian Produk:** Pengguna dapat mencari produk berdasarkan nama atau merek dengan saran pencarian *real-time*.
- **Katalog Produk:** Halaman untuk melihat semua produk dengan filter berdasarkan merek, harga, dan sortir.
- **Detail Produk:** Halaman detail untuk setiap jersey, lengkap dengan deskripsi, gambar, dan produk terkait.
- **Keranjang Belanja:** Fungsionalitas penuh untuk menambah, mengubah kuantitas, dan menghapus item dari keranjang.
- **Proses Checkout:** Alur checkout yang sederhana, dari pengisian alamat hingga konfirmasi pesanan.
- **Profil Pengguna:** Halaman di mana pengguna dapat melihat riwayat pesanan mereka.
- **Panel Admin:** Dashboard khusus untuk admin guna mengelola produk (CRUD), melihat pesanan, dan laporan penjualan.
- **Desain Responsif:** Tampilan yang optimal di berbagai perangkat, dari desktop hingga mobile.

## 🛠️ Teknologi yang Digunakan

- **React:** Library JavaScript untuk membangun antarmuka pengguna.
- **React Router:** Untuk routing sisi klien dan navigasi halaman.
- **TypeScript:** Menambahkan tipe statis ke JavaScript untuk meningkatkan skalabilitas dan maintainabilitas.
- **Tailwind CSS:** Framework CSS utility-first untuk desain yang cepat dan responsif.
- **Lucide Icons:** Pustaka ikon yang indah dan konsisten.
- **Tanpa Build Step:** Proyek ini menggunakan `importmap` dan modul ES6 langsung di browser, sehingga tidak memerlukan proses build (seperti Vite atau Webpack) untuk pengembangan.

## 🏃‍♂️ Cara Menjalankan Proyek Secara Lokal

Karena proyek ini tidak memiliki dependensi Node.js (`node_modules`), Anda tidak perlu menjalankan `npm install`. Anda hanya memerlukan server web lokal sederhana untuk menyajikan file-file statis.

### Prasyarat

- Web browser modern (Chrome, Firefox, Edge).
- (Opsional, tapi direkomendasikan) Node.js terinstal untuk menggunakan `npx`.

### Menjalankan dengan `npx serve` (Cara Mudah)

1.  **Clone repositori ini:**
    ```bash
    git clone https://github.com/NAMA_USER_ANDA/NAMA_REPO_ANDA.git
    cd NAMA_REPO_ANDA
    ```

2.  **Jalankan server lokal:**
    Buka terminal di dalam folder proyek dan jalankan perintah berikut. Perintah ini akan mengunduh dan menjalankan paket `serve` sementara tanpa menginstalnya secara global.
    ```bash
    npx serve
    ```

3.  **Buka di Browser:**
    Terminal akan menampilkan URL lokal tempat aplikasi berjalan, biasanya `http://localhost:3000`. Buka alamat tersebut di browser Anda.

### Alternatif: Menjalankan dengan Python

Jika Anda memiliki Python terinstal, Anda bisa menggunakan server HTTP bawaannya.

1.  Buka terminal di dalam folder proyek.
2.  Jalankan perintah berikut (untuk Python 3):
    ```bash
    python -m http.server
    ```
3.  Buka browser dan akses `http://localhost:8000`.

## 部署 (Deployment)

Proyek ini dapat dengan mudah di-deploy ke platform hosting situs statis seperti:

- **Vercel:** Sangat direkomendasikan. Cukup hubungkan repositori GitHub Anda, dan Vercel akan otomatis men-deploy-nya tanpa perlu konfigurasi.
- **Netlify:** Alternatif yang bagus untuk Vercel dengan proses yang serupa.
- **GitHub Pages:** Pilihan lain yang terintegrasi langsung dengan repositori Anda.
