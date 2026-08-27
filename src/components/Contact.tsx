'use client';

import { MapPin, Phone, MessageSquare, ArrowRight, Hexagon } from 'lucide-react';
import Link from 'next/link';

const CONTACTS = [
  {
    id: 'alamat',
    title: 'Alamat Kampus',
    value: 'Cibubur Country Boulevar Blok RBOJ No 5 - Cikeas, Gunung Putri, Kab. Bogor, Jawa Barat',
    icon: MapPin,
    actionText: 'Buka di Google Maps',
    link: 'https://maps.google.com', // Ganti dengan link GMaps asli
  },
  {
    id: 'aminudin',
    title: 'Bapak Aminudin',
    value: '0812 1221 7144',
    icon: Phone,
    actionText: 'Hubungi via Telepon',
    link: 'tel:+6281212217144',
  },
  {
    id: 'mey',
    title: 'Ibu Mey',
    value: '0813 111 555 76',
    icon: MessageSquare,
    actionText: 'Chat via WhatsApp',
    link: 'https://wa.me/6281311155576',
  },
];

export default function Contact() {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#FAFAFA] overflow-hidden font-sans">

      {/* --- PETROGAZ LIGHT DNA BACKGROUND --- */}
      {/* Ukuran grid disamakan menjadi 40px_40px dan warna rgba(15,23,42,0.03) persis seperti section lainnya */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-[85rem] mx-auto px-6 md:px-12">

        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center mb-16">
        <div className="mb-4">
            <span className="font-mono text-sm md:text-base tracking-[0.25em] text-amber-600 uppercase font-bold">
             Hubungi Kami
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Informasi <br className="md:hidden" />
            <span className="relative inline-block mt-2 px-2">
              <span className="relative z-10 text-slate-900">Kontak.</span>
              {/* Highlight miring khas Petrogaz */}
              <span className="absolute bottom-2 left-0 w-full h-[35%] bg-amber-400/50 -z-10 -rotate-1 skew-x-[-10deg] rounded-sm" />
            </span>
          </h2>
        </div>

        {/* --- CONTACT GRID (3 Kolom) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {CONTACTS.map((contact) => {
            const Icon = contact.icon;
            return (
              <Link
                key={contact.id}
                href={contact.link}
                target={contact.id === 'alamat' ? "_blank" : "_self"}
                className="group relative flex flex-col items-center text-center p-8 lg:p-10 rounded-[2rem] bg-white border border-slate-200 hover:border-amber-400 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.15)] transition-all duration-300 ease-out hover:-translate-y-1 overflow-hidden"
              >
                {/* Aksen atas saat di hover */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100 group-hover:bg-amber-400 transition-colors duration-300" />

                {/* Ikon Container */}
                <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-100 transition-transform duration-300 shadow-sm">
                  <Icon className="w-7 h-7 text-amber-500" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {contact.title}
                </h3>

                <p className="text-slate-500 text-sm md:text-base leading-relaxed flex-grow">
                  {contact.value}
                </p>

                {/* Micro-interaction: Teks Aksi yang muncul/bergeser saat hover */}
                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-amber-500 transition-colors">
                  {contact.actionText}
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}