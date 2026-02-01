import { useState } from 'react';
import styles from '../styles/Faq.module.css';

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "How long does shipping take?",
            answer: "We ship all orders within 2-3 business days. Delivery times vary by location but usually take 5-7 business days across India."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Currently, we only ship within India. We are working on bringing our sustainable products to the world soon!"
        },
        {
            question: "What is your return policy?",
            answer: "We have a hassle-free 30-day return policy. If you are not satisfied with your purchase, you can return it for a full refund or exchange."
        },
        {
            question: "Are your products truly sustainable?",
            answer: "Yes! We use organic materials, natural dyes, and eco-friendly packaging. We also ensure fair wages for all our artisans."
        },
        {
            question: "How can I track my order?",
            answer: "Once your order is shipped, you will receive a tracking link via email/SMS to monitor its journey to your doorstep."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Frequently Asked Questions</h1>
            <div className={styles.faqList}>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className={styles.question}>
                            {faq.question}
                            <span className={styles.icon}>{activeIndex === index ? '-' : '+'}</span>
                        </div>
                        <div className={styles.answer}>
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
