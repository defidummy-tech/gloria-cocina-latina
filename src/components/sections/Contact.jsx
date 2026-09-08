import { motion } from "framer-motion";
import { Instagram, MapPin, CheckCircle2, MessageCircle } from "lucide-react";
import { SectionTitle } from "../layout/Section";

const INSTAGRAM_URL = "https://www.instagram.com/gloriacocinalatina";

const points = [
  "Menü individuell auf Ihren Anlass abgestimmt",
  "Kolumbianisch, lateinamerikanisch oder europäisch",
  "Vegetarische und vegane Optionen",
  "Auf Wunsch Kulinarik kombiniert mit Musik",
];

export default function Contact() {
  return (
    <section id="kontakt" className="bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionTitle kicker="Hablemos" subtitle="Ich freue mich auf Ihre Anfrage.">
          Kontakt & Anfrage
        </SectionTitle>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-cream hover:bg-white rounded-2xl border border-black/5 shadow-sm transition-all group"
            >
              <div className="w-14 h-14 bg-chili/10 rounded-xl flex items-center justify-center group-hover:bg-chili/20 transition-colors">
                <Instagram className="text-chili" size={24} />
              </div>
              <div>
                <p className="text-charcoal font-semibold">@gloriacocinalatina</p>
                <p className="text-warm-gray text-sm">
                  Anfragen am liebsten per Direktnachricht auf Instagram
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 bg-cream rounded-2xl border border-black/5 shadow-sm">
              <div className="w-14 h-14 bg-jungle/10 rounded-xl flex items-center justify-center">
                <MessageCircle className="text-jungle" size={24} />
              </div>
              <div>
                <p className="text-charcoal font-semibold">Was ich für die Planung brauche</p>
                <p className="text-warm-gray text-sm">
                  Datum, Anzahl Gäste, Anlass und Ihre Wünsche ans Menü
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 bg-cream rounded-2xl border border-black/5 shadow-sm">
              <div className="w-14 h-14 bg-amber/20 rounded-xl flex items-center justify-center">
                <MapPin className="text-[#9A7415]" size={24} />
              </div>
              <div>
                <p className="text-charcoal font-semibold">Region</p>
                <p className="text-warm-gray text-sm">Catering und Privatküche in der Schweiz</p>
              </div>
            </div>

            <ul className="pt-2 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-warm-gray">
                  <CheckCircle2 size={20} className="text-jungle flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-chili-dark rounded-3xl p-8 text-center text-white"
          >
            <p className="font-script text-3xl text-amber-light">Mama Gloria</p>
            <p className="mt-1 text-white/70 text-sm">
              Von meiner Küche direkt zu Ihrem Fest – mit viel Liebe, Leidenschaft
              und einem Stück Kolumbien.
            </p>

            <div className="mt-6 mx-auto w-fit bg-white p-3 rounded-2xl">
              <img
                src="/images/instagram-qr.jpeg"
                alt="Instagram-QR-Code von @gloriacocinalatina"
                className="w-44 h-44 object-contain rounded-lg"
              />
            </div>
            <p className="mt-3 text-white/50 text-xs">QR-Code scannen und folgen</p>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 bg-amber hover:bg-amber-light text-chili-dark font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-amber/25"
            >
              <Instagram size={18} /> Auf Instagram anfragen
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
