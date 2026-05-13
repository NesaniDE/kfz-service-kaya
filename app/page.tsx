import About from "@/components/About";
import Contact from "@/components/Contact";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import StickyMobileCta from "@/components/StickyMobileCta";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-24 lg:pb-0">
        <Hero />
        <Services />
        <About />
        <Gallery />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
