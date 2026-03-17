import Link from 'next/link';
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';
import AuthContext from '../context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const { user, logout } = useContext(AuthContext);
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
        <span className={styles.logoText}>House of Homegrown</span>
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
        {user ? (
          <>
            <Link href="/cart" className={`${styles.link} ${isActive('/cart')}`} onClick={() => setIsOpen(false)}>Cart</Link>
            <button className={styles.link} onClick={() => { logout(); setIsOpen(false); }} style={{background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '1rem'}}>Logout</button>
          </>
        ) : (
          <>
            <Link href="/login" className={`${styles.link} ${isActive('/login')}`} onClick={() => setIsOpen(false)}>Login</Link>
            <Link href="/register" className={`${styles.link} ${isActive('/register')}`} onClick={() => setIsOpen(false)}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
