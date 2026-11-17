import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Intro from "@/components/Intro"; // <-- Import komponen Intro
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Petrogaz Bilingual School | Mencetak Insinyur Migas",
  description: "Sekolah vokasi bilingual berbasis praktik industri migas terdepan. Siap mencetak teknokrat muda berstandar global.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#040A12] text-slate-300 overflow-x-hidden flex flex-col min-h-screen">
        
       
        <Intro />
        <Navbar /> 
        
        {/* LAYER 3: Konten Utama Halaman */}
        <div className="flex-grow">
          {children}
        </div>
        
        {/* LAYER 4: Footer */}
        <Footer />
        
      </body>
    </html>
  );
}