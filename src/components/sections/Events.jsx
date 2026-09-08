import { motion } from "framer-motion";
import { PartyPopper, Cake, Users, Briefcase, Music, Sparkles } from "lucide-react";
import { SectionTitle } from "../layout/Section";

const occasions = [
  { icon: PartyPopper, label: "Private Feiern" },
  { icon: Cake, label: "Geburtstage" },
  { icon: Users, label: "Familienfeste" },
  { icon: Briefcase, label: "Firmenanlässe" },
  { icon: Sparkles, label: "Besondere Auftritte" },
];

export default function Events() {
  return (
    <section id="anlaesse" className="relative overflow-hidden bg-chili-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionTitle
          light
          kicker="Su evento"
          subtitle="Ich koche mit Herz und passe mein Angebot gerne an die Wünsche meiner Gäste an."
        >
          Für jeden Anlass
        </SectionTitle>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ul className="space-y-3">
              {occasions.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-amber" size={22} />
                  </div>
                  <span className="font-medium text-white/90">{label}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-white/70 leading-relaxed">
              Für mich gibt es keine Grenzen – jedes Event darf etwas Besonderes
              und Persönliches sein. Sagen Sie mir, was Sie sich wünschen, und ich
              stelle Ihr Menü zusammen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/images/2.jpeg"
                alt="Reich gedecktes Buffet von Gloria · Cocina Latina"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 md:mt-16 p-7 md:p-10 rounded-3xl bg-jungle/25 border border-jungle-light/30 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="w-16 h-16 rounded-2xl bg-amber/20 flex items-center justify-center flex-shrink-0">
            <Music className="text-amber" size={30} />
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-heading text-2xl font-bold text-white mb-2">
              Kulinarik trifft Musik
            </h3>
            <p className="text-white/75 leading-relaxed">
              Musik spielt in meinem Leben eine wichtige Rolle. Gemeinsam mit{" "}
              <strong className="text-white">Nois Voice</strong> verbinde ich
              kulinarische Erlebnisse mit Musik, Freude und einer herzlichen
              Atmosphäre – und bringe Menschen zusammen.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
