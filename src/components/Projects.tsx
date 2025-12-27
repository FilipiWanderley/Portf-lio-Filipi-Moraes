import { useEffect, useCallback, useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3-new.jpg";
import project4 from "@/assets/project-4.png";
import projectBoaforma from "@/assets/project-boaforma.png";
import projectDental from "@/assets/landing-page-dentista.png";
import projectLaw from "@/assets/aurum-advocacia.png";
import projectPizza from "@/assets/cardapio-pizza.png";
import projectCRM from "@/assets/crm-boa-forma.png";
import projectBlindagem from "@/assets/project-blindagem.png";
import projectPortfolioMain from "@/assets/project-portfolio-main.png";
import projectPortfolioOld from "@/assets/project-portfolio-old.png";
import projectGymBlue from "@/assets/project-gym-blue.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { Project } from "@/types";

const Projects = () => {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  
  const projects: Project[] = [
    {
      title: "Academia Boa Forma",
      category: "Landing Page",
      descriptionKey: "projects.boaforma.description",
      image: projectBoaforma,
      behanceUrl: "https://www.behance.net/gallery/240226767/Academia-Boa-Forma",
    },
    {
      title: "Conde Pizza e Delivery",
      category: "Social Media",
      descriptionKey: "projects.conde.description",
      image: project1,
      behanceUrl: "https://www.behance.net/gallery/215573187/Social-Media-Pizzaria",
    },
    {
      title: "Conecta +",
      category: "Social Media",
      descriptionKey: "projects.conecta.description",
      image: project2,
      behanceUrl: "https://www.behance.net/gallery/215468455/-Social-Media-Conecta-",
    },
    {
      title: "Veloce Motors",
      category: "Social Media",
      descriptionKey: "projects.veloce.description",
      image: project3,
      behanceUrl: "https://www.behance.net/gallery/211937351/Colecao-de-artes-Concessionaria",
    },
    {
      title: "CheckBank",
      category: "Social Media",
      descriptionKey: "projects.checkbank.description",
      image: project4,
      behanceUrl: "https://www.behance.net/gallery/211475065/SOCIAL-MEDIA-BANCO-DIGITAL",
    },
    {
      title: "Nossa Dental",
      category: "Landing Page",
      descriptionKey: "projects.dental.description",
      image: projectDental,
      behanceUrl: "https://www.behance.net/filipimoraes1",
    },
    {
      title: "Aurum Advocacia",
      category: "Institutional Site",
      descriptionKey: "projects.law.description",
      image: projectLaw,
      behanceUrl: "https://www.behance.net/filipimoraes1",
    },
    {
      title: "Pizzaria Bella",
      category: "Web App / Delivery",
      descriptionKey: "projects.pizza.description",
      image: projectPizza,
      behanceUrl: "https://www.behance.net/filipimoraes1",
    },
    {
      title: "CRM Boa Forma",
      category: "SaaS Dashboard",
      descriptionKey: "projects.crm.description",
      image: projectCRM,
      behanceUrl: "https://www.behance.net/filipimoraes1",
    },
    {
      title: "Blindagem 360",
      category: "Landing Page",
      descriptionKey: "projects.blindagem.description",
      image: projectBlindagem,
      behanceUrl: "https://www.behance.net/filipimoraes1",
    },
    {
      title: "Portfolio 2024",
      category: "Product Design",
      descriptionKey: "projects.portfolio_main.description",
      image: projectPortfolioMain,
      behanceUrl: "https://www.behance.net/filipimoraes1",
    },
    {
      title: "Portfolio V1",
      category: "UX/UI Design",
      descriptionKey: "projects.portfolio_old.description",
      image: projectPortfolioOld,
      behanceUrl: "https://www.behance.net/filipimoraes1",
    },
    {
      title: "Bruno Canell",
      category: "Landing Page",
      descriptionKey: "projects.gym_blue.description",
      image: projectGymBlue,
      behanceUrl: "https://www.behance.net/filipimoraes1",
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
    }, 3000);

    return () => clearInterval(intervalId);
  }, [api, scrollNext]);

  return (
    <section id="projects" className="section-spacing relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-sm font-medium text-accent">03</span>
            <span className="text-sm font-medium text-accent">{t("projects.label")}</span>
          </div>
          <h2 className="leading-tight">
            {t("projects.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mb-12"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={project.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-card overflow-hidden group cursor-pointer block h-full"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      style={project.title === "Academia Boa Forma" ? { objectPosition: "left center" } : undefined}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium border border-accent/20">
                      {project.category}
                    </div>
                    {/* Hover overlay with button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-[var(--shadow-neon)]">
                        {t("projects.viewProject") || "Ver Projeto"}
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {t(project.descriptionKey)}
                    </p>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 border-accent/20 hover:border-accent hover:bg-accent/10" />
          <CarouselNext className="hidden md:flex -right-12 border-accent/20 hover:border-accent hover:bg-accent/10" />
        </Carousel>

        <div className="text-center flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-xl px-8 py-6 text-lg bg-accent hover:bg-accent/90 shadow-[var(--shadow-neon)] transition-all duration-300"
          >
            <a
              href="https://www.behance.net/filipimoraes1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              {t("projects.cta")}
              <ExternalLink className="h-5 w-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-xl px-8 py-6 text-lg border-2 border-accent/30 hover:border-accent hover:bg-accent/5 transition-all duration-300"
          >
            <a
              href="https://github.com/FilipiWanderley"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              {t("projects.ctaGithub")}
              <Github className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom dashed line */}
      <div className="absolute bottom-0 left-0 right-0 dashed-line" />
    </section>
  );
};

export default Projects;