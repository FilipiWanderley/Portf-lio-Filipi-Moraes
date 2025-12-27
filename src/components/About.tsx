import { Code, Palette, Users, Zap, GraduationCap, Briefcase } from "lucide-react";
import aboutImage from "@/assets/about-filipi-new.png";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  const skills = [
    { icon: Palette, labelKey: "about.skill.uxui" },
    { icon: Code, labelKey: "about.skill.web" },
    { icon: Users, labelKey: "about.skill.research" },
    { icon: Zap, labelKey: "about.skill.agile" },
  ];

  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-base font-medium text-accent">01</span>
            <span className="text-base font-medium text-accent">{t("about.label")}</span>
          </div>
          <h2 className="leading-tight">
            {t("about.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Image Section */}
          <div className="relative animate-fade-in">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden neon-card">
              <img 
                src={aboutImage} 
                alt="Filipi Moraes"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Decorative badge - improved text size */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-[var(--shadow-premium)] border-2 border-accent/20">
              <div className="text-center">
                <span className="text-3xl font-bold neon-text">9+</span>
                <p className="text-base text-muted-foreground">{t("about.years") || "Anos de Experiência"}</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-medium">
                  {t("about.intro")}
                </span>
              </p>
              
              <p>
                {t("about.description")}
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.labelKey}
                  className="premium-card p-6 group cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                    <skill.icon className="h-6 w-6 text-accent transition-transform group-hover:scale-110" aria-hidden="true" />
                  </div>
                  {/* Increased from text-sm to text-base for better readability */}
                  <p className="text-base font-medium">{t(skill.labelKey)}</p>
                </div>
              ))}
            </div>

            {/* Experience & Education */}
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="premium-card p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-medium">{t("about.education")}</h3>
                </div>
                {/* Increased from text-sm to text-base for accessibility */}
                <div className="space-y-2 text-base text-muted-foreground">
                  <p className="leading-relaxed">
                    <span className="text-foreground">{t("about.edu.software")}</span> — UNIFATECIE (2023-2027)
                  </p>
                  <p className="leading-relaxed">
                    <span className="text-foreground">{t("about.edu.product_design")}</span> — UniFatecie (2024)
                  </p>
                  <p className="leading-relaxed">
                    <span className="text-foreground">{t("about.edu.systems")}</span> — AESO Barros Melo (2015)
                  </p>
                  <p className="leading-relaxed text-accent">
                    {t("about.edu.uxui")}
                  </p>
                </div>
              </div>

              <div className="premium-card p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-accent-secondary/10 flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-accent-secondary" />
                  </div>
                  <h3 className="text-lg font-medium">{t("about.experience")}</h3>
                </div>
                {/* Increased from text-sm to text-base for accessibility */}
                <div className="space-y-2 text-base text-muted-foreground">
                  <p className="leading-relaxed">
                    <span className="text-foreground">{t("about.exp.freelancer")}</span> — {t("about.exp.freelancer.company")} (2016-Atual)
                  </p>
                  <p className="leading-relaxed">
                    <span className="text-foreground">{t("about.exp.graphic")}</span> — {t("about.exp.graphic.company")} (2025)
                  </p>
                  <p className="leading-relaxed">
                    <span className="text-foreground">{t("about.exp.product")}</span> — {t("about.exp.product.company")} (2024)
                  </p>
                  <p className="leading-relaxed">
                    <span className="text-foreground">{t("about.exp.ux")}</span> — {t("about.exp.ux.company")} (2023-2024)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom dashed line */}
      <div className="absolute bottom-0 left-0 right-0 dashed-line" />
    </section>
  );
};

export default About;