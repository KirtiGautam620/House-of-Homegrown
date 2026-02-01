import styles from '../styles/Navbar.module.css';
export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>🌿 House of Homegrown</div>
      <input
        className={styles.search}
        placeholder="Search products, e.g. khadi kurta"
      />
      <div className={styles.links}>
        <a>Shop</a>
        <a>About</a>
        <a>Sustainability</a>
        <a>FAQ</a>
        <a>Contact</a>
      </div>
    </nav>
  );
}
