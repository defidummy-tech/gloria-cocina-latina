import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Section, { SectionTitle } from "../layout/Section";

const images = [
  { src: "/images/27.jpeg", alt: "Arepas und Kochbananen frisch aus der Pfanne" },
  { src: "/images/9.jpeg", alt: "Mama Gloria richtet Empanadas am Buffet an" },
  { src: "/images/3.jpeg", alt: "Reich gedecktes Buffet mit lateinamerikanischen Häppchen" },
  { src: "/images/25.jpeg", alt: "Tamales im Bananenblatt, mit Schnur gebunden" },
  { src: "/images/19.jpeg", alt: "Erdnuss-Bananen-Küchlein mit Heidelbeere in der Nahaufnahme" },
  { src: "/images/buffet-empanadas.jpeg", alt: "Empanadas und lateinamerikanisches Buffet" },
  { src: "/images/7.jpeg", alt: "Caprese-Spiesschen mit Tomate, Mozzarella und Basilikum" },
  { src: "/images/8.jpeg", alt: "Hummus im Glas mit frischem Gemüse" },
  { src: "/images/6.jpeg", alt: "Couscous-Salat im Glas mit Mango und Granatapfel" },
  { src: "/images/5.jpeg", alt: "Hausgemachte Nachos mit Guacamole" },
  { src: "/images/22.jpeg", alt: "Kichererbsen-Gemüse-Eintopf im grossen Topf" },
  { src: "/images/21.jpeg", alt: "Frische Kräuter für den Eintopf" },
  { src: "/images/10.jpeg", alt: "Schoggi-Erdbeer-Küchlein mit Glasur" },
  { src: "/images/12.jpeg", alt: "Erdnuss-Bananen-Küchlein mit Heidelbeeren" },
  { src: "/images/13.jpeg", alt: "Panna cotta con maracuyá – Passionsfrucht" },
  { src: "/images/16.jpeg", alt: "Pistazienschnitten mit Zuckerguss" },
  { src: "/images/14.jpeg", alt: "Pistazienschnitten in der Nahaufnahme" },
  { src: "/images/18.jpeg", alt: "Mama Gloria an ihrem Dessert-Buffet" },
  { src: "/images/2.jpeg", alt: "Mama Gloria neben dem festlich gedeckten Buffet" },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const featured = images[0];
  const grid = images.slice(1);

  return (
    <Section id="galerie" className="bg-cream">
      <SectionTitle kicker="La galería" subtitle="Ein Eindruck von meinen Buffets, Häppchen und Desserts.">
        Galerie
      </SectionTitle>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-lg mb-4"
        style={{ aspectRatio: "16/7" }}
        onClick={() => {
          setIndex(0);
          setOpen(true);
        }}
      >
        <img
          src={featured.src}
          alt={featured.alt}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-chili-dark/0 group-hover:bg-chili-dark/20 transition-colors duration-300" />
        <div className="absolute bottom-4 left-4 bg-chili-dark/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
          {featured.alt}
        </div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {grid.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 8) * 0.06 }}
            className="relative overflow-hidden rounded-xl cursor-pointer group shadow-sm hover:shadow-lg transition-shadow"
            style={{ aspectRatio: "4/3" }}
            onClick={() => {
              setIndex(i + 1);
              setOpen(true);
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-chili-dark/0 group-hover:bg-chili-dark/30 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>

      <Lightbox open={open} close={() => setOpen(false)} index={index} slides={images} />
    </Section>
  );
}
