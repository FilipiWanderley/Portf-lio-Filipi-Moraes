export interface Project {
  title: string;
  category: string;
  descriptionKey: string;
  image: string;
  behanceUrl: string;
}

export interface Testimonial {
  name: string;
  role: string;
  textKey: string;
  avatar: string;
}

export type Language = "pt" | "en";

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}
