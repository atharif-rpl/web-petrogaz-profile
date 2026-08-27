'use client';

import { CreditCard, Building2, ShieldCheck, CalendarDays, ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const FEES = [
  { 
    id: 1,
    label: 'Biaya Pendaftaran', 
    value: 'Rp 500.000', 
    icon: CreditCard 
  },
  { 
    id: 2,
    label: 'Uang Pendidikan & Lab', 
    value: 'Rp 15.000.000', 
    icon: Building2 
  },
  { 
    id: 3,
    label: 'Seragam & Perlengkapan K3', 
    value: 'Rp 2.000.000', 
    icon: ShieldCheck 
  },
  { 
    id: 4,
    label: 'SPP Bulanan', 
    value: 'Rp 1.500.000', 
    suffix: '/bulan',
    icon: CalendarDays 
  },
];

export default function Admission() {
  return (
    // Menggunakan h-[100dvh] dan min-h-[750px] agar pas 1 layar penuh
    <section className="relative w-full h-[100dvh] min-h-[750px] flex flex-col justify-center bg-[#040A12] overflow-hidden font-sans">
      
      {/* --- BACKGROUND AESTHETIC --- */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Padding vertikal (py) dikurangi agar konten pas di tengah layar */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 py-8">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-slate-300 uppercase font-bold">
              SPMB 2026/2027
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-3">
            Seleksi Penerimaan <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Murid Baru
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
            Daftarkan dirimu sekarang dan mulai perjalanan menuju karier cemerlang di industri migas.
          </p>
        </div>

        {/* --- FEES GRID (2x2) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-8">
          {FEES.map((fee) => {
            const Icon = fee.icon;
            return (
              <div 
                key={fee.id}
                // Padding di dalam kartu dikurangi dari p-6 menjadi p-5
                className="group relative flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-amber-500/30 hover:shadow-[0_10px_30px_-10px_rgba(245,158,11,0.2)] transition-all duration-300 ease-out overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />

                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#06101D] border border-white/10 flex items-center justify-center group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-slate-400 group-hover:text-amber-400 transition-colors" />
                </div>
                
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 font-medium tracking-wide mb-1">
                    {fee.label}
                  </span>
                  <div className="text-lg md:text-xl font-bold text-white tracking-tight flex items-baseline gap-1">
                    {fee.value}
                    {fee.suffix && (
                      <span className="text-xs md:text-sm text-slate-500 font-medium">
                        {fee.suffix}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- CALL TO ACTION BANNER --- */}
        {/* Padding banner dikurangi dari p-8 md:p-12 menjadi p-6 md:p-8 */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-[#0A1324] border border-amber-500/20 shadow-2xl p-6 md:p-8 text-center group">
          
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-amber-500/20 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Siap Bergabung?
            </h3>
            <p className="text-slate-400 text-sm font-light max-w-2xl mx-auto mb-6 leading-relaxed hidden md:block">
              Klik tombol pendaftaran di bawah atau gabung grup WhatsApp untuk informasi lengkap proses pendaftaran SPMB 2026/2027.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              {/* Primary Button */}
              <Link 
                href="https://docs.google.com/forms/d/e/1FAIpQLSePq6X-eKXwXLM84ql31Sj6BdRAdoDZpeLBU9XFDkZRnP4gog/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Daftar Sekarang
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              {/* Secondary Button */}
              <Link 
                href="/whatsapp"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                Join Group WhatsApp
              </Link>
            </div>
            
            <p className="text-[9px] md:text-[10px] text-slate-500 font-mono tracking-wide">
              *Ketentuan biaya, sertifikasi, magang, dan penempatan mengikuti kebijakan sekolah serta peraturan yang berlaku.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}