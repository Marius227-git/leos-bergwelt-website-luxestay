import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ImageGallery.module.css';

export default function ImageGallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65vw"]);

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
            <img src="/assets/images/3gR8NWuMVhLe6zp0Kji7YfCy5E.png" alt="A quiet moment" className={styles.image} />
            <p className={styles.desc}>A quiet moment where ancient culture, dramatic landscapes, and island spirituality come together.</p>
          </div>
          <div className={styles.card}>
            <img src="/assets/images/5xlWlkx6bm4YIbTWhz74XcIwLI0.png" alt="Hidden waterfall sanctuary" className={styles.image} />
            <p className={styles.desc}>A hidden waterfall sanctuary where lush jungle, flowing water, and quiet island magic meet.</p>
          </div>
          
          <div className={styles.textCard}>
            <h2 className={styles.heading}>
              Tiefenbach bei Oberstdorf ist dein idealer Ausgangspunkt für schöne Wanderungen.
            </h2>
          </div>

          <div className={styles.card}>
            <img src="/assets/images/y8rJfiTSwkzHg20ylVzMnrVXqM.png" alt="Dramatic coastal escape" className={styles.image} />
            <p className={styles.desc}>A dramatic coastal escape where turquoise waters, golden sands, and rugged cliffs create pure island awe.</p>
          </div>
          <div className={styles.card}>
            <img src="/assets/images/RKQ1fzXQlu6gkOlbWLmjmoF0o8.png" alt="Endless rice fields" className={styles.image} />
            <p className={styles.desc}>Endless rice fields unfolding in quiet harmony, offering a true taste of island life.</p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
