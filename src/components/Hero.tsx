import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className={styles.hero}>
      <motion.div 
        className={styles.imageWrapper}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ y }}
      >
        <img 
          src="/assets/images/9C6LidXc4kZwTLlq45fjUyE3ePE.jpg" 
          alt="Boutique Luxury Hotel in Bali" 
          className={styles.heroImage} 
        />
        <div className={styles.overlay}></div>
      </motion.div>

      <div className={`container ${styles.content}`}>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Discover a tranquil island sanctuary where wellness, nature, and timeless hospitality create space to truly unwind.
        </motion.p>
        
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span>Stay.</span>
          <span>Explore.</span>
          <span className={styles.italic}>Feel alive</span>
        </motion.h1>
      </div>
    </section>
  );
}
