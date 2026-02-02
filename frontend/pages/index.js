import styles from '../styles/Home.module.css';
import Link from 'next/link';
export default function Home() {
  const featuredProducts = [
    {
      name: "Handloom Cotton Kurta",
      category: "Natural Dye Collection",
      price: 2499,
      tag: "Sustainable",
      img: "/kurta.png",
    },
    {
      name: "Brass Diya Set",
      category: "Traditional Home Decor",
      price: 899,
      tag: "Handcrafted",
      img: "/diya.png",
    },
    {
      name: "Ayurvedic Herbal Tea",
      category: "Wellness Collection",
      price: 549,
      tag: "Organic",
      img: "/tea.png",
    },
    {
      name: "Handwoven Jute Bag",
      category: "Sustainable Lifestyle",
      price: 799,
      tag: "Eco-Friendly",
      img: "/jute.jpeg",
    },
  ];

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
            <Link href="/shop">
              <button className={styles.primary}>Shop Ethicals</button>
            </Link>
            <Link href="/about">
              <button className={styles.secondary}>Our Story</button>
            </Link>
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
          <Link href="/shop?category=clothes" className={styles.card}>
            <img src="/textile.jpg" alt="Clothes" />
            <span className={styles.tag}>Handloom</span>
            <h3>Clothes</h3>
            <p>Handwoven fabrics & garments</p>
          </Link>
          <Link href="/shop?category=home-living" className={styles.card}>
            <img src="/homeimg.avif" alt="Home & Living" />
            <span className={styles.tag}>Artisanal</span>
            <h3>Home & Living</h3>
            <p>Sustainable home essentials</p>
          </Link>
          <Link href="/shop?category=wellness" className={styles.card}>
            <img src="/wellness.jpg" alt="Wellness" />
            <span className={styles.tag}>Organic</span>
            <h3>Wellness</h3>
            <p>Natural care & remedies</p>
          </Link>
          <Link href="/shop?category=lifestyle" className={styles.card}>
            <img src="/lifestyle.jpeg" alt="Lifestyle" />
            <span className={styles.tag}>Eco-friendly</span>
            <h3>Lifestyle</h3>
            <p>Conscious everyday essentials</p>
          </Link>
        </div>
      </section>
      <section className={styles.featured}>
        <div className={styles.header}>
          <h2>Featured Products</h2>
          <p>Handpicked for you</p>
          <Link href="/shop">
            <span className={styles.viewAll}>View All →</span>
          </Link>
        </div>
        <div className={styles.productGrid}>
          {featuredProducts.map((product, idx) => (
            <div key={idx} className={styles.productCard}>
              <div className={styles.productImageWrapper}>
                <img src={product.img} alt={product.name} className={styles.productImage} />
                <span className={styles.productTag}>{product.tag}</span>
                <button className={styles.favoriteBtn}>♡</button>
              </div>
              <h3>{product.name}</h3>
              <p className={styles.category}>{product.category}</p>
              <div className={styles.productFooter}>
                <span>₹{product.price}</span>
                <button className={styles.addBtn}>+</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
