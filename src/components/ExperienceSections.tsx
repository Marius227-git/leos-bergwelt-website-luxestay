import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ExperienceSections.module.css';

export default function ExperienceSections() {
  const sections = [
    {
      eyebrow: "Dine",
      title: "Taste & Indulge",
      desc: "Savor fresh, locally inspired flavors crafted with seasonal ingredients and island traditions.",
      img: "/assets/images/3nALW8odH3Lc9t3HtmtK9kbhHZE.png"
    },
    {
      eyebrow: "Wellness",
      title: "Relax & Renew",
      desc: "Reconnect with body and mind through holistic treatments inspired by ancient wellness rituals.",
      img: "/assets/images/v2GRvhGR2hhyq7lcuH90iJskmIU.png"
    },
    {
      eyebrow: "Weddings",
      title: "Celebrate Love",
      desc: "Celebrate your special day in an intimate island setting surrounded by nature, light, and timeless beauty.",
      img: "/assets/images/kPptWmSQZ1MTLAPOKJZIzJd82PA.png"
    }
  ];

  return (
    <section className={styles.experienceContainer}>
      {sections.map((sec, idx) => {
        const ref = useRef(null);
        const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
        const yPos = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

        return (
          <div key={idx} ref={ref} className={`${styles.row} ${idx % 2 === 1 ? styles.reverse : ''}`}>
            <div className={styles.imageCol} style={{ overflow: "hidden" }}>
              <motion.img 
                src={sec.img} 
                alt={sec.title} 
                className={styles.image} 
                style={{ y: yPos, height: "130%" }} 
              />
            </div>
            <div className={styles.textCol}>
              <motion.div 
                className={styles.textContent}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="eyebrow">{sec.eyebrow}</span>
                <h2 className={styles.title}>{sec.title}</h2>
                <p className={styles.desc}>{sec.desc}</p>
                <a href="#" className={`btn-primary ${styles.btn}`}>Explore more</a>
              </motion.div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
