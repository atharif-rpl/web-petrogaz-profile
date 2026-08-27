'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, Globe2, ShieldCheck, Zap, Briefcase } from 'lucide-react';

const STATS = [
    { value: 'Migas', label: 'Standar Industri', icon: Zap },
    { value: 'Bilingual', label: 'Program Bahasa', icon: Globe2 },
    { value: 'BNSP', label: 'Sertifikasi Resmi', icon: ShieldCheck },
    { value: '100%', label: 'Praktik Industri', icon: Briefcase },
];

export default function Hero() {
    return (
        <section className="relative w-full h-[100dvh] flex flex-col font-sans overflow-hidden bg-[#040A12]">

            {/* --- LAYER 1: FULLSCREEN BACKGROUND IMAGE --- */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/fotokilang.jpg" // Foto akan tampil penuh warna
                    alt="Siswa dan Fasilitas Petrogaz"
                    fill
                    priority
                    className="object-cover object-center opacity-90"
                />
                {/* Gradient Masking Utama */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#040A12] via-[#040A12]/80 to-[#040A12]/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040A12] via-transparent to-transparent opacity-90" />
            </div>

            {/* --- LAYER 2: PETROGAZ ULTIMATE DNA (Grid & Glow) --- */}
            <div className="absolute inset-0 z-[1] pointer-events-none">
                {/* Tech Grid dengan Edge Fading */}
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
                        backgroundSize: '32px 32px',
                        WebkitMaskImage: 'radial-gradient(circle at left center, black 20%, transparent 80%)',
                        maskImage: 'radial-gradient(circle at left center, black 20%, transparent 80%)'
                    }}
                />
                {/* Ambient Glows */}
                <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full" />
                <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-amber-500/15 blur-[150px] rounded-full" />
            </div>

            {/* --- LAYER 3: MAIN CONTENT (Golden Ratio ~60% Kiri) --- */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col h-full justify-between">

                {/* Area Tipografi */}
                <div className="flex-1 flex flex-col justify-center lg:max-w-[60%] pt-16">

                    {/* Badge Status (Pulsing Dot DNA) */}
                    <div className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md w-fit shadow-lg hover:bg-white/10 transition-colors">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                        </span>
                        <span className="font-mono text-[10px] md:text-xs text-slate-300 tracking-[0.2em] uppercase font-bold">
                            SPMB 2026/2027 Dibuka
                        </span>
                        <ArrowRight className="w-3 h-3 text-amber-500 group-hover:translate-x-1 transition-transform ml-1" />
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-white leading-[1.08] tracking-tight drop-shadow-lg">
                        Masa Depanmu di <br />
                        {/* Highlight Oranye Signature Petrogaz (-skew-x-12) */}
                        <span className="relative inline-block mt-2">
                            <span className="relative z-10 text-white px-2">Industri Migas</span>
                            <span className="absolute bottom-1 left-0 w-full h-[35%] bg-amber-500/90 -z-10 -skew-x-12 rounded-sm" />
                        </span> <br />
                        Dimulai di Sini.
                    </h1>

                    <p className="mt-7 text-base md:text-lg text-slate-300 max-w-lg leading-relaxed font-light drop-shadow-md">
                        Tinggalkan kelas tradisional. Kami mengintegrasikan kurikulum bilingual dengan lantai praktik industri untuk mencetak insinyur muda yang siap direkrut.
                    </p>

                    {/* Tombol Aksi */}
                    <div className="flex flex-wrap items-center gap-5 mt-10">
                        <Link
                            href="https://docs.google.com/forms/d/e/1FAIpQLSePq6X-eKXwXLM84ql31Sj6BdRAdoDZpeLBU9XFDkZRnP4gog/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-slate-950 font-bold text-sm overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_30px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.5)] border border-amber-400"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            <span className="relative flex items-center gap-2">
                                Daftar Sekarang
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <Link
                            href="/program"
                            className="group flex items-center gap-3 px-6 py-4 rounded-full text-white text-sm font-medium hover:bg-white/10 transition-colors backdrop-blur-md border border-white/10"
                        >
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-amber-500/20 group-hover:border-amber-500/50 transition-all border border-transparent">
                                <Play className="w-3 h-3 ml-0.5 fill-current text-slate-300 group-hover:text-amber-400" />
                            </div>
                            Lihat Program
                        </Link>
                    </div>
                </div>

                {/* --- LAYER 4: BOTTOM GLASS DOCK --- */}
                <div className="flex-none pb-6 lg:pb-8 w-full relative z-20">
                    <div className="w-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center shadow-2xl relative overflow-hidden">

                        {/* Ambient inner glow pada dock */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

                        {STATS.map((stat, idx) => {
                            const Icon = stat.icon;
                            return (
                                <div key={idx} className="flex items-center gap-4 w-full md:w-auto group cursor-default hover:-translate-y-1 transition-transform duration-300">
                                    {/* Ikon dengan interaksi DNA */}
                                    <div className="p-3 rounded-xl bg-[#040A12]/50 border border-white/10 group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-all duration-300 shadow-inner">
                                        <Icon className="w-5 h-5 text-amber-500 group-hover:text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="text-xl font-bold text-white tracking-tight drop-shadow-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-amber-200 transition-colors">
                                            {stat.value}
                                        </div>
                                        <div className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold mt-0.5 group-hover:text-slate-300 transition-colors">
                                            {stat.label}
                                        </div>
                                    </div>

                                    {/* Garis pemisah antar item (hanya desktop) */}
                                    {idx !== STATS.length - 1 && (
                                        <div className="hidden md:block w-px h-10 bg-white/10 mx-6 lg:mx-10" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}