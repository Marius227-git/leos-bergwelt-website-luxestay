import { motion } from 'framer-motion';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <motion.div 
        className={`container ${styles.ctaSection}`}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className={styles.ctaTitle}>An experience you will never forget</h2>
        <a href="#" className={styles.bookBtn}>Book a stay</a>
      </motion.div>

      <motion.div 
        className={`container ${styles.footerBottom}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.logo}>luxestay</div>
          </div>
          
          <div className={styles.col}>
            <h5 className={styles.colTitle}>Location</h5>
            <p className={styles.text}>The Girbau de Dalt,<br/>08183 Barn,<br/>Bali</p>
          </div>

          <div className={styles.col}>
            <h5 className={styles.colTitle}>Contact</h5>
            <p className={styles.text}>Tel<br/><a href="tel:+1809111111">+1(809) 111-111</a></p>
            <p className={styles.text}>Email<br/><a href="mailto:hello@luxestay.com">hello@luxestay.com</a></p>
          </div>

          <div className={styles.col}>
            <h5 className={styles.colTitle}>Follow us on</h5>
            <div className={styles.socialLinks}>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>

        <div className={styles.legalRow}>
          <div className={styles.footerNav}>
            <a href="#">Dining</a>
            <span>/</span>
            <a href="#">Wellness</a>
            <span>/</span>
            <a href="#">Wedding</a>
            <span>/</span>
            <a href="#">Contact us</a>
          </div>
          <p className={styles.copyright}>©2026 Luxestay. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
}
