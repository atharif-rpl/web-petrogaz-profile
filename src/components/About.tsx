'use client';

import Image from 'next/image';
import { GraduationCap, Globe, Factory, Hexagon } from 'lucide-react';

export default function About() {
  return (
    // Menggunakan h-[100dvh] agar mengambil tepat 1 layar penuh, 
    // dengan min-h-[750px] agar layout tidak hancur di layar yang sangat pendek (seperti HP).
    <section className="relative w-full h-[100dvh] min-h-[750px] flex flex-col justify-center bg-[#F4F6F8] overflow-hidden font-sans">
      
      {/* --- PETROGAZ LIGHT DNA BACKGROUND --- */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-8">
        
        {/* --- HEADER SECTION --- */}
        {/* Margin dikurangi agar muat pas di 1 layar desktop */}
        <div className="flex flex-col items-center text-center mb-10 lg:mb-12">
          
          {/* Teks tanpa ikon hexagon & diperbesar */}
          <div className="mb-4">
            <span className="font-mono text-sm md:text-base tracking-[0.25em] text-amber-600 uppercase font-bold">
              Program Pendidikan
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-4">
            Pendidikan Standar <br className="md:hidden" />
            <span className="relative inline-block mt-2 px-2">
              <span className="relative z-10 text-slate-900">Industri Migas</span>
              <span className="absolute bottom-2 left-0 w-full h-[35%] bg-amber-400/50 -z-10 -rotate-1 skew-x-[-10deg] rounded-sm" />
            </span>
          </h2>
          
          <p className="text-slate-600 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
            Kurikulum yang dirancang khusus untuk mempersiapkan lulusan yang kompeten dan siap berkarier di industri minyak dan gas.
          </p>
        </div>

        {/* --- SPLIT PANEL LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch">
          
          {/* KOLOM KIRI: Daftar Program (Span 5 Kolom) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-center">
            
            {/* Kartu 1: PKBM Setara SMA */}
            <div className="group relative bg-white rounded-3xl p-5 md:p-6 flex items-start gap-4 shadow-sm border border-slate-200 hover:border-amber-400 hover:shadow-[0_15px_30px_-10px_rgba(245,158,11,0.15)] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-100 group-hover:bg-amber-400 transition-colors" />
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center group-hover:bg-amber-100 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">PKBM Setara SMA</h3>
                <p className="text-[13px] md:text-sm text-slate-500 leading-relaxed font-medium">
                  Program pendidikan kesetaraan dengan kurikulum terintegrasi kebutuhan industri migas.
                </p>
              </div>
            </div>

            {/* Kartu 2: Bilingual Program */}
            <div className="group relative bg-white rounded-3xl p-5 md:p-6 flex items-start gap-4 shadow-sm border border-slate-200 hover:border-amber-400 hover:shadow-[0_15px_30px_-10px_rgba(245,158,11,0.15)] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-100 group-hover:bg-amber-400 transition-colors" />
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center group-hover:bg-amber-100 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">Bilingual Program</h3>
                <p className="text-[13px] md:text-sm text-slate-500 leading-relaxed font-medium">
                  Penguatan kemampuan bahasa Inggris aktif untuk kesiapan kerja di industri internasional.
                </p>
              </div>
            </div>

            {/* Kartu 3: Link & Match Industri */}
            <div className="group relative bg-white rounded-3xl p-5 md:p-6 flex items-start gap-4 shadow-sm border border-slate-200 hover:border-amber-400 hover:shadow-[0_15px_30px_-10px_rgba(245,158,11,0.15)] transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-100 group-hover:bg-amber-400 transition-colors" />
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center group-hover:bg-amber-100 group-hover:scale-110 transition-transform">
                <Factory className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">Link & Match Industri</h3>
                <p className="text-[13px] md:text-sm text-slate-500 leading-relaxed font-medium">
                  Kerjasama langsung dengan industri migas untuk magang dan pembelajaran berbasis proyek.
                </p>
              </div>
            </div>

          </div>

          {/* KOLOM KANAN: Gambar Workshop (Span 7 Kolom) */}
          {/* Gambar disetel agar menyesuaikan ketinggian container induk tanpa menyebabkan overflow */}
          <div className="lg:col-span-7 relative min-h-[300px] h-full rounded-3xl overflow-hidden group shadow-md border border-slate-200/60">
            <Image
              src="/images/fotoabout.jpg"
              alt="Workshop dan Laboratorium Fasilitas Migas"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
            {/* Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
            
            <div className="absolute inset-0 bg-amber-500/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 transform group-hover:-translate-y-2 transition-transform duration-500">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/90 backdrop-blur-sm mb-3 shadow-sm">
                <Hexagon className="w-3.5 h-3.5 text-slate-950 fill-current" />
                <span className="font-mono text-[10px] md:text-xs tracking-widest text-slate-950 uppercase font-bold">
                  Fasilitas Unggulan
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-md">
                Workshop & Laboratorium
              </h3>
              <p className="text-slate-300 font-medium text-sm md:text-base max-w-md drop-shadow-sm">
                Fasilitas berstandar industri migas
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}