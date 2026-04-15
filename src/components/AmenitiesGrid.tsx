import { motion } from 'framer-motion';
import styles from './AmenitiesGrid.module.css';

export default function AmenitiesGrid() {
  const amenities = [
    { title: "Infinity Pool", desc: "A serene pool experience designed to visually merge with the surrounding landscape and horizon." },
    { title: "Curated Island Activities", desc: "Experiences designed to help guests explore, discover, and connect with the destination." },
    { title: "Garden or Ocean Views", desc: "Tranquil views of lush tropical greenery or expansive ocean horizons from the comfort of your stay." },
    { title: "Meditation Spaces", desc: "Quiet, thoughtfully designed areas created for mindfulness, relaxation, and inner balance." },
    { title: "Beach / Lagoon Access", desc: "Direct access to pristine shores and calm waters for effortless moments of leisure and escape." }
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.scrollTrack}>
        <motion.div 
          className={styles.scrollList}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...amenities, ...amenities].map((item, idx) => (
            <div key={idx} className={styles.amenityBox}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
