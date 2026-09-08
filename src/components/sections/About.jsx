import { motion } from "framer-motion";
import Section, { SectionTitle } from "../layout/Section";

const paragraphs = [
  "Ich bin Gloria – aber viele nennen mich liebevoll Mama Gloria. Ursprünglich komme ich aus Kolumbien und lebe seit vielen Jahren in der Schweiz. Meine kolumbianischen Wurzeln, meine Offenheit für andere Kulturen und vor allem meine Liebe zum Kochen begleiten mich jeden Tag.",
  "Kochen ist für mich mehr als nur Essen zuzubereiten. Kochen bedeutet Leidenschaft, Liebe und Menschen zusammenzubringen. Ich arbeite gerne mit guten, natürlichen Produkten und probiere immer wieder neue Rezepte und Geschmacksrichtungen aus.",
  "Meine Küche ist vielfältig: Ich liebe es, lateinamerikanische Spezialitäten aus meiner Heimat Kolumbien zuzubereiten, genauso wie europäische Gerichte. Dabei bin ich offen für jede Nationalität und jeden Geschmack. Für mich gibt es keine Grenzen – jedes Event darf etwas Besonderes und Persönliches sein.",
  "Ob private Feier, Geburtstag, Familienfest, Firmenanlass oder ein besonderer Auftritt – ich koche mit Herz und passe mein Angebot gerne an die Wünsche meiner Gäste an.",
];

export default function About() {
  return (
    <Section id="ueber-mich" className="bg-cream">
      <SectionTitle kicker="Buenos días" subtitle="Ein Stück Kolumbien in der Schweiz.">
        Ich bin Mama Gloria
      </SectionTitle>

      <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl rotate-[-2deg]">
              <img
                src="/images/26.jpeg"
                alt="Mama Gloria beim Kochen an ihrem Stand"
                className="w-full h-[440px] object-cover object-[center_18%]"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 w-40 h-40 overflow-hidden rounded-2xl shadow-lg border-4 border-cream rotate-[4deg] hidden sm:block">
              <img
                src="/images/17.jpeg"
                alt="Mama Gloria mit ihrem Dessert-Buffet"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-5 -left-5 w-20 h-20 rounded-full bg-amber/20 -z-10" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-3"
        >
          <div className="space-y-4 text-warm-gray leading-relaxed text-[1.05rem]">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 border-l-4 border-jungle pl-5">
            <p className="text-charcoal text-lg leading-relaxed">
              Neben dem Kochen spielt auch die Musik eine wichtige Rolle in meinem
              Leben. Ich bin gerne bei Musikprojekten dabei und liebe es,
              kulinarische Erlebnisse mit Musik, Freude und guter Stimmung zu
              verbinden. Gemeinsam mit <strong>Nois Voice</strong> möchten wir
              Menschen mit gutem Essen, Musik und einer herzlichen Atmosphäre
              zusammenbringen.
            </p>
          </div>

          <p className="mt-8 font-script text-3xl text-chili">
            Von meiner Küche direkt zu Ihrem Fest – mit viel Liebe, Leidenschaft
            und einem Stück Kolumbien.
          </p>
          <p className="mt-2 font-script text-2xl text-warm-gray">Ihre Mama Gloria</p>
        </motion.div>
      </div>
    </Section>
  );
}
