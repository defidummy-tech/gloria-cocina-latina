import { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const INSTAGRAM_URL = "https://www.instagram.com/gloriacocinalatina";

const sectionIds = ["ueber-mich", "kueche", "anlaesse", "galerie", "kontakt"];
const navLabels = {
  "ueber-mich": "Über mich",
  kueche: "Küche",
  anlaesse: "Anlässe",
  galerie: "Galerie",
  kontakt: "Kontakt",
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(sectionIds, 200);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-baseline gap-2"
          >
            <span
              className={`font-script text-3xl md:text-4xl leading-none transition-colors ${
                scrolled ? "text-chili" : "text-white"
              }`}
            >
              Gloria
            </span>
            <span
              className={`hidden sm:inline text-[0.7rem] uppercase tracking-[0.25em] font-medium transition-colors ${
                scrolled ? "text-warm-gray" : "text-white/80"
              }`}
            >
              Cocina Latina
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {sectionIds.map((id) => (
              <button
                key={id}
                onClick={() => handleClick(id)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeId === id
                    ? scrolled
                      ? "text-chili bg-chili/10"
                      : "text-white bg-white/20"
                    : scrolled
                      ? "text-charcoal/70 hover:text-chili hover:bg-chili/5"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {navLabels[id]}
              </button>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1.5 px-3.5 py-2 bg-chili text-white text-sm font-semibold rounded-full hover:bg-chili-light transition-colors"
            >
              <Instagram size={16} /> Anfragen
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menü"
            className={`md:hidden p-2 rounded-lg ${scrolled ? "text-charcoal" : "text-white"}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-cream/98 backdrop-blur-md border-t border-cream-dark shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {sectionIds.map((id) => (
              <button
                key={id}
                onClick={() => handleClick(id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeId === id
                    ? "text-chili bg-chili/10"
                    : "text-charcoal/70 hover:text-chili hover:bg-chili/5"
                }`}
              >
                {navLabels[id]}
              </button>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 px-4 py-3 bg-chili text-white text-sm font-semibold rounded-xl"
            >
              <Instagram size={18} /> Anfrage über Instagram
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
