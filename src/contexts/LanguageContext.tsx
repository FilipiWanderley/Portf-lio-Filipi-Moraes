import { createContext, useContext, useState, ReactNode } from "react";
import { Language, LanguageContextType } from "../types";

const translations = {
  pt: {
    // Hero
    "hero.portfolio": "Portfólio",
    "hero.greeting": "Olá, eu sou o",
    "hero.role": "Product Designer & Desenvolvedor Full-Stack",
    "hero.description": "Criando experiências de usuário centradas e entregando código otimizado. Preencho a lacuna entre Design e Engenharia.",
    "hero.cta": "Ver Projetos",
    "hero.available": "Disponível para projetos",
    "hero.contact": "Fale Comigo",
    
    // About
    "about.label": "Sobre Mim",
    "about.title": "Criando pontes entre Design e Código",
    "about.intro": "Sou Filipi, Engenheiro de Software em formação com foco em Design de Produto (UI/UX).",
    "about.description": "Minha principal habilidade é criar experiências de usuário centradas, validá-las por meio de pesquisa e, em seguida, entregar o código otimizado para Front-end e Back-end. Eu preencho a lacuna entre Design e Engenharia, garantindo que a experiência criada seja implementada com qualidade, performance e escalabilidade.",
    "about.skill.uxui": "UX/UI Design",
    "about.skill.web": "Desenvolvimento Web",
    "about.skill.research": "Pesquisa com Usuários",
    "about.skill.agile": "Metodologias Ágeis",
    "about.education": "Educação",
    "about.experience": "Experiência",
    "about.edu.software": "Engenharia de Software",
    "about.edu.product_design": "Tecnólogo em Design de Produto",
    "about.edu.systems": "Bacharel em Sistemas de Informação",
    "about.edu.uxui": "Certificação em UX/UI Design",
    "about.exp.freelancer": "UX/UI Designer & Dev",
    "about.exp.freelancer.company": "Freelancer",
    "about.exp.graphic": "Designer Gráfico",
    "about.exp.graphic.company": "Tante Comunicação",
    "about.exp.product": "Designer de Produto",
    "about.exp.product.company": "Grupo ECS",
    "about.exp.ux": "UX Designer",
    "about.exp.ux.company": "Sociedade Plural",
    "about.years": "Anos de Experiência",
    
    // Specialties
    "specialties.label": "Especialidades",
    "specialties.title": "Minhas Melhores Competências",
    "specialties.subtitle": "Combinando design thinking e desenvolvimento técnico para criar produtos digitais completos",
    "specialties.ux.title": "UX Design",
    "specialties.ux.description": "Pesquisa de usuário, arquitetura de informação e design centrado no humano para criar experiências intuitivas e eficazes.",
    "specialties.ui.title": "UI Design",
    "specialties.ui.description": "Interfaces visuais elegantes e sistemas de design escaláveis que equilibram estética e funcionalidade.",
    "specialties.frontend.title": "Front-end",
    "specialties.frontend.description": "Desenvolvimento responsivo e performático com React, TypeScript e as mais modernas tecnologias web.",
    "specialties.backend.title": "Back-end",
    "specialties.backend.description": "Arquiteturas robustas e escaláveis, APIs RESTful e integração de serviços para soluções completas.",
    "specialties.learnMore": "Saiba mais",
    
    // Tech Stack
    "techstack.label": "Tech Stack",
    "techstack.title": "Tecnologias que Domino",
    "techstack.subtitle": "Ferramentas e tecnologias que utilizo para criar experiências incríveis",
    
    // Projects
    "projects.label": "Portfólio",
    "projects.title": "Projetos Selecionados",
    "projects.subtitle": "Uma curadoria dos meus trabalhos mais relevantes em design e desenvolvimento",
    "projects.cta": "Ver Todos no Behance",
    "projects.ctaGithub": "Ver Todos no GitHub",
    "projects.viewProject": "Ver Projeto",
    "projects.boaforma.description": "Landing page moderna e responsiva para academia de musculação com design focado em conversão.",
    "projects.conde.description": "Criação de conteúdo visual para redes sociais de pizzaria com foco em engajamento e conversão.",
    "projects.conecta.description": "Campanha de marketing digital para provedor de internet com identidade visual vibrante.",
    "projects.veloce.description": "Peças promocionais para concessionária de veículos com foco em ofertas e lançamentos.",
    "projects.checkbank.description": "Materiais visuais para fintech de pagamentos e soluções bancárias digitais.",
    "projects.crm.description": "Dashboard administrativo para gestão de alunos e treinos de academia (SaaS).",
    "projects.blindagem.description": "Landing page corporativa focada em segurança da informação e proteção de dados.",
    "projects.portfolio_main.description": "Meu portfólio principal, destacando habilidades em Product Design e desenvolvimento Full-Stack.",
    "projects.portfolio_old.description": "Versão anterior do portfólio, focada em apresentação pessoal e projetos de design.",
    "projects.gym_blue.description": "Landing page moderna para academia, com planos e horários claros e design impactante.",
    "projects.project10.description": "Website corporativo para empresa de consultoria financeira.",
    "projects.project11.description": "App mobile para rastreamento de fitness e saúde pessoal.",
    "projects.project12.description": "Design de sistema (Design System) para escalabilidade de produtos digitais.",
    
    // Testimonials
    "testimonials.label": "Clientes Freelancer",
    "testimonials.title": "O Que Dizem Sobre Meus Projetos",
    "testimonials.boaforma": "A landing page ficou incrível! Design moderno e profissional que destacou nossa academia. O resultado superou nossas expectativas.",
    "testimonials.ana": "Filipi transformou completamente nossa experiência de produto. Sua capacidade de entender necessidades do usuário e traduzi-las em soluções elegantes é impressionante.",
    "testimonials.carlos": "Trabalhar com Filipi foi excepcional. Ele não apenas entrega designs lindos, mas também implementa com código limpo e eficiente. Um verdadeiro full-stack designer.",
    "testimonials.mariana": "A visão holística de Filipi sobre produto digital fez toda diferença. Ele conecta design, tecnologia e negócios de forma única.",
    
    // Footer
    "footer.description": "Criando experiências digitais que unem design elegante e código robusto.",
    "footer.contact": "Contato",
    "footer.connect": "Conecte-se",
    "footer.copyright": "© 2024 Filipi Moraes. Todos os direitos reservados.",
    "footer.tagline": "Construído com precisão e atenção aos detalhes.",
    "footer.madeWith": "Feito com",
  },
  en: {
    // Hero
    "hero.portfolio": "Portfolio",
    "hero.greeting": "Hi, I'm",
    "hero.role": "Product Designer & Full-Stack Developer",
    "hero.description": "Creating user-centered experiences and delivering optimized code. I bridge the gap between Design and Engineering.",
    "hero.cta": "View Projects",
    "hero.available": "Available for projects",
    "hero.contact": "Contact Me",
    
    // About
    "about.label": "About Me",
    "about.title": "Building bridges between Design and Code",
    "about.intro": "I'm Filipi, a Software Engineer in training with a focus on Product Design (UI/UX).",
    "about.description": "My main skill is creating user-centered experiences, validating them through research, and then delivering optimized code for Front-end and Back-end. I bridge the gap between Design and Engineering, ensuring that the created experience is implemented with quality, performance, and scalability.",
    "about.skill.uxui": "UX/UI Design",
    "about.skill.web": "Web Development",
    "about.skill.research": "User Research",
    "about.skill.agile": "Agile Methodologies",
    "about.education": "Education",
    "about.experience": "Experience",
    "about.edu.software": "Software Engineering",
    "about.edu.automation": "Industrial Automation Technician",
    "about.edu.systems": "Bachelor in Information Systems",
    "about.edu.uxui": "UX/UI Design Certification",
    "about.exp.freelancer": "UX/UI Designer & Dev",
    "about.exp.freelancer.company": "Freelancer",
    "about.exp.graphic": "Graphic Designer",
    "about.exp.graphic.company": "Tante Comunicação",
    "about.exp.product": "Product Designer",
    "about.exp.product.company": "Grupo ECS",
    "about.exp.ux": "UX Designer",
    "about.exp.ux.company": "Sociedade Plural",
    "about.years": "Years of Experience",
    
    // Specialties
    "specialties.label": "Specialties",
    "specialties.title": "My Best Skills",
    "specialties.subtitle": "Combining design thinking and technical development to create complete digital products",
    "specialties.ux.title": "UX Design",
    "specialties.ux.description": "User research, information architecture, and human-centered design to create intuitive and effective experiences.",
    "specialties.ui.title": "UI Design",
    "specialties.ui.description": "Elegant visual interfaces and scalable design systems that balance aesthetics and functionality.",
    "specialties.frontend.title": "Front-end",
    "specialties.frontend.description": "Responsive and performant development with React, TypeScript, and the most modern web technologies.",
    "specialties.backend.title": "Back-end",
    "specialties.backend.description": "Robust and scalable architectures, RESTful APIs, and service integration for complete solutions.",
    "specialties.learnMore": "Learn more",
    
    // Tech Stack
    "techstack.label": "Tech Stack",
    "techstack.title": "Technologies I Master",
    "techstack.subtitle": "Tools and technologies I use to create amazing experiences",
    
    // Projects
    "projects.label": "Portfolio",
    "projects.title": "Selected Projects",
    "projects.subtitle": "A curation of my most relevant work in design and development",
    "projects.cta": "View All on Behance",
    "projects.ctaGithub": "View All on GitHub",
    "projects.viewProject": "View Project",
    "projects.boaforma.description": "Modern and responsive landing page for gym focused on conversion-oriented design.",
    "projects.conde.description": "Visual content creation for pizzeria social media focused on engagement and conversion.",
    "projects.conecta.description": "Digital marketing campaign for internet provider with vibrant visual identity.",
    "projects.veloce.description": "Promotional pieces for car dealership focused on offers and launches.",
    "projects.checkbank.description": "Visual materials for fintech payments and digital banking solutions.",
    "projects.dental.description": "Complete landing page for dental clinic with online scheduling and specialty showcase.",
    "projects.law.description": "Sober and elegant institutional website for law firm, conveying authority and trust.",
    "projects.pizza.description": "Interactive digital menu for pizzeria with appetizing photos and easy ordering.",
    "projects.crm.description": "Administrative dashboard for gym student and workout management (SaaS).",
    "projects.project10.description": "Corporate website for financial consulting firm.",
    "projects.project11.description": "Mobile app for fitness tracking and personal health.",
    "projects.project12.description": "Design System for digital product scalability.",
    
    // Testimonials
    "testimonials.label": "Freelance Clients",
    "testimonials.title": "What They Say About My Projects",
    "testimonials.boaforma": "The landing page turned out amazing! Modern and professional design that highlighted our gym. The result exceeded our expectations.",
    "testimonials.ana": "Filipi completely transformed our product experience. His ability to understand user needs and translate them into elegant solutions is impressive.",
    "testimonials.carlos": "Working with Filipi was exceptional. He not only delivers beautiful designs but also implements with clean and efficient code. A true full-stack designer.",
    "testimonials.mariana": "Filipi's holistic vision of digital product made all the difference. He connects design, technology, and business in a unique way.",
    
    // Footer
    "footer.description": "Creating digital experiences that combine elegant design and robust code.",
    "footer.contact": "Contact",
    "footer.connect": "Connect",
    "footer.copyright": "© 2024 Filipi Moraes. All rights reserved.",
    "footer.tagline": "Built with precision and attention to detail.",
    "footer.madeWith": "Made with",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["pt"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
