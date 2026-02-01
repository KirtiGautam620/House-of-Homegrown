import styles from '../styles/Contact.module.css';

export default function Contact() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Get in Touch</h1>
            <p className={styles.subtitle}>
                Have questions about our products or want to discuss a custom order?
                We'd love to hear from you.
            </p>

            <div className={styles.contentWrapper}>
                {/* Contact Information */}
                <div className={styles.infoSection}>
                    <div className={styles.infoCard}>
                        <h3>Visit Us</h3>
                        <p>123 Artisan Lane, Heritage District<br />New Delhi, India 110001</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Email Us</h3>
                        <p>hello@houseofhomegrown.com<br />support@houseofhomegrown.com</p>
                    </div>

                    <div className={styles.infoCard}>
                        <h3>Call Us</h3>
                        <p>+91 98765 43210<br />Mon-Fri, 10am - 6pm IST</p>
                    </div>
                </div>

                {/* Contact Form */}
                <form className={styles.formSection}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your Name" required />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="your@email.com" required />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="subject">Subject</label>
                        <select id="subject">
                            <option value="general">General Inquiry</option>
                            <option value="order">Order Support</option>
                            <option value="wholesale">Wholesale</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" placeholder="How can we help?" required></textarea>
                    </div>

                    <button type="submit" className={styles.submitBtn}>Send Message</button>
                </form>
            </div>
        </div>
    );
}
