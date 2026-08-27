'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, Maximize2, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Data Galeri - Span disesuaikan untuk mengunci Grid 3x3 dengan sempurna
const GALLERY_DATA = [
  { 
    id: 1, 
    title: 'Praktik Instrumentasi Presisi', 
    category: 'Workshop', 
    image: '/images/foto1.jpg',
    span: 'md:col-span-2 md:row-span-2', // Mengambil 2 baris & 2 kolom
    description: 'Siswa melakukan kalibrasi pada instrumen pengukuran tekanan (pressure transmitter). Fasilitas workshop kami menggunakan alat ukur dengan standar yang sama persis dengan yang digunakan di kilang minyak (refinery) untuk memastikan kesiapan kerja.'
  },
  { 
    id: 2, 
    title: 'Technical English Class', 
    category: 'Akademik', 
    image: '/images/foto2.jpg',
    span: 'md:col-span-1 md:row-span-1', // Mengambil sisa kolom di baris 1
    description: 'Pembelajaran bahasa Inggris berfokus pada terminologi engineering dan HSE (Health, Safety, Environment). Kelas dibentuk interaktif untuk melatih komunikasi aktif siswa.'
  },
  { 
    id: 3, 
    title: 'Safety Briefing (HSE)', 
    category: 'Lapangan', 
    image: '/images/foto3.jpg',
    span: 'md:col-span-1 md:row-span-1', // Mengambil sisa kolom di baris 2
    description: 'Penerapan budaya K3 (Keselamatan dan Kesehatan Kerja) yang ketat. Setiap siswa diwajibkan mengikuti toolbox meeting dan briefing keselamatan sebelum menyentuh alat berat.'
  },
  { 
    id: 4, 
    title: 'Simulasi Panel Kontrol DCS', 
    category: 'Teknologi', 
    image: '/images/foto4.jpg',
    span: 'md:col-span-1 md:row-span-1', // Baris 3, kolom 1
    description: 'Pelatihan menggunakan Distributed Control System (DCS). Siswa belajar memonitor dan mengendalikan aliran fluida dan suhu jarak jauh melalui layar presisi.'
  },
  { 
    id: 5, 
    title: 'Ujian Sertifikasi BNSP', 
    category: 'Sertifikasi', 
    image: '/images/foto5.jpg', 
    span: 'md:col-span-2 md:row-span-1', // Baris 3, sisa 2 kolom
    description: 'Momen ujian praktik kelulusan yang dinilai langsung oleh asesor eksternal dari Lembaga Sertifikasi Profesi (LSP) Migas.'
  },
];

export default function InteractiveGallery() {
  const [selectedItem, setSelectedItem] = useState<typeof GALLERY_DATA[0] | null>(null);
  const closeModal = () => setSelectedItem(null);

  return (
    // Menggunakan h-[100dvh] agar pas 1 layar dan flex-col justify-center agar merata di tengah
    <section className="relative w-full h-[100dvh] min-h-[750px] flex flex-col justify-center bg-[#FAFAFA] overflow-hidden font-sans">
      
      {/* Background Aesthetic (Petrogaz Light DNA) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-[85rem] mx-auto px-6 md:px-12 py-8">
        
        {/* --- HEADER --- */}
        {/* Margin bawah dikurangi agar tidak memakan tempat */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 mb-4 shadow-sm">
              <Camera className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-slate-600 uppercase font-bold">
                Galeri & Aktivitas
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Merekam Jejak Calon <br className="hidden md:block" />
              <span className="relative inline-block mt-1">
                <span className="relative z-10">Insinyur Masa Depan.</span>
                <span className="absolute bottom-2 left-[-2%] w-[104%] h-[35%] bg-amber-400/50 -z-10 -rotate-1 skew-x-[-10deg] rounded-sm" />
              </span>
            </h2>
          </div>
          
          <Link 
            href="/galeri" 
            className="group hidden md:flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-amber-500 transition-colors bg-white px-5 py-2.5 rounded-full border border-slate-200 shadow-sm hover:shadow-md"
          >
            Lihat Semua Foto
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* --- BENTO GRID GALLERY LENGKAP (Locked Height) --- */}
        {/* Kita kunci tinggi keseluruhan grid menjadi ~65% dari layar (65vh) agar tidak luber */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-3 md:gap-4 h-[65vh] max-h-[600px]">
          {GALLERY_DATA.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedItem(item)} 
              // Menghapus min-h bawaan, menggantinya agar otomatis memenuhi kotak Grid (h-full w-full)
              className={`group relative rounded-3xl overflow-hidden bg-slate-100 ${item.span} cursor-pointer shadow-sm hover:shadow-xl hover:shadow-amber-500/15 transition-all duration-500 border border-slate-200/60 h-full w-full min-h-[150px] md:min-h-0`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-amber-500/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 w-full p-5 md:p-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                <span className="inline-block px-2 py-1 mb-2 text-[9px] md:text-[10px] font-bold tracking-widest text-slate-900 uppercase bg-amber-400 rounded-full shadow-sm">
                  {item.category}
                </span>
                {/* Mengurangi ukuran font agar proporsional di dalam kotak kecil */}
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug drop-shadow-md">
                  {item.title}
                </h3>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <Maximize2 className="w-5 h-5 text-white" />
              </div>

            </div>
          ))}
        </div>
        
        {/* Tombol CTA Mobile */}
        <Link 
          href="/galeri" 
          className="mt-6 md:hidden flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-900 font-bold text-sm hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-colors"
        >
          Lihat Semua Foto
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* --- POPUP MODAL (INTERAKTIF) --- */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-950/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-5xl bg-white rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 bg-white/80 hover:bg-slate-100 backdrop-blur-md rounded-full flex items-center justify-center transition-colors border border-slate-200 shadow-sm"
            >
              <X className="w-5 h-5 text-slate-700" />
            </button>

            <div className="relative w-full md:w-3/5 h-[35vh] md:h-[70vh] bg-slate-100">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="w-full md:w-2/5 p-6 md:p-10 flex flex-col justify-center bg-[#FAFAFA]">
              <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-amber-600 uppercase bg-amber-100 w-fit rounded-full">
                {selectedItem.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 leading-tight">
                {selectedItem.title}
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                {selectedItem.description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="font-mono text-[10px] md:text-xs text-slate-400 uppercase tracking-widest">
                  PETROGAZ BILINGUAL SCHOOL • 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}