import styles from '../styles/Home.module.css';
export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.overlay} />
        <div className={styles.content}>
          <h1>
            Sustainably made.<br />
            Proudly Indian.
          </h1>
          <p>
            Handcrafted products that honor tradition,
            support artisans, and embrace conscious living.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primary}>Shop Ethicals</button>
            <button className={styles.secondary}>Our Story</button>
          </div>
        </div>
      </section>
      <section className={styles.features}>
        <div>🚚 Free Shipping ₹999+</div>
        <div>✋ 100% Handmade</div>
        <div>↩️ 30-Day Returns</div>
        <div>🌿 Carbon Neutral Packing</div>
      </section>
    </>
  );
}
