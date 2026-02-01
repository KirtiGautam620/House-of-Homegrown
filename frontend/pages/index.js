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
      <section className={styles.categories}>
        <h2>Shop by Category</h2>
        <div className={styles.categoryGrid}>
          <div className={styles.card}>
            <img src="/textile.jpg" alt="Textiles" />
            <span className={styles.tag}>Handloom</span>
            <h3>Textiles</h3>
            <p>Handwoven fabrics & garments</p>
          </div>
          <div className={styles.card}>
            <img src="/homeimg.avif" alt="Home & Living" />
            <span className={styles.tag}>Artisanal</span>
            <h3>Home & Living</h3>
            <p>Sustainable home essentials</p>
          </div>
          <div className={styles.card}>
            <img src="/wellness.jpg" alt="Wellness" />
            <span className={styles.tag}>Organic</span>
            <h3>Wellness</h3>
            <p>Natural care & remedies</p>
          </div>

          <div className={styles.card}>
            <img src="/lifestyle.jpeg" alt="Lifestyle" />
            <span className={styles.tag}>Eco-friendly</span>
            <h3>Lifestyle</h3>
            <p>Conscious everyday essentials</p>
          </div>
        </div>
      </section>
    </>
  );
}
