---
title: "Dasar-Dasar Operational Security (OpSec), Disaster Recovery, dan Business Continuity"
description: "Catatan mengenai perlindungan aset data operasional sehari-hari serta strategi pemulihan dan kelangsungan bisnis saat terjadi krisis."
category: "Cybersecurity"
tags: [opsec, disaster-recovery, business-continuity, cybersecurity]
status: "learning"
date: 2026-08-12
difficulty: "beginner"
---

# What I learned

Saya mempelajari bagaimana perusahaan melindungi diri baik dalam kondisi normal (sehari-hari) melalui **Operational Security (OpSec)**, maupun dalam kondisi krisis atau bencana melalui **Disaster Recovery (DR)** dan **Business Continuity (BC)**. Tujuannya adalah memastikan data tetap aman, rahasia, utuh, dan bisnis tetap bisa beroperasi bagaimanapun keadaannya.

## Key Concepts

**1. Operational Security (OpSec)**
Strategi dan proses untuk melindungi aset data organisasi dalam operasional sehari-hari agar informasi sensitif tetap rahasia, utuh, dan hanya bisa diakses oleh pihak yang berhak.

- **Assets Identification:** Menentukan barang/data yang paling berharga dan butuh perlindungan ekstra.
- **Threat Identification:** Memikirkan hal buruk apa yang bisa terjadi.
- **Vulnerability Identification:** Menemukan titik lemah dan mengambil tindakan pencegahan.
- **Access Control:** Menentukan siapa saja yang boleh masuk ke ruangan/sistem tertentu.
- **Monitoring:** Terus mengawasi selama operasional berjalan dan menyesuaikan strategi jika ada ancaman baru.
- **Asset Management:** Mendata seluruh aset yang dimiliki, lokasi, dan tingkat kepentingannya.
- **Change Management:** Memastikan setiap pembaruan/perubahan pada sistem terkontrol agar tidak ada celah keamanan baru.
- **Security Awareness Training:** Mengedukasi seluruh karyawan mengenai serangan siber (cyberattack).

**Tanggung Jawab OpSec:**

- **Utama:** Tim InfoSec yang dipimpin oleh CISO, bekerja sama dengan departemen IT, HR, dan Legal.
- **Semua Orang:** Pada dasarnya, OpSec adalah tanggung jawab semua lapisan karyawan.
- **Penetration Tester:** Menguji pertahanan internal/eksternal, mencoba menembus kontrol akses, mencari kesalahan konfigurasi, atau menggunakan trik psikologis (_social engineering_) untuk melihat seberapa kuat keamanan sebelum diserang _hacker_ sungguhan.

**2. Disaster Recovery (DR) & Business Continuity (BC)**
Strategi untuk memastikan perusahaan tetap bertahan dan beroperasi saat terjadi gangguan besar (bencana alam, serangan siber, kerusakan sistem). Ini adalah penentu apakah perusahaan akan selamat dari krisis atau hancur.

- **Disaster Recovery (DR):** Fokus teknis memulihkan sistem dan data kritis secepat mungkin agar kerugian dan _downtime_ bisa ditekan seminimal mungkin.
- **Business Continuity (BC):** Rencana yang lebih luas agar operasional bisnis tetap berjalan apa pun yang terjadi.

**Tanggung Jawab & Pengujian DR/BC:**

- **Utama:** Dipimpin oleh _Business Continuity Manager_ yang bekerja sama dengan tim IT, operasional, dan pimpinan perusahaan (menilai risiko, menentukan fungsi bisnis kritis, dan membuat target waktu pemulihan seperti RTO dan RPO).
- **Penetration Tester:** Membantu mencari celah keamanan yang berpotensi merusak rencana DR/BC, serta menguji apakah prosedur pemulihannya benar-benar aman dari serangan.
- **Testing:** Dilakukan secara rutin, mulai dari simulasi diskusi (_tabletop exercises_) hingga simulasi skala penuh.

## Commands / Examples

- **Social Engineering:** Contoh teknik yang digunakan _Penetration Tester_ untuk menguji OpSec (misalnya, mengirim email _phishing_ palsu ke karyawan).
- **RTO (Recovery Time Objective) & RPO (Recovery Point Objective):** Metrik yang digunakan dalam menentukan target pemulihan sistem (berapa lama waktu pemulihan yang ditoleransi dan berapa banyak data yang boleh hilang).

## Personal Notes

- **OpSec** = Pengamanan aktivitas operasional sehari-hari.
- **DR** = Payung darurat dan genset saat tiba-tiba hujan badai (fokus ke teknis/alat).
- **BC** = Rencana memindahkan acara ke dalam ruangan agar _show must go on_ (fokus ke operasional keseluruhan).
