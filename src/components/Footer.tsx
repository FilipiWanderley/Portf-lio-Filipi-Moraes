import { Github, Linkedin, Mail, MapPin, Heart } from "lucide-react";
import logo from "@/assets/logo.svg";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/filipimoraes/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/FilipiWanderley", label: "GitHub" },
    { icon: Mail, href: "mailto:filipiwms@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-foreground text-background section-spacing relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--background)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="space-y-6">
            <img src={logo} alt="Filipi Moraes" className="h-48 w-auto brightness-0" />
            <p className="text-background/70 leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30">
              <span className="text-base font-medium text-accent">05</span>
              <span className="text-base font-medium text-accent">{t("footer.contact")}</span>
            </div>
            {/* Increased text size for accessibility */}
            <div className="space-y-3 text-base text-background/80 pt-4">
              <a 
                href="mailto:filipiwms@gmail.com" 
                className="flex items-center gap-3 hover:text-accent transition-colors duration-300"
              >
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                filipiwms@gmail.com
              </a>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                Recife, Brasil
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("footer.connect")}</h3>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-xl bg-background/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-neon)] border border-background/10 hover:border-accent"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar - improved text contrast */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-base text-background/80">
            <p>{t("footer.copyright")}</p>
            <p className="flex items-center gap-2">
              {t("footer.madeWith") || "Feito com"} 
              <Heart className="h-4 w-4 text-accent fill-accent" aria-hidden="true" /> 
              {t("footer.tagline")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
