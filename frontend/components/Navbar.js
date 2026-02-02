import Link from 'next/link';
import {useState,useEffect} from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => router.pathname === path ? styles.active : '';
  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        🌿 House of Homegrown
      </Link>
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
      </div>
      <div className={styles.desktopSearch}>
        <input
          className={styles.search}
          placeholder="Search products..."
        />
      </div>
      <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
        <Link href="/shop" className={`${styles.link} ${isActive('/shop')}`} onClick={() => setIsOpen(false)}>Shop</Link>
        <Link href="/about" className={`${styles.link} ${isActive('/about')}`} onClick={() => setIsOpen(false)}>About</Link>
        <Link href="/sustainability" className={`${styles.link} ${isActive('/sustainability')}`} onClick={() => setIsOpen(false)}>Sustainability</Link>
        <Link href="/faq" className={`${styles.link} ${isActive('/faq')}`} onClick={() => setIsOpen(false)}>FAQ</Link>
        <Link href="/contact" className={`${styles.link} ${isActive('/contact')}`} onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}
