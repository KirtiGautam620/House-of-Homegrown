import styles from '../styles/Sustainability.module.css';

const Sustainability = () => {
    const features = [
        { title: "Zero Waste", desc: "Minimal packaging with recycled materials", img: "/sustainability_zero_waste.png" },
        { title: "Natural Materials", desc: "Organic cotton, jute, and natural dyes", img: "/sustainability_natural_materials.png" },
        { title: "Fair Trade", desc: "Supporting artisan communities fairly", img: "/sustainability_fair_trade.png" },
        { title: "Made with Love", desc: "Handcrafted with care and tradition", img: "/sustainability_crafted_love.png" }
    ];
    return (
        <section className={styles.susContainer}>
            <h2 className={styles.susHeading}>Committed to Sustainability</h2>
            <p className={styles.susSubtext}>
                We believe in creating products that are kind to the earth and respectful of our artisans.
                Every choice we make reflects our commitment to a greener tomorrow.
            </p>
            <div className={styles.cardGrid}>
                {features.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={item.img} alt={item.title} className={styles.cardImage} />
                        </div>
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                        <p className={styles.cardDesc}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Sustainability;
