# KukerEyes Starter Web

Landing page B2B untuk KukerEyes, supplier & distributor kaca optik dan material lensa di Batam. Ditujukan untuk calon pelanggan bisnis seperti produsen lensa, toko optik, laboratorium, dan manufaktur instrumen yang ingin konsultasi kebutuhan material.

## Fitur Utama

- Hero section dengan ringkasan aplikasi material (kacamata, mikroskop, instrumen optik, industri)
- Daftar kategori aplikasi kaca optik (`Applications`)
- Daftar keunggulan pendekatan B2B KukerEyes (`Advantages`)
- Profil singkat perusahaan & lokasi (`About`)
- Alur konsultasi 3 langkah (`Process`)
- Call-to-action konsultasi via WhatsApp (`ContactCta`, juga di header)
- Footer dengan identitas perusahaan

## Tech Stack

- [Astro](https://astro.build) 5 (`output: static`)
- HTML/CSS murni per komponen (`.astro` scoped styles), tanpa framework UI tambahan
- Font Google Fonts: Titillium Web & IBM Plex Mono

## Cara Menjalankan Lokal

Proyek ini tidak memerlukan variabel environment (tidak ada file `.env.example`).

```bash
# install dependency
npm install

# jalankan dev server
npm run dev

# build untuk produksi
npm run build

# preview hasil build
npm run preview
```

## Struktur Folder

```
src/
  components/   # komponen Astro (Header, Hero, Applications, Advantages, About, Process, ContactCta, Footer, Icon)
  pages/        # halaman (index.astro)
  styles/       # global.css
public/
  images/       # aset statis yang disajikan langsung (mis. hero-optical.png)
assets/         # aset sumber tambahan
astro.config.mjs
```

## Deploy

Workflow GitHub Actions `.github/workflows/deploy-demo.yml` otomatis build (`npm run build`) dan deploy isi `dist/` ke **demo.kukerjain.web.id/kukereyes/** setiap push ke branch `main` (atau manual via `workflow_dispatch`).

## Kredit

Dibuat oleh **Ranupane Rimba Argana**, founder [Kukerjain](https://kukerjain.dev).

- https://kukerjain.dev
- https://ranupane.kukerjain.dev
