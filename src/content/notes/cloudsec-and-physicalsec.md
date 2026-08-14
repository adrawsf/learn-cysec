---
title: "Dasar-Dasar Cloud Security dan Physical Security"
description: "Catatan mengenai perlindungan data di lingkungan cloud menggunakan Shared Responsibility Model dan konsep pertahanan fisik (Defense in Depth)."
category: "Cybersecurity"
tags: [cloud-security, physical-security, defense-in-depth, cybersecurity]
status: "learning"
date: 2026-08-14
difficulty: "beginner"
---

# What I learned

Saya mempelajari bahwa keamanan informasi tidak hanya sebatas melindungi sistem secara digital (_Cloud Security_), tetapi juga wajib melindungi infrastruktur fisik tempat data dan sistem tersebut berada (_Physical Security_). Keduanya harus berjalan berdampingan agar pertahanan benar-benar solid.

## Key Concepts

**1. Cloud Security (Keamanan Cloud)**
Keamanan cloud bukanlah proses sekali jalan, melainkan butuh _update_, penambalan celah (_patching_), dan pemantauan sistem secara berkelanjutan.

- **Shared Responsibility Model (Tanggung Jawab Bersama):**
  - _Cloud Provider:_ Mengamankan infrastruktur secara keseluruhan.
  - _Customer/Pengguna:_ Mengamankan "unit" atau data miliknya sendiri.
- **Ancaman Utama:**
  - _Data Breach:_ Pencurian data oleh pihak tidak berwenang.
  - _Insecure APIs:_ Celah pada sistem akses layanan.
  - _Misconfigured Cloud Storage:_ Salah pengaturan yang mengekspos data ke publik.
  - _Account Hijacking:_ Pengambilalihan akun pengguna.
- **4 Fokus Utama Cloud Security:**
  - _Data Protection:_ Melindungi data menggunakan enkripsi.
  - _Identity and Access Management (IAM):_ Mengatur hak akses agar hanya orang sah yang bisa masuk menggunakan kredensial/kunci khusus.
  - _Network Security:_ Mengamankan lalu lintas data menggunakan _Firewall_ dan VPN.
  - _Compliance and Governance:_ Mematuhi aturan hukum dan standar industri terkait pengelolaan data.

**2. Physical Security (Keamanan Fisik)**
Upaya melindungi perangkat keras dan fasilitas (komputer, _server_, dokumen cetak) dari akses fisik secara langsung oleh pihak tidak sah untuk mencegah pencurian, kerusakan, dan kebocoran data.

- **Defense in Depth (Pertahanan Berlapis):**
  - _Deter (Mencegah):_ Contoh: Pagar berduri agar maling enggan masuk.
  - _Detect (Mendeteksi):_ Contoh: Sistem kontrol akses atau alarm penyusupan.
  - _Delay (Menghambat):_ Contoh: Pintu berlapis atau brankas.
  - _Respond (Merespons):_ Contoh: Satpam yang sigap menangani penyusupan.
- **Alasan Physical Security Penting:**
  Melindungi aset mahal/kritis, menjaga keselamatan fisik karyawan/pengunjung, mencegah operasional terhenti akibat perusakan, dan memenuhi standar regulasi data.

**3. Tanggung Jawab & Pengujian**

- **Tanggung Jawab Cloud Security:** Penyedia _cloud_ (infrastruktur), _Customer_ (data & akses), Tim Keamanan (strategi & risiko), dan _Penetration Tester_ (simulasi peretasan).
- **Tanggung Jawab Physical Security:** Tim Keamanan Fisik di bawah CSO/CISO (pengelolaan menyeluruh), _Facilities Management_ (perawatan gedung & alat keamanan), Tim IT Security (keamanan _hardware_ & jaringan), dan Seluruh Karyawan (kepatuhan aturan seperti tidak meminjamkan kartu akses).
- **Pengujian (Red Teamers):** _Penetration tester_ khusus yang mensimulasikan pembobolan fisik secara nyata, termasuk menggunakan manipulasi psikologis (_social engineering_) untuk mengelabui karyawan agar membukakan pintu.

## Commands / Examples

- **IAM (Identity and Access Management):** Implementasi seperti penggunaan _Multi-Factor Authentication_ (MFA) di akun AWS/Google Cloud.
- **Social Engineering (Physical):** Seseorang menyamar menjadi kurir paket atau teknisi internet agar dibukakan pintu ruang _server_ oleh resepsionis.

## Personal Notes

**Pelajaran Paling Penting:**
Sistem pertahanan _cyber_ (firewall, enkripsi, antivirus) sebagus apa pun **TIDAK AKAN ADA GUNANYA** kalau seorang peretas bisa melenggang masuk secara fisik dan mencolokkan _flashdisk_ berisi _malware_ langsung ke _server_ utama. Oleh karena itu, keamanan fisik dan siber wajib berjalan berdampingan!
