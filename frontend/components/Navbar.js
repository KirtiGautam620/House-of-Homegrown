import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        🌿 House of Homegrown
      </Link>
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
      </div>
      <input
        className={styles.search}
        placeholder="Search products..."
      />
      <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
        <Link href="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
        <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link href="/sustainability" onClick={() => setIsOpen(false)}>Sustainability</Link>
        <Link href="/faq" onClick={() => setIsOpen(false)}>FAQ</Link>
        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}
