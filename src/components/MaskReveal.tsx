import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './MaskReveal.module.css';

export default function MaskReveal({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // The mask starts at ~20vh (a small logo size), grows to cover the whole screen (approx 350vh depending on aspect ratio constraints)
  // Usually, a mask-size of "10000vh" guarantees it surpasses any corner.
  const maskSize = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], ["20vh", "60vh", "3000vh", "3000vh"]);
  
  // As we zoom way past the bounds, the SVG might disappear or become super grainy.
  // Actually, WebKit mask-size: 3000vh is parsed cleanly.

  return (
    <section ref={containerRef} className={styles.scrollWrapper}>
      <div className={styles.stickyContainer}>
        <motion.div 
          className={styles.maskContainer}
          style={{ WebkitMaskSize: maskSize, maskSize }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
