---
title: "Dasar-Dasar Information Security (InfoSec) dan Network Security"
description: "Catatan pengantar mengenai konsep keamanan informasi, prinsip dasar (CIA Triad), peran di InfoSec, serta dasar-dasar keamanan jaringan."
category: "Cybersecurity"
tags: [infosec, network-security, penetration-testing, cybersecurity-basics]
status: "learning"
date: 2026-08-10
difficulty: "beginner"
---

# What I learned
Information Security (InfoSec) adalah upaya untuk menjaga informasi dan sistem dari pihak yang tidak memiliki hak akses, termasuk mencegah orang lain melihat, mengubah, dan menghapus data. Tujuannya adalah melindungi data sensitif, menjaga kelangsungan bisnis (business continuity), mematuhi regulasi, menjaga reputasi, dan mendukung transformasi digital yang aman.

## Key Concepts

**1. Struktur Dunia Digital & Tim Keamanan:**
*   **Client:** PC/Laptop untuk akses sumber daya di internet.
*   **Internet:** Area luas jaringan server yang saling terkoneksi.
*   **Servers:** Penyedia layanan/aplikasi untuk tugas tertentu.
*   **Network:** Kumpulan komputer & server yang saling terhubung dan berkomunikasi.
*   **Cloud:** Data center berisi server terhubung untuk perusahaan/individu.
*   **Blue Team:** Tim pertahanan keamanan internal (defensive).
*   **Red Team:** Tim yang mensimulasikan serangan nyata ke perusahaan (offensive).
*   **Purple Team:** Gabungan Blue dan Red team untuk meningkatkan keamanan secara kolaboratif.

**2. Konsep Dasar Keamanan (Security Concepts):**
*   **Vulnerability (Kelemahan):** Celah atau titik lemah dari sistem (contoh: bug, password lemah).
*   **Threat (Ancaman):** Pelaku atau hal yang bisa memanfaatkan celah (contoh: hacker, virus, bencana).
*   **Risk (Risiko):** Potensi kerugian yang terjadi jika ancaman berhasil mengeksploitasi kelemahan. Diukur dari peluang dan dampaknya.

**3. Prinsip InfoSec:**
*   **Confidentiality:** Menjamin data hanya bisa diakses oleh pihak yang berwenang (enkripsi, access control).
*   **Integrity:** Menjaga keakuratan dan keutuhan data agar tidak diubah sembarangan (hashing, digital signature).
*   **Availability:** Memastikan sistem dan data selalu bisa diakses saat dibutuhkan (redundancy, disaster recovery).
*   **Non-repudiation:** Mencegah seseorang menyangkal tindakan yang telah dilakukannya (digital signature, audit log).
*   **Authentication:** Verifikasi identitas user, perangkat, atau proses (password, biometrik, MFA).
*   **Privacy:** Penanganan data sensitif/personal sesuai regulasi (data minimization).

**4. Peran di InfoSec (Roles):**
*   **CISO:** Membuat strategi keamanan secara keseluruhan.
*   **Security Architect:** Mendesain sistem dan jaringan yang aman.
*   **Penetration Tester:** Mencari dan mengeksploitasi celah secara legal/etis (simulasi serangan).
*   **Incident Response Specialist:** Merespons insiden serangan dan berdiskusi untuk perbaikan.
*   **Security Analyst:** Memantau sistem dari ancaman & menganalisis data keamanan.
*   **Compliance Specialist:** Menjaga kepatuhan terhadap regulasi & standar hukum.

**5. Proses InfoSec:**
Risk Assessment -> Security Planning -> Implementation of Security Controls -> Monitoring and Detection -> Incident Response -> Disaster Recovery -> Continuous Improvement.

**6. Keamanan Jaringan (Network Security) & Komponennya:**
Fokus menjaga data dan perangkat di jaringan dari penyusup internal/eksternal. Tanggung jawabnya melibatkan tim teknis (Network Security Team), penguji (Pen Tester), manajemen (CISO/CIO), dan penunjang (Compliance).
*   **Firewalls:** Penghalang yang memfilter lalu lintas jaringan (trusted vs untrusted).
*   **IDS/IPS:** Memantau aktivitas aneh dan memblokir ancaman secara otomatis.
*   **VPN:** Koneksi terenkripsi yang aman dari jaringan publik.
*   **Access Control & Encryption:** Autentikasi dan pengacakan data (in transit/at rest).

## Commands / Examples

**Tools Umum InfoSec:**
*   **SIEM System:** Analisis dan pengumpulan data event keamanan.
*   **Vulnerability Scanners:** Identifikasi kelemahan sistem secara otomatis.

**Tools Esensial untuk Penetration Testing:**
*   `Nmap`: Network scanning & discovery (Mencari perangkat/port terbuka).
*   `Wireshark`: Network protocol analysis (Analisis lalu lintas jaringan/sniffing).
*   `Metasploit`: Exploitation framework (Kerangka kerja untuk eksekusi exploit).
*   `Burp Suite`: Web application security testing (Mencari celah di web app).
*   `John the Ripper`: Password cracking.
*   **OS/Environment yang harus dikuasai:** Linux, Windows, macOS.

## What confused me
*   *(Isi dengan bagian yang masih kurang dipahami, misalnya: Perbedaan mendetail antara IDS dan IPS, atau cara kerja hashing vs encryption)*

## What I need to revisit
*   *(Isi dengan materi yang butuh diulang, misalnya: Cara membaca log di Wireshark, atau simulasi scanning menggunakan Nmap)*

## Practical Exercise
*   *(Isi dengan latihan praktik, misalnya: Menginstal Kali Linux di VirtualBox dan mencoba menjalankan Nmap ke IP lokal)*

## Resources
*   *(Isi dengan link course, buku, atau video referensi)*

## Personal Notes
**Analogi InfoSec yang gampang diingat:**
*   **Data/Informasi** = Harta karun.
*   **Firewalls, Defensive Mechanism, Encryption** = Benteng pertahanan.
*   **Security Protocols & Access Control** = Penjaga gerbang.
*   **Penetration Testers** = Orang yang disewa untuk simulasi nyari titik lemah benteng.
*   **Digital Transformation** = Memperluas bangunan (bikin bangunan makin besar, tapi makin narik perhatian musuh).
*   **Cyber Threats** = Penjahat/Maling.