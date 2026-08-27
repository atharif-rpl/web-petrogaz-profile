// Di dalam app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Partnership from "@/components/Partnership"; // <-- Import file baru
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Admission from "@/components/Admission";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <About />
      <WhyChooseUs />
      <Gallery />
      <Admission />  
      <Contact />
      <Partnership /> {/* <-- Letakkan di sini */}
    </main>
  );
}