import { motion } from 'framer-motion';
import styles from './RoomsList.module.css';

export default function RoomsList() {
  const rooms = [
    {
      title: "Standard room",
      desc: "Modern cityscape room with queen bed, work desk, and essential business traveler amenities.",
      capacity: "2 adults",
      size: "23 Sq.m"
    },
    {
      title: "Standard room",
      desc: "Modern cityscape room with queen bed, work desk, and essential business traveler amenities.",
      capacity: "2 adults",
      size: "23 Sq.m"
    },
    {
      title: "Standard room",
      desc: "Modern cityscape room with queen bed, work desk, and essential business traveler amenities.",
      capacity: "",
      size: ""
    }
  ];

  return (
    <section className={`container ${styles.roomsSection}`}>
      <motion.div 
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
      >
        {rooms.map((room, idx) => (
          <motion.div 
            key={idx} 
            className={styles.roomItem}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            <div className={styles.mediaContainer}>
               <img src="/assets/images/5HLI7QWNxdlXoqpPQ9t3EhpKS0.png" alt="Standard Room" className={styles.roomImg} />
            </div>
            
            <div className={styles.content}>
              <h3 className={styles.title}>{room.title}</h3>
              <p className={styles.desc}>{room.desc}</p>
              
              <div className={styles.metaRow}>
                {room.capacity && <span className={styles.metaBadge}>{room.capacity}</span>}
                {room.size && <span className={styles.metaBadge}>{room.size}</span>}
              </div>

              <a href="#" className={styles.viewMore}>View more</a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
