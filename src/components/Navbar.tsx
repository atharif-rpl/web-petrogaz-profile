'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';

const LINKS = [
  { href: '/', label: 'Beranda' },
  { href: '/tentang', label: 'Tentang Kami' },
  { href: '/akademik', label: 'Akademik' },
  { href: '/kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY > 50) setOpen(false);
    };
    
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none">
      
      <nav
        className={`pointer-events-auto relative flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${scrolled
            ? 'w-[92%] md:w-[780px] mt-4 lg:mt-6 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] py-3 px-6' 
            : 'w-full max-w-7xl mt-0 bg-transparent border-b border-transparent rounded-none py-6 px-6 md:px-12'
        }`}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group z-10">
          <span className="font-sans font-extrabold text-xl md:text-2xl text-white tracking-tight transition-colors">
            PETROGAZ<span className="text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]">.</span>
          </span>
          <span className={`hidden lg:inline font-mono text-[10px] tracking-[0.2em] text-slate-400 uppercase transition-all duration-300 ${scrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 ml-2'}`}>
            Bilingual School
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative whitespace-nowrap px-4 py-2 text-sm font-medium text-slate-300 hover:text-amber-400 transition-all duration-300"
              >
                {link.label}
                {/* DNA Micro-interaction: Garis bawah glow saat hover */}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-amber-500 rounded-full transition-all duration-300 group-hover:w-1/2 opacity-0 group-hover:opacity-100 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
              </Link>
            </li>
          ))}
        </ul>

        {/* DESKTOP CTA BUTTON */}
        <div className="hidden md:block z-10">
          <Link
            href="/daftar"
            className={`flex items-center gap-2 rounded-full font-bold text-sm transition-all duration-300 whitespace-nowrap ${
              scrolled 
                ? 'bg-amber-500 text-slate-950 px-5 py-2 hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]' 
                : 'bg-white/5 text-white px-6 py-2.5 border border-white/10 hover:bg-amber-500 hover:text-slate-950 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]'
            }`}
          >
            Daftar SPMB
            {scrolled && <ChevronRight className="w-4 h-4" />}
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Buka menu"
          className="md:hidden p-2 -mr-2 text-slate-300 hover:text-amber-400 transition-colors"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* MOBILE MENU */}
        <div
          className={`absolute top-full left-0 w-full md:hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? 'opacity-100 translate-y-4 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          {/* Menggunakan warna background #040A12 yang sama persis dengan base layer website kita */}
          <div className="mx-auto w-full bg-[#040A12]/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-4 flex flex-col gap-2 relative overflow-hidden">
            
            {/* Ambient inner glow di atas menu mobile */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 font-medium text-base text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-xl transition-all"
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px w-full bg-white/10 my-2" />
            <Link
              href="/daftar"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-amber-500 text-slate-950 font-bold text-base hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all"
            >
              Daftar Sekarang
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}