import { Instagram, Heart } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/gloriacocinalatina";

export default function Footer() {
  return (
    <footer className="bg-chili-dark text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-script text-3xl text-amber-light leading-none">Gloria</p>
            <p className="text-xs uppercase tracking-[0.25em] mt-1">Cocina Latina</p>
          </div>

          <p className="text-sm text-center max-w-md">
            Von meiner Küche direkt zu Ihrem Fest — mit viel Liebe, Leidenschaft
            und einem Stück Kolumbien.
          </p>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-white text-sm font-medium transition-colors"
          >
            <Instagram size={18} /> @gloriacocinalatina
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p>© {new Date().getFullYear()} Gloria · Cocina Latina — Schweiz</p>
          <p className="inline-flex items-center gap-1.5">
            Con mucho amor <Heart size={12} className="text-amber fill-amber" /> hecho en Suiza
          </p>
        </div>
      </div>
    </footer>
  );
}
