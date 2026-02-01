import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        🌿 House of Homegrown
      </Link>

      <input
        className={styles.search}
        placeholder="Search products, e.g. khadi kurta"
      />

      <div className={styles.links}>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/sustainability">Sustainability</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
