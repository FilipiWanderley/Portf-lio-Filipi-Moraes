import { useEffect, useCallback, useState } from "react";
import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import avatarAna from "@/assets/testimonial-ana.png";
import avatarCarlos from "@/assets/testimonial-carlos.png";
import avatarMariana from "@/assets/testimonial-mariana.png";
import avatarPersonal from "@/assets/testimonial-personal.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  
  const testimonials = [
    {
      name: "Renan Barbosa",
      role: "CEO, Academia Boa Forma",
      textKey: "testimonials.boaforma",
      avatar: avatarPersonal,
    },
    {
      name: "Ana Silva",
      role: "CEO, TechStart",
      textKey: "testimonials.ana",
      avatar: avatarAna,
    },
    {
      name: "Carlos Mendes",
      role: "CTO, DataFlow",
      textKey: "testimonials.carlos",
      avatar: avatarCarlos,
    },
    {
      name: "Mariana Costa",
      role: "Product Manager, FinTech Pro",
      textKey: "testimonials.mariana",
      avatar: avatarMariana,
    },
  ];

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      scrollNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [api, scrollNext]);

  return (
    <section className="section-spacing bg-secondary/50 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-sm font-medium text-accent">04</span>
            <span className="text-sm font-medium text-accent">{t("testimonials.label")}</span>
          </div>
          <h2 className="leading-tight">
            {t("testimonials.title")}
          </h2>
          <div className="flex items-center justify-center gap-1 pt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-accent fill-accent" />
            ))}
            <span className="ml-2 text-muted-foreground text-sm">5.0 / 5.0</span>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div
                  className="premium-card p-8 space-y-6 h-full group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <Quote className="h-10 w-10 text-accent/30 group-hover:text-accent/50 transition-colors" />
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    "{t(testimonial.textKey)}"
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-accent/20 group-hover:border-accent/50 transition-colors">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold group-hover:text-accent transition-colors">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 border-accent/20 hover:border-accent hover:bg-accent/10" />
          <CarouselNext className="hidden md:flex -right-12 border-accent/20 hover:border-accent hover:bg-accent/10" />
        </Carousel>
      </div>

      {/* Bottom dashed line */}
      <div className="absolute bottom-0 left-0 right-0 dashed-line" />
    </section>
  );
};

export default Testimonials;