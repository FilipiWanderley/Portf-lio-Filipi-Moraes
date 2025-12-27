import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import TechBackground from "@/components/TechBackground";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <TechBackground />
      <div className="relative z-10">
        <LanguageSwitcher />
        <Hero />
        <About />
        <Specialties />
        <TechStack />
        <Projects />
        <Testimonials />
        <Footer />
        <WhatsAppButton />
      </div>
    </main>
  );
};

export default Index;
