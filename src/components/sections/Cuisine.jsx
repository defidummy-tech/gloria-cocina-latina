import { motion } from "framer-motion";
import { Flame, Leaf, UtensilsCrossed, Croissant, Globe2, Grape } from "lucide-react";
import Section, { SectionTitle } from "../layout/Section";

const cards = [
  {
    icon: Flame,
    title: "Kolumbianische Spezialitäten",
    text: "Empanadas, Arepas con queso, Patacones, Tamales im Bananenblatt und gebratene Kochbananen – die Gerichte meiner Heimat.",
    accent: "chili",
  },
  {
    icon: Globe2,
    title: "Lateinamerikanische Küche",
    text: "Guacamole mit Nachos, Ají, herzhafte Eintöpfe und Klassiker vom ganzen Kontinent – frisch zubereitet und grosszügig serviert.",
    accent: "jungle",
  },
  {
    icon: UtensilsCrossed,
    title: "Europäisch & International",
    text: "Ich liebe europäische Gerichte genauso. Offen für jede Nationalität und jeden Geschmack – jedes Menü wird auf Ihren Anlass abgestimmt.",
    accent: "amber",
  },
  {
    icon: Leaf,
    title: "Vegetarisch & Vegan",
    text: "Hummus mit Gemüse, Couscous-Salat mit Pistazien, Kichererbsen-Gemüse-Eintopf – vollwertig, bunt und für alle geeignet.",
    accent: "jungle",
  },
  {
    icon: Croissant,
    title: "Fingerfood & Apéro",
    text: "Spiesschen, Häppchen und Bowls im Glas – elegant angerichtet für Empfänge, Vernissagen und Firmenanlässe.",
    accent: "chili",
  },
  {
    icon: Grape,
    title: "Süsses & Dessert",
    text: "Panna cotta con maracuyá, Schoggi-Erdbeer-Küchlein, Pistazienschnitten und Erdnuss-Bananen-Küchlein – hausgemacht.",
    accent: "amber",
  },
];

const accentMap = {
  chili: "bg-chili/10 text-chili",
  jungle: "bg-jungle/10 text-jungle",
  amber: "bg-amber/20 text-[#9A7415]",
};

export default function Cuisine() {
  return (
    <Section id="kueche" className="bg-cream-dark">
      <SectionTitle
        kicker="La cocina"
        subtitle="Meine Küche ist vielfältig – für mich gibt es keine Grenzen."
      >
        Was bei mir auf den Tisch kommt
      </SectionTitle>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(({ icon: Icon, title, text, accent }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            className="bg-cream rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow border border-black/5"
          >
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${accentMap[accent]}`}
            >
              <Icon size={26} />
            </div>
            <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
              {title}
            </h3>
            <p className="text-warm-gray leading-relaxed text-[0.97rem]">{text}</p>
          </motion.div>
        ))}
      </div>

      <p className="mt-10 text-center text-warm-gray">
        Ich arbeite gerne mit guten, natürlichen Produkten und probiere immer
        wieder neue Rezepte und Geschmacksrichtungen aus.
      </p>
    </Section>
  );
}
