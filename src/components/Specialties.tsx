import { Layers, Monitor, Search, Workflow, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Specialties = () => {
  const { t } = useLanguage();
  
  const specialties = [
    {
      icon: Layers,
      titleKey: "specialties.ux.title",
      descriptionKey: "specialties.ux.description",
      color: "accent",
      step: "01"
    },
    {
      icon: Monitor,
      titleKey: "specialties.ui.title",
      descriptionKey: "specialties.ui.description",
      color: "accent-secondary",
      step: "02"
    },
    {
      icon: Search,
      titleKey: "specialties.frontend.title",
      descriptionKey: "specialties.frontend.description",
      color: "accent",
      step: "03"
    },
    {
      icon: Workflow,
      titleKey: "specialties.backend.title",
      descriptionKey: "specialties.backend.description",
      color: "accent-secondary",
      step: "04"
    },
  ];

  return (
    <section className="section-spacing bg-secondary/50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container-custom relative z-10">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-base font-medium text-accent">02</span>
            <span className="text-base font-medium text-accent">{t("specialties.label")}</span>
          </div>
          <h2 className="leading-tight">
            {t("specialties.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("specialties.subtitle")}
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((specialty, index) => (
            <div
              key={specialty.titleKey}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connector line */}
              {index < specialties.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 border-t-2 border-dashed border-accent/20 z-0" />
              )}
              
              <div className="premium-card p-8 space-y-4 relative z-10 h-full">
                {/* Step number - increased size for accessibility */}
                <div className="absolute -top-3 -right-3 h-9 w-9 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-base font-bold shadow-[var(--shadow-neon)]">
                  {specialty.step}
                </div>

                <div className={`h-16 w-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                  specialty.color === 'accent' 
                    ? 'bg-accent/10 group-hover:bg-accent/20' 
                    : 'bg-accent-secondary/10 group-hover:bg-accent-secondary/20'
                }`}>
                  <specialty.icon className={`h-8 w-8 ${specialty.color === 'accent' ? 'text-accent' : 'text-accent-secondary'}`} aria-hidden="true" />
                </div>
                
                <h3 className="text-xl font-semibold">
                  {t(specialty.titleKey)}
                </h3>
                
                {/* Increased text size for accessibility */}
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t(specialty.descriptionKey)}
                </p>

                <div className={`flex items-center gap-2 text-base font-medium ${specialty.color === 'accent' ? 'text-accent' : 'text-accent-secondary'} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <span>{t("specialties.learnMore") || "Saiba mais"}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom dashed line */}
      <div className="absolute bottom-0 left-0 right-0 dashed-line" />
    </section>
  );
};

export default Specialties;