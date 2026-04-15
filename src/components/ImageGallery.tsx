import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ImageGallery.module.css';

export default function ImageGallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // By using percentages of the element's width, it becomes 100% responsive.
  // -60% shifts exactly 2 cards to the left, bringing the 3rd card into view.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={targetRef} className={styles.scrollSection}>
      <div className={styles.stickyContainer}>
        
        <motion.div 
          className={`container ${styles.header}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className={styles.heading}>
            Wo die Berge rufen und Ruhe einkehrt.
          </h2>
        </motion.div>

        <motion.div style={{ x }} className={styles.carousel}>
          <div className={styles.card}>
            <img src="/assets/images/wo_die_berge_rufen/haus-von-aussen.webp" alt="Haus von außen" className={styles.image} />
            <p className={styles.desc}>Herzlich Willkommen in Tiefenbach. Ein Ort, an dem die Berge hautnah sind und der Alltag verblasst.</p>
          </div>
          <div className={styles.card}>
            <img src="/assets/images/wo_die_berge_rufen/zimmer.webp" alt="Zimmer" className={styles.image} />
            <p className={styles.desc}>Dein gemütlicher Rückzugsort. Ausgestattet mit heimischem Holz und viel Liebe zum Detail.</p>
          </div>
          <div className={styles.card}>
            <img src="/assets/images/wo_die_berge_rufen/geissalpsee.jpg" alt="Geißalpsee" className={styles.image} />
            <p className={styles.desc}>Der atemberaubende Geißalpsee liegt fast direkt vor der Haustür – dein Startpunkt ins Abenteuer.</p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
