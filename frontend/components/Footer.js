import Link from 'next/link';
import styles from '../styles/Footer.module.css';
const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.newsletterSection}>
                <div className={styles.newsletterContent}>
                    <div className={styles.newsletterText}>
                        <h2 className={styles.newsletterHeading}>Join Our Community</h2>
                        <p className={styles.newsletterSubtext}>
                            Subscribe to get updates on new collections, sustainability initiatives, and exclusive offers.
                        </p>
                    </div>
                    <form className={styles.newsletterForm}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={styles.emailInput}
                            required
                        />
                        <button type="submit" className={styles.subscribeBtn}>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className={styles.mainFooter}>
                <div className={styles.footerGrid}>
                    <div className={styles.brandInfo}>
                        <div className={styles.logoRow}>
                            <div className={styles.logoIcon}>🏠</div>
                            <h3 className={styles.brandName}>House of Homegrown</h3>
                        </div>
                        <p className={styles.brandDescription}>
                            Celebrating Indian craftsmanship, sustainability, and conscious living.
                            Rooted in tradition, made for modern India.
                        </p>
                        <div className={styles.socialIcons}>
                            <span className={styles.socialCircle}>📸</span>
                            <span className={styles.socialCircle}>f</span>
                            <span className={styles.socialCircle}>𝕏</span>
                            <span className={styles.socialCircle}>▶️</span>
                        </div>
                    </div>
                    <div className={styles.linkColumn}>
                        <h4>Shop</h4>
                        <ul>
                            <li><Link href="/shop" className={styles.footerLink}>Textiles</Link></li>
                            <li><Link href="/shop?category=home-living" className={styles.footerLink}>Home & Living</Link></li>
                            <li><Link href="/shop?category=wellness" className={styles.footerLink}>Wellness</Link></li>
                            <li><Link href="/shop?category=lifestyle" className={styles.footerLink}>Lifestyle</Link></li>
                            <li><Link href="/shop" className={styles.footerLink}>New Arrivals</Link></li>
                        </ul>
                    </div>
                    <div className={styles.linkColumn}>
                        <h4>Company</h4>
                        <ul>
                            <li><Link href="/about" className={styles.footerLink}>About Us</Link></li>
                            <li><Link href="/about" className={styles.footerLink}>Our Story</Link></li>
                            <li><Link href="/sustainability" className={styles.footerLink}>Sustainability</Link></li>
                            <li><Link href="/contact" className={styles.footerLink}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className={styles.linkColumn}>
                        <h4>Support</h4>
                        <ul>
                            <li><Link href="/faq" className={styles.footerLink}>FAQ</Link></li>
                            <li><Link href="/legal/shipping-returns" className={styles.footerLink}>Shipping & Returns</Link></li>
                            <li><Link href="/legal/privacy" className={styles.footerLink}>Privacy Policy</Link></li>
                            <li><Link href="/legal/terms" className={styles.footerLink}>Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.bottomBar}>
                    <p>© 2024 House of Homegrown. All rights reserved.</p>
                    <div className={styles.paymentMethods}>
                        <span>We accept:</span>
                        <div className={styles.paymentIcons}>
                            <span className={styles.paymentIcon}>💳</span>
                            <span className={styles.paymentIcon}>🅿️</span>
                            <span className={styles.paymentIcon}>🏛️</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
