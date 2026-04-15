import { motion } from 'framer-motion';

import styles from './IntroSection.module.css';

export default function IntroSection() {
  return (
    <section className={styles.introSection}>
      <div className={`container ${styles.content}`}>
        <motion.div 
          className={styles.iconWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Custom Mountain SVG with drawing animation */}
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            {/* Subtly broken outer circle frame */}
            <motion.path 
              d="M12 2A10 10 0 1 0 22 12" 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
            {/* Left dominant mountain */}
            <motion.path 
              d="M5 16 L10 8 L15 16" 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            />
            {/* Right overlapping mountain */}
            <motion.path 
              d="M12 11 L16 6 L21 16" 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
            />
          </svg>
        </motion.div>

        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Wo die Berge rufen <br className={styles.desktopBr} />& Ruhe einkehrt
        </motion.h2>

        <motion.p 
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Drei liebevoll gestaltete Zimmer, ruhige alpine Atmosphäre und der perfekte Ausgangspunkt für deinen Urlaub im Oberallgäu.
        </motion.p>

        <motion.div 
          className={styles.ratingsGrid}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.ratingBox}>
            <span className={styles.platform}>Airbnb</span>
            <div className={styles.scoreWrap}>
              <span className={styles.score}>4.8</span>
              <span className={styles.max}>/5</span>
            </div>
          </div>
          
          <div className={styles.ratingBox}>
            <span className={styles.platform}>Booking.com</span>
            <div className={styles.scoreWrap}>
              <span className={styles.score}>9.5</span>
              <span className={styles.max}>/10</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Transition image wrapped in constrained layout with subtle scale intro */}
      <div className={styles.imageContainerWrapper}>
        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img 
            src="/assets/images/sektion_2/sektion-2-image.jpg" 
            alt="Blick auf die Berge" 
            className={styles.transitionImage} 
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      </div>
    </section>
  );
}
