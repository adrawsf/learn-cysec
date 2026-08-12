---
title: "Dasar-Dasar Application Security (AppSec)"
description: "Catatan mengenai konsep Application Security, Security by Design, dan pembagian tanggung jawab tim dalam mengamankan aplikasi."
category: "Cybersecurity"
tags: [appsec, cybersecurity, security-by-design, penetration-testing]
status: "learning"
date: 2026-08-11
difficulty: "beginner"
---

# What I learned

Application Security (AppSec) adalah upaya untuk melindungi aplikasi dari ancaman eksternal mulai dari awal pembuatan hingga akhir siklus hidupnya. Tujuan utamanya adalah menjaga kerahasiaan (_Confidentiality_), integritas (_Integrity_), dan ketersediaan (_Availability_) data, atau yang dikenal dengan **CIA Triad**.

## Key Concepts

**1. Fase Keamanan Aplikasi:**

- **Develop:** Meliputi implementasi autentikasi, penulisan kode yang aman (tanpa celah), dan enkripsi data.
- **Testing:** Melakukan _penetration testing_ (pentest), mengecek _bug_ pada kode, dan menguji keamanan data.
- **Monitoring:** Memantau ancaman secara _real-time_, melakukan _patching_, dan _update_ sistem secara berkala.

**2. Security by Design:**
Konsep di mana keamanan **tidak boleh dipikirkan di akhir**, melainkan harus dibangun sejak awal aplikasi dirancang.

- **Threat Modeling:** Membayangkan dan memetakan cara _hacker_ membobol aplikasi sejak fase awal.
- **Secure Code Reviews:** Mengecek ulang kode untuk memastikan kelayakan dan keamanannya.
- **Infrastruktur Aman:** Memastikan fondasi seperti _server_ dan _database_ sudah aman.
- **Authentication & Authorization:** Memastikan hanya orang yang tepat yang bisa masuk (Autentikasi), dan mereka hanya memiliki akses ke ruangan/data yang memang diizinkan (Otorisasi).

**3. Tanggung Jawab Tim dalam AppSec:**

- **Developer:** Menulis kode aplikasi secara aman.
- **Security Architect:** Mendesain struktur keamanan secara keseluruhan.
- **IT Operational:** Menjaga keamanan lingkungan operasional/produksi tempat aplikasi berjalan.
- **CISO / AppSec Manager:** Membuat kebijakan keamanan, memastikan kepatuhan terhadap regulasi, dan memimpin strategi perlindungan.
- **Penetration Tester:** Menguji dan meretas aplikasi secara legal menggunakan berbagai alat dan teknik (analisis statis dan dinamis) untuk menemukan celah keamanan sebelum diretas oleh pihak tidak bertanggung jawab.

## Personal Notes

**Tantangan Terbesar di AppSec:**
Sangat susah untuk menyeimbangkan antara **keamanan** dan **kecepatan rilis aplikasi**. Terkadang perusahaan terburu-buru merilis aplikasi. Jika terlalu mengutamakan kecepatan dan melompati prosedur keamanan, risikonya sangat fatal: kebocoran data, kerugian finansial, hingga hancurnya reputasi perusahaan.
