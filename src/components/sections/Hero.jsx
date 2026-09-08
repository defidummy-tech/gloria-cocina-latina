import { motion } from "framer-motion";
import { ChevronDown, Instagram, Image as ImageIcon } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/gloriacocinalatina";

const highlights = [
  "Kolumbianisch & Latin",
  "Auch europäische Küche",
  "Vegetarisch & Vegan",
  "Kulinarik trifft Musik",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/3.jpeg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-chili-dark/75 via-chili-dark/62 to-chili-dark/92" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-jungle/25 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-jungle/70 backdrop-blur-sm text-white text-xs sm:text-sm font-medium rounded-full mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber" />
            </span>
            Catering & Privatküche in der Schweiz
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-script text-4xl sm:text-5xl md:text-6xl text-amber-light mb-2"
        >
          Mama Gloria
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Von meiner Küche
          <br className="hidden sm:block" /> zu Ihrem Fest
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Kolumbianische und lateinamerikanische Spezialitäten, mit Herz gekocht —
          für private Feiern, Geburtstage, Familienfeste, Firmenanlässe und
          besondere Auftritte.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber hover:bg-amber-light text-chili-dark font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-amber/25 hover:-translate-y-0.5"
          >
            <Instagram size={20} /> Jetzt anfragen
          </a>
          <a
            href="#galerie"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-sm transition-all border border-white/20"
          >
            <ImageIcon size={20} /> Galerie ansehen
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {highlights.map((label) => (
            <div key={label} className="text-center">
              <div className="mx-auto mb-2 w-1.5 h-1.5 rounded-full bg-amber" />
              <div className="text-sm text-white/70">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#ueber-mich" className="text-white/40 hover:text-white/70 transition-colors">
          <ChevronDown size={32} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
