'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

// --- INLINE SVG ICONS UNTUK SOCIAL MEDIA ---
// Mengatasi error "Module not found" dari lucide-react versi terbaru
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full pt-20 pb-8 bg-[#02060C] overflow-hidden font-sans border-t border-white/5">
      
      {/* --- BACKGROUND AESTHETIC --- */}
      {/* Tech Grid sangat tipis untuk menjaga DNA */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Ambient Glow di sudut bawah */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Garis Aksen Oranye di batas atas footer (pudar di ujung) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="relative z-10 w-full max-w-[85rem] mx-auto px-6 md:px-12">
        
        {/* --- MAIN FOOTER GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Kolom 1: Brand & Deskripsi (Lebar 4 Kolom) */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col">
            <Link href="/" className="inline-block mb-6 group">
              <span className="font-sans font-extrabold text-3xl text-white tracking-tight group-hover:text-slate-200 transition-colors">
                PETROGAZ<span className="text-amber-500">.</span>
              </span>
              <br />
              <span className="font-mono text-[10px] tracking-[0.2em] text-slate-400 uppercase">
                Bilingual School
              </span>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              Mencetak teknokrat muda dan insinyur berstandar global. Mengintegrasikan kurikulum bilingual dengan praktik lantai industri nyata.
            </p>

            {/* Social Media Glassmorphism Icons */}
            <div className="flex items-center gap-4">
              {[
                { icon: InstagramIcon, link: '#' },
                { icon: FacebookIcon, link: '#' },
                { icon: YoutubeIcon, link: '#' },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={idx} 
                    href={social.link}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-500 hover:border-amber-400 hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <Icon className="w-4 h-4 text-slate-300 group-hover:text-slate-900 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Kolom 2: Quick Links (Lebar 2 Kolom) */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-amber-500" />
              Navigasi
            </h4>
            <ul className="flex flex-col gap-4">
              {['Beranda', 'Tentang Kami', 'Akademik', 'Galeri', 'Kontak'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Program & Info (Lebar 3 Kolom) */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-amber-500" />
              Program Utama
            </h4>
            <ul className="flex flex-col gap-4">
              {['Kelas Bilingual', 'Praktik Workshop Migas', 'Sertifikasi BNSP', 'Bimbingan Karier'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 4: Hubungi Kami (Lebar 3 Kolom) */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-amber-500" />
              Kontak Singkat
            </h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3 group">
                <div className="mt-0.5 p-2 rounded-md bg-white/5 border border-white/10 group-hover:border-amber-500/50 transition-colors">
                  <MapPin className="w-4 h-4 text-slate-300 group-hover:text-amber-500" />
                </div>
                <span className="text-sm text-slate-400 leading-relaxed">
                  Cibubur Country Boulevar Blok RBOJ No 5, Kab. Bogor, Jawa Barat.
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-md bg-white/5 border border-white/10 group-hover:border-amber-500/50 transition-colors">
                  <Phone className="w-4 h-4 text-slate-300 group-hover:text-amber-500" />
                </div>
                <span className="text-sm text-slate-400">
                  0812 1221 7144 (Bpk. Aminudin)
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-md bg-white/5 border border-white/10 group-hover:border-amber-500/50 transition-colors">
                  <Mail className="w-4 h-4 text-slate-300 group-hover:text-amber-500" />
                </div>
                <span className="text-sm text-slate-400">
                  info@petrogazschool.com
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-mono">
            &copy; {currentYear} Petrogaz Bilingual School. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-slate-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}