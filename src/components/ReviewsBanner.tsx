import { motion } from 'framer-motion';
import styles from './ReviewsBanner.module.css';

export default function ReviewsBanner() {
  const reviews = [
    { platform: 'Homing.com', rating: '9.5', max: '/10' },
    { platform: 'Boardly.com', rating: '9.7', max: '/10' },
    { platform: 'Expedra', rating: '9', max: '/10' },
    { platform: 'Tripscout', rating: '4.1', max: '/5' },
  ];

  return (
    <section className={styles.banner}>
      <motion.div 
        className={`container ${styles.grid}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {reviews.map((review, idx) => (
          <motion.div 
            key={idx} 
            className={styles.reviewItem}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            <span className={styles.platform}>{review.platform}</span>
            <div className={styles.ratingBox}>
              <span className={styles.rating}>{review.rating}</span>
              <span className={styles.max}>{review.max}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
