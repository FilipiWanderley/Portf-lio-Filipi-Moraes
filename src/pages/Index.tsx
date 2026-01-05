
import RainingLetters from "@/components/ui/modern-animated-hero-section";
import Specialties from "@/components/Specialties";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import TechBackground from "@/components/TechBackground";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Home() {
  return (
    <main className="relative">
      <div className="absolute top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      
      {/* Novo Hero com efeito Matrix Azul */}
      <RainingLetters />
      
      {/* Conteúdo Original Restaurado */}
      <Specialties />
      <Projects />
      <div className="relative">
        <TechBackground />
        <TechStack />
      </div>
      <About />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
