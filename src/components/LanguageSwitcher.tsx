import { useLanguage } from "@/contexts/LanguageContext";

const BrazilFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-5 h-4 rounded-sm">
    <path fill="#229e45" d="M0 0h640v480H0z"/>
    <path fill="#f8e509" d="m321.4 436 301.5-195.7L319.6 44 17.1 240.7z"/>
    <circle fill="#2b49a3" cx="320" cy="240" r="90"/>
    <path fill="#fff" d="M230 217.4c32.5-37.5 82.6-50.4 128.3-36.3 5.3-8.3 11.5-16.1 18.4-23.2-56.1-19.9-119 0-160.3 49.5z"/>
  </svg>
);

const USAFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-5 h-4 rounded-sm">
    <path fill="#bd3d44" d="M0 0h640v480H0"/>
    <path stroke="#fff" strokeWidth="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"/>
    <path fill="#192f5d" d="M0 0h364.8v258.5H0"/>
    <marker id="us-a" markerHeight="30" markerWidth="30"><path fill="#fff" d="m14 0 9 27L0 10h28L5 27z"/></marker>
    <path fill="none" markerMid="url(#us-a)" d="m0 0 16 11h61 61 61 61 61L47 37h61 61 61 61m-244 26h61 61 61 61 61L47 89h61 61 61 61m-244 26h61 61 61 61 61L47 141h61 61 61 61m-244 26h61 61 61 61 61L47 193h61 61 61 61m-244 26h61 61 61 61 61"/>
  </svg>
);

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-background/80 backdrop-blur-md rounded-full px-3 py-2 border border-border shadow-lg">
      <button
        onClick={() => setLanguage("pt")}
        className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
          language === "pt" 
            ? "ring-2 ring-accent scale-110" 
            : "opacity-60 hover:opacity-100 hover:scale-105"
        }`}
        aria-label="Português"
      >
        <BrazilFlag />
      </button>
      <div className="w-px h-4 bg-border" />
      <button
        onClick={() => setLanguage("en")}
        className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
          language === "en" 
            ? "ring-2 ring-accent scale-110" 
            : "opacity-60 hover:opacity-100 hover:scale-105"
        }`}
        aria-label="English"
      >
        <USAFlag />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
