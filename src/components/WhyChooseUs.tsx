'use client';

import { 
  Settings, 
  Factory, 
  Users, 
  BookOpen, 
  Award, 
  Briefcase, 
  MessageSquare, 
  ShieldCheck, 
  FlaskConical, 
  Handshake 
} from 'lucide-react';

const FEATURES = [
  { id: '01', text: 'Pembelajaran berbasis praktik industri migas', icon: Settings },
  { id: '02', text: 'KBM di lingkungan workshop berstandar industri', icon: Factory },
  { id: '03', text: 'Instruktur dari praktisi industri migas', icon: Users },
  { id: '04', text: 'Kurikulum terintegrasi kebutuhan industri', icon: BookOpen },
  { id: '05', text: 'Sertifikasi kompetensi BNSP/LSP Migas', icon: Award },
  { id: '06', text: 'Magang & pembelajaran berbasis proyek', icon: Briefcase },
  { id: '07', text: 'Pembinaan bahasa Inggris aktif', icon: MessageSquare },
  { id: '08', text: 'Pembekalan kompetensi kerja industri', icon: ShieldCheck },
  { id: '09', text: 'Fasilitas laboratorium berstandar industri', icon: FlaskConical },
  { id: '10', text: 'Pendampingan karier & peluang kerja migas', icon: Handshake },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-center py-16 bg-[#040A12] overflow-hidden font-sans">
      
      {/* --- PETROGAZ ULTIMATE DNA BACKGROUND --- */}
      {/* 1. Tech Grid dengan Edge Fading (Memudar di tepi) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
        }}
      />
      
      {/* 2. Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-[85rem] mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm shadow-lg">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-slate-300 uppercase font-bold">
              Keunggulan Kami
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Mengapa Memilih <br className="md:hidden" />
            {/* Signature Skewed Marker Petrogaz */}
            <span className="relative inline-block mt-2 px-2">
              <span className="relative z-10 text-white">PETROGAZ?</span>
              <span className="absolute bottom-2 left-0 w-full h-[35%] bg-amber-500/80 -z-10 -skew-x-12 rounded-sm" />
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-light max-w-lg mx-auto">
            10 fondasi komprehensif yang menjadikan kami berbeda dan selangkah lebih maju dari institusi vokasi lainnya.
          </p>
        </div>

        {/* --- GRID 5x2 (DNA Premium Glassmorphism) --- */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.id} 
                className="group relative flex flex-col bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_30px_-10px_rgba(245,158,11,0.2)]"
              >
                {/* 1. Watermark Angka di Latar Kartu */}
                <div className="absolute right-3 bottom-0 text-6xl font-black text-white/[0.02] group-hover:text-amber-500/10 transition-colors duration-500 pointer-events-none select-none">
                  {feature.id}
                </div>

                {/* 2. Shimmer Effect saat Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />

                <div className="mb-6 relative z-10">
                  {/* Container Ikon */}
                  <div className="w-12 h-12 rounded-xl bg-[#06101D] border border-white/10 flex items-center justify-center group-hover:bg-amber-500/20 group-hover:border-amber-500/50 transition-all duration-300 shadow-inner">
                    <Icon className="w-6 h-6 text-slate-400 group-hover:text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                
                {/* Teks Keunggulan */}
                <h4 className="relative z-10 text-[13px] md:text-sm font-semibold text-slate-300 leading-relaxed group-hover:text-white transition-colors pr-2">
                  {feature.text}
                </h4>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}