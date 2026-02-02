import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1>Our Story</h1>
                <p>Weaving tradition with modern consciousness.</p>
            </section>

            <section className={styles.content}>
                <div className={styles.section}>
                    <h2>The Beginning</h2>
                    <p>
                        House of Homegrown was born from a desire to bridge the gap between
                        traditional Indian craftsmanship and contemporary living. We started
                        as a small initiative to bring the work of rural artisans to a
                        global audience, celebrating the imperfections of the handmade.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2>Our Philosophy</h2>
                    <p>
                        We believe in "slow fashion" and conscious consumption. Every
                        product you see is handcrafted using sustainable materials, natural
                        dyes, and age-old techniques that have been passed down through
                        generations. We honor the earth and the hands that shape it.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2>Impact</h2>
                    <p>
                        By choosing us, you are not just buying a product; you are supporting
                        a livelihood. We work directly with artisan communities, ensuring fair
                        wages and safe working conditions. Together, we are building a
                        community rooted in respect and creativity.
                    </p>
                </div>
            </section>
        </div>
    );
}
