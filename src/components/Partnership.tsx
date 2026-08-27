'use client';

import Image from 'next/image';
import { Hexagon } from 'lucide-react';

// Array data mitra (Anda bisa menambahkan logo perusahaan lain di sini nanti)
const PARTNERS = [
  {
    id: 1,
    name: 'IKPT',
    // Pastikan Anda menyimpan logo IKPT di folder public/images/ dengan background transparan (PNG)
    logoUrl: '/images/logoikpt.png', 
  },
  // Contoh jika ada partner lain:
  // { id: 2, name: 'Pertamina', logoUrl: '/images/logo-pertamina.png' },
  // { id: 3, name: 'Chevron', logoUrl: '/images/logo-chevron.png' },
];

export default function Partnership() {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FAFAFA] overflow-hidden font-sans border-y border-slate-200/50">
      
      {/* --- PETROGAZ LIGHT DNA BACKGROUND --- */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-10 md:mb-14">
        <div className="mb-4">
            <span className="font-mono text-sm md:text-base tracking-[0.25em] text-amber-600 uppercase font-bold">
             Kemitraan Kami
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Perusahaan yang Telah <br className="md:hidden" />
            <span className="relative inline-block mt-1 md:mt-0 px-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                Bekerja Sama
              </span>
            </span>
          </h2>
        </div>

        {/* --- LOGO GRID --- */}
        {/* Menggunakan flex wrap dan justify-center agar logo selalu di tengah berapapun jumlahnya */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 w-full max-w-4xl">
          
          {PARTNERS.map((partner) => (
            <div 
              key={partner.id} 
              className="group relative flex items-center justify-center w-40 md:w-56 h-24 md:h-32 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-amber-400 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Fallback teks jika gambar belum ada (Hapus fallback ini jika gambar sudah dipasang) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-0 transition-opacity">
                <Hexagon className="w-8 h-8 text-slate-400" />
              </div>

              {/* Komponen Gambar Logo */}
              <div className="relative w-3/4 h-3/4 flex items-center justify-center">
                <Image
                  src={partner.logoUrl}
                  alt={`Logo ${partner.name}`}
                  fill
                  className="object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          ))}

          {/* --- PLACEHOLDER TAMBAHAN (Opsional) --- */}
          {/* Hapus bagian ini nanti jika Anda hanya ingin menampilkan logo asli */}
          {/* <div className="flex items-center justify-center w-40 md:w-56 h-24 md:h-32 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest text-center px-4">
              Lebih Banyak Mitra Mendatang
            </span>
          </div> */}

        </div>

      </div>
    </section>
  );
}