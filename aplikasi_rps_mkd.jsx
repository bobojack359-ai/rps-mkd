import React, { useMemo, useState } from "react";

const CPL_BARU = [
  {
    kode: "CPL 1",
    teks: "Mampu menunjukkan sikap religius, etis, berintegritas, bertanggung jawab, taat hukum, menghargai keberagaman, memiliki kepekaan sosial, serta menjunjung nilai budaya lokal, good governance, akuntabilitas, transparansi, dan keberlanjutan dalam pengelolaan keuangan daerah.",
  },
  {
    kode: "CPL 2",
    teks: "Mampu menguasai teori, konsep, regulasi, dan praktik lanjutan dalam bidang keuangan negara dan daerah, desentralisasi fiskal, akuntansi pemerintahan, pelaporan keuangan daerah, pengelolaan pendapatan dan belanja daerah, serta analisis kinerja fiskal daerah.",
  },
  {
    kode: "CPL 3",
    teks: "Mampu menguasai dan menerapkan konsep perencanaan pembangunan daerah, penganggaran berbasis kinerja, manajemen strategik pemerintahan daerah, manajemen proyek publik, dan analisis ekonomi pembangunan daerah berbasis data.",
  },
  {
    kode: "CPL 4",
    teks: "Mampu menguasai dan menerapkan konsep audit sektor publik, pemeriksaan keuangan pemerintah daerah, sistem pengendalian intern, manajemen risiko, audit kinerja, audit kepatuhan, SAKIP, serta pencegahan penyimpangan dalam tata kelola pemerintahan daerah.",
  },
  {
    kode: "CPL 5",
    teks: "Mampu menguasai dan menerapkan konsep manajemen aset daerah, meliputi perencanaan kebutuhan, pencatatan, inventarisasi, penggunaan, pemanfaatan, pengamanan, penilaian, pemindahtanganan, penghapusan, valuasi, dan optimalisasi aset daerah untuk peningkatan nilai manfaat dan PAD.",
  },
  {
    kode: "CPL 6",
    teks: "Mampu merancang dan melaksanakan penelitian kualitatif, kuantitatif, atau mixed-method, mengolah dan menafsirkan data menggunakan perangkat analisis yang relevan, serta menghasilkan karya ilmiah yang memenuhi etika akademik dan layak dipublikasikan.",
  },
  {
    kode: "CPL 7",
    teks: "Mampu berpikir logis, kritis, sistematis, inovatif, komunikatif, dan kolaboratif dalam menyusun laporan akademik, laporan kebijakan, analisis keuangan, rekomendasi program, serta memanfaatkan teknologi informasi dan data digital dalam penyelesaian masalah sektor publik.",
  },
  {
    kode: "CPL 8",
    teks: "Mampu merumuskan alternatif kebijakan dan mengambil keputusan strategis sektor publik berbasis data, regulasi, risiko, kinerja, implikasi fiskal, sosial budaya, lingkungan, dan kebutuhan pembangunan daerah, khususnya dalam konteks Papua.",
  },
];

const PROFIL_LULUSAN = [
  ["PL1", "Analis Keuangan Daerah", "Menganalisis APBD, pendapatan, belanja, kapasitas fiskal, kinerja anggaran, dan rekomendasi kebijakan berbasis data."],
  ["PL2", "Perencana dan Analis Kebijakan Pembangunan Daerah", "Menyusun, menganalisis, dan mengevaluasi RPJMD, RKPD, Renstra, Renja, KUA-PPAS, APBD, dan kebijakan pembangunan daerah."],
  ["PL3", "Auditor Pemerintah / Pengawas Internal", "Melaksanakan audit keuangan, audit kinerja, audit kepatuhan, penilaian SPIP, manajemen risiko, dan tindak lanjut rekomendasi pengawasan."],
  ["PL4", "Manajer Aset Daerah", "Mengelola BMD dari perencanaan, inventarisasi, penggunaan, pemanfaatan, penilaian, pemindahtanganan, penghapusan, hingga optimalisasi aset."],
  ["PL5", "Pengambil Keputusan Strategis di Sektor Publik", "Merumuskan keputusan strategis berbasis data, risiko, kinerja, akuntabilitas, transparansi, keberlanjutan, dan nilai budaya lokal."],
];

const BAHAN_KAJIAN = [
  ["BK1", "Keuangan Negara dan Daerah", "Desentralisasi fiskal, hubungan keuangan pusat-daerah, APBN/APBD, TKD, PAD, kapasitas fiskal, dan kebijakan fiskal daerah."],
  ["BK2", "Akuntansi dan Pelaporan Pemerintah Daerah", "SAP, sistem akuntansi pemerintah daerah, pencatatan transaksi, penyusunan LKPD, analisis laporan keuangan, dan kualitas pelaporan."],
  ["BK3", "Perencanaan dan Penganggaran Daerah", "RPJMD, RKPD, Renstra, Renja, KUA-PPAS, APBD, penganggaran berbasis kinerja, prioritas pembangunan, dan sinkronisasi dokumen perencanaan."],
  ["BK4", "Manajemen Aset Daerah", "Barang milik daerah, inventarisasi, penggunaan, pemanfaatan, pengamanan, penilaian, penghapusan, dan optimalisasi aset."],
  ["BK5", "Audit, Pengawasan, dan Pengendalian", "Audit keuangan, audit kinerja, audit kepatuhan, SPIP, manajemen risiko, SAKIP, pencegahan fraud, dan tindak lanjut hasil pemeriksaan."],
  ["BK6", "Analisis Ekonomi dan Kebijakan Pembangunan Daerah", "PDRB, pertumbuhan ekonomi, ketimpangan, sektor unggulan, kemiskinan, belanja publik, analisis kebijakan, dan pembangunan berkelanjutan."],
  ["BK7", "Manajemen Pemerintahan, Strategik, dan Proyek Publik", "Reformasi birokrasi, pelayanan publik, organisasi pemerintah daerah, strategi sektor publik, manajemen proyek, WBS, Gantt Chart, biaya, waktu, dan risiko."],
  ["BK8", "Metode Penelitian dan Analisis Data", "Metode kualitatif, kuantitatif, mixed-method, statistik, SEM-PLS, SPSS, coding kualitatif, triangulasi, etika riset, proposal, tesis, dan publikasi ilmiah."],
  ["BK9", "Konteks Papua, Budaya, dan Keberlanjutan", "Karakteristik sosial budaya Papua, tata kelola wilayah khusus, afirmasi, keberlanjutan lingkungan, pembangunan inklusif, dan pelayanan publik di wilayah geografis menantang."],
];

const COURSES = [
  {
    kode: "MKD250101",
    nama: "Akuntansi Pemerintah Daerah",
    sks: 3,
    semester: 1,
    sifat: "Wajib",
    cpl: ["CPL 1", "CPL 2", "CPL 4", "CPL 7", "CPL 8"],
    cpmk: "Menganalisis transaksi, sistem akuntansi, dan laporan keuangan pemerintah daerah sesuai SAP serta menilai implikasinya terhadap akuntabilitas.",
    deskripsi: "Mata kuliah ini membahas konsep, prinsip, dan praktik penyusunan laporan keuangan pemerintah daerah sesuai Standar Akuntansi Pemerintahan. Pokok bahasan meliputi basis akuntansi, sistem akuntansi pemerintah daerah, pencatatan transaksi keuangan daerah, penyusunan Neraca, LRA, LO, LPE, serta analisis kualitas LKPD.",
    pokok: "SAP, siklus akuntansi pemda, LKPD, analisis laporan.",
    metode: "Studi kasus, latihan transaksi, telaah LKPD.",
    bukti: "Analisis LKPD dan laporan kasus.",
    regulasi: "PP 71/2010 tentang SAP; PP 12/2019; Permendagri 77/2020",
  },
  {
    kode: "MKD250102",
    nama: "Keuangan Negara dan Daerah",
    sks: 3,
    semester: 1,
    sifat: "Wajib",
    cpl: ["CPL 1", "CPL 2", "CPL 3", "CPL 7", "CPL 8"],
    cpmk: "Menganalisis sistem keuangan negara dan daerah, APBD, PAD, transfer ke daerah, dan kebijakan fiskal daerah.",
    deskripsi: "Mata kuliah ini membahas kerangka hukum dan sistem keuangan negara serta hubungan keuangan pusat dan daerah, termasuk APBN, APBD, TKD, PAD, desentralisasi fiskal, kapasitas fiskal, dan tantangan keuangan daerah di Papua.",
    pokok: "APBN/APBD, TKD, PAD, desentralisasi fiskal, kapasitas fiskal.",
    metode: "Diskusi regulasi, analisis APBD, policy brief.",
    bukti: "Policy brief fiskal daerah.",
    regulasi: "UU 1/2022 tentang HKPD; PP 12/2019; Permendagri 77/2020",
  },
  {
    kode: "MKD250103",
    nama: "Manajemen Pemerintah Daerah",
    sks: 3,
    semester: 1,
    sifat: "Wajib",
    cpl: ["CPL 1", "CPL 3", "CPL 7", "CPL 8"],
    cpmk: "Mengevaluasi fungsi manajemen, tata kelola, pelayanan publik, dan reformasi birokrasi pemerintah daerah.",
    deskripsi: "Mata kuliah ini mengulas fungsi manajemen dalam konteks pemerintahan daerah, reformasi birokrasi, pelayanan publik, hubungan pusat-daerah, implementasi otonomi daerah, dan dinamika governance di Papua.",
    pokok: "Otonomi daerah, governance, pelayanan publik, reformasi birokrasi.",
    metode: "Case-based learning dan diskusi kelompok.",
    bukti: "Laporan analisis organisasi pemda.",
    regulasi: "UU 23/2014; UU 2/2021; regulasi tata kelola pemerintahan daerah yang berlaku",
  },
  {
    kode: "MKD250104",
    nama: "Analisis Ekonomi Pembangunan Daerah",
    sks: 3,
    semester: 1,
    sifat: "Wajib",
    cpl: ["CPL 1", "CPL 2", "CPL 3", "CPL 6", "CPL 7", "CPL 8"],
    cpmk: "Menganalisis indikator ekonomi pembangunan daerah dan merumuskan rekomendasi kebijakan pembangunan berbasis data.",
    deskripsi: "Mata kuliah ini mengkaji teori dan alat analisis pembangunan daerah, termasuk PDRB, pertumbuhan ekonomi, ketimpangan, kemiskinan, peran fiskal daerah, LQ, shift-share, dan input-output.",
    pokok: "PDRB, LQ, shift-share, ketimpangan, kemiskinan.",
    metode: "Praktik analisis data dan studi kasus.",
    bukti: "Output analisis ekonomi daerah.",
    regulasi: "Regulasi perencanaan pembangunan daerah; data BPS; dokumen RPJMD/RKPD",
  },
  {
    kode: "MKD250105",
    nama: "Metode Penelitian",
    sks: 3,
    semester: 1,
    sifat: "Wajib",
    cpl: ["CPL 1", "CPL 6", "CPL 7", "CPL 8"],
    cpmk: "Menyusun rancangan penelitian, rumusan masalah, kerangka teori, metode, dan desain analisis data untuk proposal tesis.",
    deskripsi: "Mata kuliah ini membekali mahasiswa dengan pemahaman metode penelitian kuantitatif, kualitatif, dan mixed-method untuk riset sektor publik, keuangan daerah, audit, aset, dan kebijakan fiskal.",
    pokok: "Desain riset, variabel, instrumen, sampling, etika, proposal.",
    metode: "Research-based learning dan review artikel.",
    bukti: "Draft proposal/mini proposal.",
    regulasi: "UU 12/2012; Perpres 8/2012; Permendikti Saintek 39/2025; Peraturan Akademik Uncen",
  },
  {
    kode: "MKD250201",
    nama: "Perencanaan dan Penganggaran Daerah",
    sks: 3,
    semester: 2,
    sifat: "Wajib",
    cpl: ["CPL 1", "CPL 2", "CPL 3", "CPL 7", "CPL 8"],
    cpmk: "Menyusun dan mengevaluasi dokumen perencanaan dan penganggaran daerah secara konsisten dan berbasis kinerja.",
    deskripsi: "Mata kuliah ini menekankan proses penyusunan RPJMD, RKPD, Renstra, Renja, KUA-PPAS, dan APBD; penganggaran berbasis kinerja; serta sinkronisasi perencanaan dan penganggaran.",
    pokok: "RPJMD, RKPD, Renstra, Renja, KUA-PPAS, APBD.",
    metode: "Simulasi penyusunan dokumen.",
    bukti: "Rancangan dokumen perencanaan-penganggaran.",
    regulasi: "PP 12/2019; Permendagri 77/2020; regulasi perencanaan pembangunan daerah yang berlaku",
  },
  {
    kode: "MKD250202",
    nama: "Akuntansi Manajemen Pemerintah Daerah",
    sks: 3,
    semester: 2,
    sifat: "Wajib",
    cpl: ["CPL 1", "CPL 2", "CPL 3", "CPL 7", "CPL 8"],
    cpmk: "Menganalisis efisiensi belanja, biaya-manfaat, value for money, dan informasi akuntansi manajemen untuk pengambilan keputusan.",
    deskripsi: "Mata kuliah ini membahas penerapan akuntansi manajemen untuk meningkatkan efisiensi, efektivitas, dan kinerja pemerintah daerah melalui costing, cost-benefit analysis, value for money, dan balanced scorecard sektor publik.",
    pokok: "Costing, value for money, cost-benefit, BSC sektor publik.",
    metode: "Latihan perhitungan dan analisis kasus.",
    bukti: "Laporan efisiensi belanja.",
    regulasi: "PP 12/2019; Permendagri 77/2020; regulasi kinerja dan akuntabilitas sektor publik",
  },
  {
    kode: "MKD250203",
    nama: "Manajemen Aset Pemerintah Daerah",
    sks: 3,
    semester: 2,
    sifat: "Wajib",
    cpl: ["CPL 1", "CPL 2", "CPL 4", "CPL 5", "CPL 7", "CPL 8"],
    cpmk: "Merancang strategi pengelolaan, valuasi, pemanfaatan, pengamanan, dan optimalisasi aset daerah untuk peningkatan manfaat dan PAD.",
    deskripsi: "Mata kuliah ini mengulas pengelolaan barang milik daerah mulai dari perencanaan kebutuhan, penggunaan, pemanfaatan, pengamanan, penilaian, pemindahtanganan, hingga penghapusan dan optimalisasi aset.",
    pokok: "BMD, inventarisasi, pemanfaatan, penilaian, penghapusan.",
    metode: "Project-based learning.",
    bukti: "Rencana optimalisasi aset.",
    regulasi: "Permendagri 19/2016 jo. Permendagri 7/2024; PP 28/2020 terkait BMN/D",
  },
  {
    kode: "MKD250204",
    nama: "Manajemen Strategik Pemerintah Daerah",
    sks: 3,
    semester: 2,
    sifat: "Wajib",
    cpl: ["CPL 1", "CPL 3", "CPL 7", "CPL 8"],
    cpmk: "Menyusun analisis strategis dan peta strategi pemerintah daerah untuk peningkatan kinerja organisasi sektor publik.",
    deskripsi: "Mata kuliah ini menekankan penyusunan strategi organisasi sektor publik melalui analisis lingkungan, SWOT, balanced scorecard, peta strategi, kepemimpinan, dan implementasi strategi.",
    pokok: "SWOT, BSC, peta strategi, implementasi strategi sektor publik.",
    metode: "Case-based dan project-based learning.",
    bukti: "Dokumen strategi sektor publik.",
    regulasi: "Perpres 29/2014 tentang SAKIP; regulasi kinerja instansi pemerintah",
  },
  {
    kode: "MKD250205",
    nama: "Analisis Kualitatif dan Kuantitatif",
    sks: 3,
    semester: 2,
    sifat: "Wajib",
    cpl: ["CPL 1", "CPL 6", "CPL 7", "CPL 8"],
    cpmk: "Mengolah, menganalisis, dan menafsirkan data kualitatif dan kuantitatif untuk mendukung penelitian dan rekomendasi kebijakan.",
    deskripsi: "Mata kuliah ini mempelajari teknik analisis statistik deskriptif, inferensial, regresi, SEM-PLS, serta analisis kualitatif seperti coding, reduksi data, triangulasi, dan penarikan kesimpulan.",
    pokok: "Statistik, regresi, SEM-PLS, coding, triangulasi.",
    metode: "Praktik SPSS/PLS dan coding data.",
    bukti: "Output analisis data.",
    regulasi: "UU 12/2012; Perpres 8/2012; Permendikti Saintek 39/2025",
  },
  {
    kode: "MKD250301",
    nama: "Manajemen Proyek Pemerintah Daerah",
    sks: 3,
    semester: 3,
    sifat: "Wajib",
    cpl: ["CPL 1", "CPL 3", "CPL 7", "CPL 8"],
    cpmk: "Menyusun rancangan proyek pemerintah daerah, WBS, jadwal, pengendalian biaya, mutu, waktu, dan risiko proyek.",
    deskripsi: "Mata kuliah ini membekali mahasiswa dengan kemampuan perencanaan, pelaksanaan, pengawasan, dan evaluasi proyek pembangunan daerah melalui WBS, Gantt Chart, manajemen risiko, dan evaluasi proyek.",
    pokok: "Kelayakan proyek, WBS, Gantt Chart, risiko, evaluasi proyek.",
    metode: "Project-based learning.",
    bukti: "Rencana proyek dan analisis risiko.",
    regulasi: "Regulasi perencanaan, penganggaran, pengadaan, dan evaluasi proyek pemerintah daerah yang berlaku",
  },
  {
    kode: "MKD250302",
    nama: "Pemeriksaan Keuangan Pemerintah Daerah",
    sks: 3,
    semester: 3,
    sifat: "Wajib",
    cpl: ["CPL 1", "CPL 2", "CPL 4", "CPL 7", "CPL 8"],
    cpmk: "Menganalisis pemeriksaan keuangan pemerintah daerah, temuan audit, kertas kerja, dan rekomendasi tindak lanjut.",
    deskripsi: "Mata kuliah ini mengkaji pemeriksaan LKPD, audit kinerja, audit kepatuhan, materialitas, pengujian, kertas kerja audit, laporan hasil pemeriksaan, dan tindak lanjut rekomendasi.",
    pokok: "SPKN, audit LKPD, audit kinerja, temuan, tindak lanjut.",
    metode: "Telaah LHP dan kertas kerja audit.",
    bukti: "Kertas kerja audit dan rekomendasi.",
    regulasi: "Peraturan BPK 1/2017 tentang SPKN; PP 71/2010; PP 12/2019",
  },
  {
    kode: "MKD250303",
    nama: "Sistem Pengendalian Manajemen Pemerintah Daerah",
    sks: 3,
    semester: 3,
    sifat: "Wajib",
    cpl: ["CPL 1", "CPL 3", "CPL 4", "CPL 7", "CPL 8"],
    cpmk: "Mengevaluasi SPIP, SAKIP, manajemen risiko, dan sistem pengendalian manajemen untuk pencegahan penyimpangan.",
    deskripsi: "Mata kuliah ini membahas SPIP, SAKIP, monitoring dan evaluasi program, manajemen risiko, dan pengendalian pencegahan fraud untuk meningkatkan akuntabilitas kinerja dan penggunaan sumber daya publik.",
    pokok: "SPIP, SAKIP, manajemen risiko, monev, pencegahan fraud.",
    metode: "Case-based dan simulasi peta risiko.",
    bukti: "Peta risiko dan rancangan pengendalian.",
    regulasi: "PP 60/2008 tentang SPIP; Perpres 29/2014 tentang SAKIP",
  },
  {
    kode: "MKD250304",
    nama: "Seminar Proposal",
    sks: 3,
    semester: 3,
    sifat: "Wajib",
    cpl: ["CPL 1", "CPL 6", "CPL 7", "CPL 8"],
    cpmk: "Menyusun proposal tesis yang layak diseminarkan dan dipertanggungjawabkan secara akademik.",
    deskripsi: "Mata kuliah ini memfasilitasi mahasiswa dalam menyusun proposal tesis yang mencakup latar belakang, rumusan masalah, kajian teori, kerangka pemikiran, hipotesis/fokus penelitian, dan metode penelitian.",
    pokok: "Proposal tesis, kerangka teori, metode, presentasi akademik.",
    metode: "Seminar, peer review, bimbingan.",
    bukti: "Proposal tesis siap seminar.",
    regulasi: "UU 12/2012; Perpres 8/2012; Permendikti Saintek 39/2025; Peraturan Akademik Uncen",
  },
  {
    kode: "MKD250401",
    nama: "Publikasi Ilmiah",
    sks: 3,
    semester: 4,
    sifat: "Wajib",
    cpl: ["CPL 1", "CPL 6", "CPL 7", "CPL 8"],
    cpmk: "Menyusun artikel ilmiah berbasis penelitian atau kajian konseptual yang layak dikirim ke jurnal atau forum ilmiah.",
    deskripsi: "Mata kuliah ini membekali mahasiswa dengan kemampuan menulis artikel ilmiah, teknik sitasi, pemilihan jurnal, etika publikasi, reference manager, proses submit, dan respons terhadap reviewer.",
    pokok: "Struktur artikel, sitasi, jurnal, etika publikasi, submit.",
    metode: "Workshop penulisan artikel.",
    bukti: "Artikel ilmiah siap submit.",
    regulasi: "UU 12/2012; Perpres 8/2012; Permendikti Saintek 39/2025; Peraturan Akademik Uncen",
  },
  {
    kode: "MKD250402",
    nama: "Tesis",
    sks: 9,
    semester: 4,
    sifat: "Wajib",
    cpl: ["CPL 1", "CPL 2", "CPL 3", "CPL 4", "CPL 5", "CPL 6", "CPL 7", "CPL 8"],
    cpmk: "Melaksanakan penelitian mandiri, menyusun tesis, mempertahankan hasil penelitian, dan merumuskan rekomendasi akademik maupun kebijakan.",
    deskripsi: "Mahasiswa melakukan penelitian mandiri di bawah bimbingan dosen pembimbing, mulai dari proposal, pengumpulan data, analisis, pembahasan, kesimpulan, rekomendasi kebijakan, ujian tesis, dan artikel berbasis tesis.",
    pokok: "Penelitian mandiri, analisis data, pembahasan, rekomendasi kebijakan.",
    metode: "Bimbingan, seminar, ujian tesis.",
    bukti: "Laporan tesis dan artikel berbasis tesis.",
    regulasi: "UU 12/2012; Perpres 8/2012; Permendikti Saintek 39/2025; Peraturan Akademik Uncen",
  },
];

const defaultAssessment = [
  { jenis: "Penilaian Formatif", aktivitas: "Tugas, forum diskusi, refleksi, review artikel, latihan analisis data, dan studi kasus", bobot: 25 },
  { jenis: "Penilaian Sumatif", aktivitas: "UTS, UAS, atau proyek akhir mata kuliah", bobot: 45 },
  { jenis: "Proyek/Presentasi", aktivitas: "Policy brief, laporan analisis kasus, rancangan dokumen, peta risiko, atau presentasi akademik", bobot: 20 },
  { jenis: "Portofolio", aktivitas: "Artikel, proposal, output analisis data, dokumen proyek, atau luaran tesis", bobot: 10 },
];

const mkByName = Object.fromEntries(COURSES.map((c) => [c.nama, c]));

function makeWeeks(course) {
  const topics = [
    "Orientasi RPS, kontrak perkuliahan, urgensi mata kuliah, dan keterkaitan CPL-CPMK",
    `Kerangka konseptual ${course.nama} dalam konteks MKD dan pembangunan Papua`,
    `Regulasi dan kebijakan kunci terkait ${course.nama}`,
    `Konsep, teori, dan model analisis dalam ${course.nama}`,
    `Studi kasus pemerintah daerah: ${course.pokok}`,
    "Telaah artikel/jurnal dan identifikasi gap praktik atau penelitian",
    "Latihan analisis data/dokumen/kasus sesuai karakter mata kuliah",
    "Ujian Tengah Semester / evaluasi capaian awal CPMK",
    "Pendalaman materi lanjutan dan integrasi dengan tata kelola keuangan daerah",
    "Analisis kasus Papua dan problem nyata pemerintah daerah",
    "Perancangan luaran: policy brief, laporan analisis, peta risiko, atau rancangan dokumen",
    "Presentasi kelompok dan peer review luaran pembelajaran",
    "Penyempurnaan tugas/proyek berbasis umpan balik dosen dan sejawat",
    "Simulasi asesmen akhir dan refleksi ketercapaian CPL",
    "Finalisasi portofolio mata kuliah",
    "Ujian Akhir Semester / presentasi proyek akhir",
  ];

  return topics.map((topic, index) => ({
    minggu: index + 1,
    subCpmk:
      index === 0
        ? "Mahasiswa memahami arah pembelajaran, CPMK, asesmen, dan keterkaitan mata kuliah dengan CPL Prodi."
        : index === 7
        ? "Mahasiswa menunjukkan penguasaan materi awal melalui evaluasi tengah semester."
        : index === 15
        ? "Mahasiswa menunjukkan ketercapaian CPMK melalui ujian atau proyek akhir."
        : course.cpmk,
    bahanKajian: topic,
    bentuk: index === 7 || index === 15 ? "Evaluasi terstruktur" : course.metode,
    luringDaring: "Luring / daring / hybrid",
    pb: index === 7 || index === 15 ? "Evaluasi capaian pembelajaran" : "Kuliah interaktif, diskusi regulasi, studi kasus, dan klarifikasi konsep",
    pt: index === 7 ? "Mengerjakan UTS" : index === 15 ? "Mengerjakan UAS/proyek akhir" : `Tugas terstruktur: ${course.bukti}`,
    bm: "Membaca referensi, regulasi, artikel jurnal, dan dokumen pemerintah daerah yang relevan",
    indikator: "Ketepatan konsep, kedalaman analisis, penggunaan data/regulasi, argumentasi akademik, dan relevansi solusi terhadap konteks daerah",
    teknik: index === 7 ? "UTS" : index === 15 ? "UAS / proyek akhir" : "Tugas, diskusi, review artikel, studi kasus, atau presentasi",
    bobot: index === 7 ? 20 : index === 15 ? 25 : index === 0 ? 2 : 3,
  }));
}

function Input({ label, value, onChange, type = "text", placeholder = "" }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(type === "number" ? Number(e.target.value) : e.target.value)}
        className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-slate-500"
      />
    </label>
  );
}

function Textarea({ label, value, onChange, rows = 3 }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <textarea
        value={value}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-slate-500"
      />
    </label>
  );
}

function Card({ title, subtitle, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-lg font-extrabold text-slate-950">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

function Badge({ children }) {
  return <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">{children}</span>;
}

function EditableTable({ weeks, setWeeks }) {
  const update = (index, key, value) => {
    setWeeks((prev) => prev.map((item, i) => (i === index ? { ...item, [key]: value } : item)));
  };

  return (
    <div className="space-y-3">
      {weeks.map((w, index) => (
        <details key={w.minggu} className="rounded-2xl border border-slate-200 bg-slate-50 p-4" open={index < 2}>
          <summary className="cursor-pointer font-bold text-slate-900">Minggu {w.minggu}: {w.bahanKajian || "Belum diisi"}</summary>
          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            <Textarea label="Sub-CPMK" value={w.subCpmk} onChange={(v) => update(index, "subCpmk", v)} />
            <Textarea label="Bahan Kajian / Pokok Bahasan" value={w.bahanKajian} onChange={(v) => update(index, "bahanKajian", v)} />
            <Input label="Bentuk/Metode Pembelajaran" value={w.bentuk} onChange={(v) => update(index, "bentuk", v)} />
            <Input label="Luring/Daring" value={w.luringDaring} onChange={(v) => update(index, "luringDaring", v)} />
            <Textarea label="PB - Pembelajaran Terbimbing" value={w.pb} onChange={(v) => update(index, "pb", v)} />
            <Textarea label="PT - Penugasan Terstruktur" value={w.pt} onChange={(v) => update(index, "pt", v)} />
            <Textarea label="BM - Belajar Mandiri" value={w.bm} onChange={(v) => update(index, "bm", v)} />
            <Textarea label="Indikator Penilaian" value={w.indikator} onChange={(v) => update(index, "indikator", v)} />
            <Input label="Teknik Penilaian" value={w.teknik} onChange={(v) => update(index, "teknik", v)} />
            <Input label="Bobot (%)" type="number" value={w.bobot} onChange={(v) => update(index, "bobot", v)} />
          </div>
        </details>
      ))}
    </div>
  );
}

function PrintPreview({ meta, course, weeks, assessment, referensi }) {
  const totalAssessment = assessment.reduce((s, a) => s + Number(a.bobot || 0), 0);
  const totalWeeks = weeks.reduce((s, w) => s + Number(w.bobot || 0), 0);
  const selectedCpl = CPL_BARU.filter((item) => course.cpl.includes(item.kode));

  return (
    <div className="rps-preview rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Rencana Pembelajaran Semester OBE</p>
        <h1 className="mt-2 text-2xl font-extrabold text-slate-950">{course.nama}</h1>
        <p className="mt-1 text-sm font-semibold text-slate-700">Program Pascasarjana Universitas Cenderawasih</p>
        <p className="text-sm text-slate-600">Program Studi Magister Keuangan Daerah</p>
      </div>

      <div className="mt-6 grid gap-2 rounded-xl border border-slate-200 p-4 text-sm md:grid-cols-2">
        <p><b>Kode Mata Kuliah:</b> {course.kode}</p>
        <p><b>SKS/Semester:</b> {course.sks} SKS / Semester {course.semester}</p>
        <p><b>Sifat:</b> {course.sifat}</p>
        <p><b>Gelar Prodi:</b> M.Si</p>
        <p><b>Pengembang RPS:</b> {meta.pengembang || "-"}</p>
        <p><b>Koordinator RMK:</b> {meta.koordinator || "-"}</p>
        <p><b>Ketua Prodi:</b> {meta.kaprodi || "Dr. Paulus K. Allo Layuk, SE., M.Si., Ak., CA"}</p>
        <p><b>Model Pembelajaran:</b> {meta.model}</p>
      </div>

      <div className="mt-5">
        <h3 className="font-extrabold text-slate-900">Deskripsi Mata Kuliah</h3>
        <p className="mt-2 text-sm leading-6 text-slate-700">{course.deskripsi}</p>
      </div>

      <div className="mt-5">
        <h3 className="font-extrabold text-slate-900">CPL yang Dibebankan pada Mata Kuliah</h3>
        <div className="mt-2 space-y-2 text-sm leading-6 text-slate-700">
          {selectedCpl.map((c) => (
            <p key={c.kode}><b>{c.kode}.</b> {c.teks}</p>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div>
          <h3 className="font-extrabold text-slate-900">CPMK Utama</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">{course.cpmk}</p>
        </div>
        <div>
          <h3 className="font-extrabold text-slate-900">Bahan Kajian, Metode, dan Bukti Pembelajaran</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700"><b>Pokok Bahasan:</b> {course.pokok}</p>
          <p className="text-sm leading-6 text-slate-700"><b>Metode:</b> {course.metode}</p>
          <p className="text-sm leading-6 text-slate-700"><b>Bukti:</b> {course.bukti}</p>
          <p className="text-sm leading-6 text-slate-700"><b>Regulasi kunci:</b> {course.regulasi}</p>
        </div>
      </div>

      <div className="mt-5 overflow-x-auto">
        <h3 className="mb-2 font-extrabold text-slate-900">Matriks Rencana Pembelajaran Mingguan</h3>
        <table className="w-full min-w-[1200px] border-collapse text-left text-[11px]">
          <thead>
            <tr className="bg-slate-100 text-slate-700">
              <th className="border p-2">Mg</th>
              <th className="border p-2">Sub-CPMK</th>
              <th className="border p-2">Bahan Kajian</th>
              <th className="border p-2">Bentuk</th>
              <th className="border p-2">PB</th>
              <th className="border p-2">PT</th>
              <th className="border p-2">BM</th>
              <th className="border p-2">Indikator</th>
              <th className="border p-2">Teknik</th>
              <th className="border p-2">Bobot</th>
            </tr>
          </thead>
          <tbody>
            {weeks.map((w) => (
              <tr key={w.minggu} className="align-top">
                <td className="border p-2 font-bold">{w.minggu}</td>
                <td className="border p-2">{w.subCpmk}</td>
                <td className="border p-2">{w.bahanKajian}</td>
                <td className="border p-2">{w.bentuk}</td>
                <td className="border p-2">{w.pb}</td>
                <td className="border p-2">{w.pt}</td>
                <td className="border p-2">{w.bm}</td>
                <td className="border p-2">{w.indikator}</td>
                <td className="border p-2">{w.teknik}</td>
                <td className="border p-2">{w.bobot}%</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className={`mt-2 text-xs font-bold ${totalWeeks === 100 ? "text-emerald-700" : "text-amber-700"}`}>Total bobot mingguan: {totalWeeks}%</p>
      </div>

      <div className="mt-5 overflow-x-auto">
        <h3 className="mb-2 font-extrabold text-slate-900">Rubrik dan Portofolio Penilaian</h3>
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-slate-100 text-slate-700">
              <th className="border p-2">Jenis Penilaian</th>
              <th className="border p-2">Bentuk Aktivitas</th>
              <th className="border p-2">Bobot</th>
            </tr>
          </thead>
          <tbody>
            {assessment.map((a, i) => (
              <tr key={i}>
                <td className="border p-2">{a.jenis}</td>
                <td className="border p-2">{a.aktivitas}</td>
                <td className="border p-2">{a.bobot}%</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className={`mt-2 text-xs font-bold ${totalAssessment === 100 ? "text-emerald-700" : "text-amber-700"}`}>Total bobot penilaian: {totalAssessment}%</p>
      </div>

      <div className="mt-5">
        <h3 className="font-extrabold text-slate-900">Referensi</h3>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-6 text-slate-700">
          {referensi.split("\n").filter(Boolean).map((r, i) => <li key={i}>{r}</li>)}
        </ol>
      </div>
    </div>
  );
}

export default function AplikasiRpsMkdUncen() {
  const [active, setActive] = useState("kurikulum");
  const [selected, setSelected] = useState(COURSES[0].nama);
  const [course, setCourse] = useState(COURSES[0]);
  const [weeks, setWeeks] = useState(makeWeeks(COURSES[0]));
  const [assessment, setAssessment] = useState(defaultAssessment);
  const [meta, setMeta] = useState({
    pengembang: "",
    koordinator: "",
    kaprodi: "Dr. Paulus K. Allo Layuk, SE., M.Si., Ak., CA",
    model: "Luring / daring / hybrid berbasis OBE, case-based learning, project-based learning, dan research-based learning",
  });
  const [referensi, setReferensi] = useState(
    "Undang-Undang Republik Indonesia Nomor 12 Tahun 2012 tentang Pendidikan Tinggi.\nPeraturan Presiden Republik Indonesia Nomor 8 Tahun 2012 tentang Kerangka Kualifikasi Nasional Indonesia.\nPeraturan Pemerintah Republik Indonesia Nomor 12 Tahun 2019 tentang Pengelolaan Keuangan Daerah.\nPeraturan Menteri Dalam Negeri Republik Indonesia Nomor 77 Tahun 2020 tentang Pedoman Teknis Pengelolaan Keuangan Daerah.\nPeraturan Rektor Universitas Cenderawasih Nomor 352 Tahun 2024 tentang Peraturan Akademik Universitas Cenderawasih."
  );

  const totalSks = useMemo(() => COURSES.reduce((sum, c) => sum + c.sks, 0), []);
  const assessmentTotal = assessment.reduce((s, a) => s + Number(a.bobot || 0), 0);
  const weeklyTotal = weeks.reduce((s, w) => s + Number(w.bobot || 0), 0);

  function chooseCourse(name) {
    const next = mkByName[name];
    setSelected(name);
    setCourse(next);
    setWeeks(makeWeeks(next));
  }

  function updateAssessment(index, key, value) {
    setAssessment((prev) => prev.map((item, i) => (i === index ? { ...item, [key]: value } : item)));
  }

  function exportData() {
    const payload = { source: "Generator RPS OBE MKD Uncen 2025", course, weeks, assessment, meta, referensi };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `RPS-${course.kode}-${course.nama}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function importData(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        if (parsed.course && parsed.weeks && parsed.assessment) {
          setCourse(parsed.course);
          setSelected(parsed.course.nama);
          setWeeks(parsed.weeks);
          setAssessment(parsed.assessment);
          if (parsed.meta) setMeta(parsed.meta);
          if (parsed.referensi) setReferensi(parsed.referensi);
        } else {
          alert("Format JSON tidak sesuai.");
        }
      } catch {
        alert("File tidak dapat dibaca.");
      }
    };
    reader.readAsText(file);
  }

  const nav = [
    ["kurikulum", "Basis Kurikulum"],
    ["pilih", "Pilih Mata Kuliah"],
    ["mingguan", "Matriks 16 Pertemuan"],
    ["penilaian", "Rubrik & Portofolio"],
    ["referensi", "Referensi"],
    ["preview", "Preview RPS"],
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <style>{`
        @media print {
          body * { visibility: hidden; }
          .rps-preview, .rps-preview * { visibility: visible; }
          .rps-preview { position: absolute; left: 0; top: 0; width: 100%; border: none; box-shadow: none; }
          .no-print { display: none !important; }
        }
      `}</style>

      <header className="no-print border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Generator RPS OBE 2025</p>
            <h1 className="mt-1 text-2xl font-extrabold text-slate-950 md:text-3xl">Aplikasi Penyusun RPS MKD Uncen</h1>
            <p className="mt-1 text-sm text-slate-600">Disesuaikan dengan Dokumen Kurikulum Program Studi Magister Keuangan Daerah Tahun 2025: 8 CPL, 16 mata kuliah, 54 SKS, dan struktur OBE.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => window.print()} className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold text-white hover:bg-slate-700">Cetak / PDF</button>
            <button onClick={exportData} className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-bold hover:bg-slate-100">Export JSON</button>
            <label className="cursor-pointer rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-bold hover:bg-slate-100">
              Import JSON
              <input type="file" accept=".json" className="hidden" onChange={(e) => importData(e.target.files?.[0])} />
            </label>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-5 px-4 py-6 lg:grid-cols-[270px_1fr]">
        <aside className="no-print h-fit rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Status Kurikulum</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge>{COURSES.length} MK</Badge>
              <Badge>{totalSks} SKS</Badge>
              <Badge>8 CPL</Badge>
              <Badge>4 Semester</Badge>
            </div>
            <p className="mt-3 text-xs text-slate-600">Aktif: {course.kode} - {course.nama}</p>
            <p className={`mt-2 text-xs font-bold ${assessmentTotal === 100 ? "text-emerald-700" : "text-amber-700"}`}>Penilaian: {assessmentTotal}%</p>
            <p className={`text-xs font-bold ${weeklyTotal === 100 ? "text-emerald-700" : "text-amber-700"}`}>Bobot mingguan: {weeklyTotal}%</p>
          </div>
          <nav className="mt-3 space-y-1">
            {nav.map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`w-full rounded-xl px-3 py-2 text-left text-sm font-bold transition ${active === key ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"}`}
              >
                {label}
              </button>
            ))}
          </nav>
        </aside>

        <div className="space-y-5">
          {active === "kurikulum" && (
            <>
              <Card title="Identitas Program Studi" subtitle="Mengikuti dokumen kurikulum MKD Uncen 2025.">
                <div className="grid gap-3 text-sm md:grid-cols-2 lg:grid-cols-3">
                  <p><b>Perguruan Tinggi:</b> Universitas Cenderawasih</p>
                  <p><b>Program:</b> Program Pascasarjana</p>
                  <p><b>Program Studi:</b> Magister Keuangan Daerah</p>
                  <p><b>Akreditasi:</b> B</p>
                  <p><b>Jenjang:</b> Magister/S2</p>
                  <p><b>Gelar:</b> M.Si</p>
                </div>
              </Card>

              <Card title="Profil Lulusan" subtitle="Profil lulusan yang menjadi basis penurunan CPL dan mata kuliah.">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[800px] border-collapse text-sm">
                    <thead><tr className="bg-slate-100"><th className="border p-2 text-left">Kode</th><th className="border p-2 text-left">Profil</th><th className="border p-2 text-left">Deskripsi</th></tr></thead>
                    <tbody>{PROFIL_LULUSAN.map((p) => <tr key={p[0]}><td className="border p-2 font-bold">{p[0]}</td><td className="border p-2">{p[1]}</td><td className="border p-2">{p[2]}</td></tr>)}</tbody>
                  </table>
                </div>
              </Card>

              <Card title="8 CPL Baru MKD" subtitle="CPL ringkas OBE yang digunakan untuk semua mata kuliah.">
                <div className="space-y-2">
                  {CPL_BARU.map((c) => (
                    <div key={c.kode} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm leading-6">
                      <b>{c.kode}.</b> {c.teks}
                    </div>
                  ))}
                </div>
              </Card>
            </>
          )}

          {active === "pilih" && (
            <>
              <Card title="Pilih Mata Kuliah" subtitle="Setiap pilihan otomatis memuat kode, semester, SKS, CPL pendukung, CPMK utama, deskripsi, metode, bukti pembelajaran, dan regulasi kunci.">
                <label className="block">
                  <span className="text-sm font-bold text-slate-700">Mata Kuliah</span>
                  <select value={selected} onChange={(e) => chooseCourse(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-slate-500">
                    {COURSES.map((c) => <option key={c.kode} value={c.nama}>{c.kode} - {c.nama} ({c.sks} SKS, Semester {c.semester})</option>)}
                  </select>
                </label>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <Input label="Pengembang RPS" value={meta.pengembang} onChange={(v) => setMeta({ ...meta, pengembang: v })} placeholder="Nama dosen/tim penyusun" />
                  <Input label="Koordinator RMK" value={meta.koordinator} onChange={(v) => setMeta({ ...meta, koordinator: v })} placeholder="Nama koordinator rumpun mata kuliah" />
                  <Input label="Ketua Program Studi" value={meta.kaprodi} onChange={(v) => setMeta({ ...meta, kaprodi: v })} />
                  <Input label="Model Pembelajaran" value={meta.model} onChange={(v) => setMeta({ ...meta, model: v })} />
                </div>
              </Card>

              <Card title="Detail Mata Kuliah Terpilih">
                <div className="flex flex-wrap gap-2">
                  <Badge>{course.kode}</Badge><Badge>{course.sks} SKS</Badge><Badge>Semester {course.semester}</Badge><Badge>{course.sifat}</Badge>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="font-extrabold">CPL Didukung</h3>
                    <p className="mt-2 text-sm leading-6">{course.cpl.join(", ")}</p>
                  </div>
                  <div>
                    <h3 className="font-extrabold">CPMK Utama</h3>
                    <p className="mt-2 text-sm leading-6">{course.cpmk}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="font-extrabold">Deskripsi</h3>
                    <p className="mt-2 text-sm leading-6">{course.deskripsi}</p>
                  </div>
                </div>
              </Card>

              <Card title="Struktur Kurikulum 54 SKS">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[900px] border-collapse text-sm">
                    <thead><tr className="bg-slate-100"><th className="border p-2 text-left">Kode</th><th className="border p-2 text-left">Mata Kuliah</th><th className="border p-2 text-left">Sifat</th><th className="border p-2 text-left">SKS</th><th className="border p-2 text-left">Semester</th><th className="border p-2 text-left">CPL</th></tr></thead>
                    <tbody>{COURSES.map((c) => <tr key={c.kode}><td className="border p-2 font-bold">{c.kode}</td><td className="border p-2">{c.nama}</td><td className="border p-2">{c.sifat}</td><td className="border p-2">{c.sks}</td><td className="border p-2">{c.semester}</td><td className="border p-2">{c.cpl.join(", ")}</td></tr>)}</tbody>
                  </table>
                </div>
              </Card>
            </>
          )}

          {active === "mingguan" && (
            <Card title="Matriks RPS 16 Pertemuan" subtitle="Kolom PB/PT/BM dimasukkan agar lebih dekat dengan format RPS OBE MKD.">
              <EditableTable weeks={weeks} setWeeks={setWeeks} />
            </Card>
          )}

          {active === "penilaian" && (
            <Card title="Rubrik dan Portofolio Penilaian" subtitle="Mengikuti kelompok penilaian formatif, sumatif, proyek/presentasi, dan portofolio.">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className={`text-sm font-extrabold ${assessmentTotal === 100 ? "text-emerald-700" : "text-amber-700"}`}>Total bobot: {assessmentTotal}%</p>
                <button onClick={() => setAssessment([...assessment, { jenis: "", aktivitas: "", bobot: 0 }])} className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold text-white">Tambah</button>
              </div>
              <div className="space-y-3">
                {assessment.map((a, index) => (
                  <div key={index} className="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-[1fr_2fr_100px_70px]">
                    <Input label="Jenis" value={a.jenis} onChange={(v) => updateAssessment(index, "jenis", v)} />
                    <Input label="Aktivitas" value={a.aktivitas} onChange={(v) => updateAssessment(index, "aktivitas", v)} />
                    <Input label="Bobot" type="number" value={a.bobot} onChange={(v) => updateAssessment(index, "bobot", v)} />
                    <button onClick={() => setAssessment(assessment.filter((_, i) => i !== index))} className="mt-6 h-10 rounded-xl border border-slate-300 text-xs font-bold hover:bg-white">Hapus</button>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {active === "referensi" && (
            <>
              <Card title="Bahan Kajian MKD" subtitle="Body of Knowledge sebagai acuan pengembangan pokok bahasan RPS.">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[850px] border-collapse text-sm">
                    <thead><tr className="bg-slate-100"><th className="border p-2 text-left">Kode</th><th className="border p-2 text-left">Bahan Kajian</th><th className="border p-2 text-left">Deskripsi</th></tr></thead>
                    <tbody>{BAHAN_KAJIAN.map((bk) => <tr key={bk[0]}><td className="border p-2 font-bold">{bk[0]}</td><td className="border p-2">{bk[1]}</td><td className="border p-2">{bk[2]}</td></tr>)}</tbody>
                  </table>
                </div>
              </Card>
              <Card title="Referensi RPS">
                <Textarea label="Daftar Referensi" value={referensi} onChange={setReferensi} rows={12} />
              </Card>
            </>
          )}

          {active === "preview" && (
            <div className="space-y-4">
              <div className="no-print flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div>
                  <h2 className="font-extrabold">Preview RPS Siap Cetak</h2>
                  <p className="text-sm text-slate-500">Preview ini dapat dicetak ke PDF atau disalin ke dokumen Word resmi prodi.</p>
                </div>
                <button onClick={() => window.print()} className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold text-white">Cetak / PDF</button>
              </div>
              <PrintPreview meta={meta} course={course} weeks={weeks} assessment={assessment} referensi={referensi} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
