import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navInner}`}>
        <div className={styles.logo}>luxestay</div>
        <div className={styles.navLinks}>
          <a href="#stay">Stay</a>
          <a href="#explore">Explore</a>
          <a href="#feel-alive">Feel alive</a>
        </div>
        <button className={styles.bookBtn}>Book a stay</button>
      </div>
    </nav>
  );
}
