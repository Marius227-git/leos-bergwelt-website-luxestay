import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FAQ.module.css';

export default function FAQ() {
  const faqs = [
    { question: "What is the guest capacity?", answer: "We can accommodate a wide range of groups depending on the booking type." },
    { question: "Do you offer room rates for guests?", answer: "Yes, special rates are available for group bookings and long stays." },
    { question: "Is my date available?", answer: "Please check our booking engine or contact us directly to confirm availability." },
    { question: "Is there a backup for outdoor events?", answer: "Yes, we have versatile indoor spaces available in case of inclement weather." },
    { question: "Are menus customizable?", answer: "Absolutely. Our culinary team will work with you to tailor the menu." },
    { question: "Is guest parking provided?", answer: "Complimentary parking is available for all registered guests." },
    { question: "Will we have a wedding coordinator?", answer: "Yes, an on-site coordinator is assigned to ensure everything runs smoothly." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    if (openIndex === idx) setOpenIndex(null);
    else setOpenIndex(idx);
  };

  return (
    <section className={`container ${styles.faqSection}`}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className={styles.title}>Have any doubts?</h2>
      </motion.div>

      <motion.div 
        className={styles.list}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {faqs.map((faq, idx) => (
          <motion.div 
            key={idx} 
            className={styles.item} 
            onClick={() => toggle(idx)}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            <div className={styles.questionRow}>
              <h4 className={styles.question}>
                <span className={styles.number}>{idx + 1}.</span> {faq.question}
              </h4>
              <div className={styles.icon}>
                {openIndex === idx ? <X size={20} /> : <Plus size={20} />}
              </div>
            </div>
            
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={styles.answerWrapper}
                >
                  <p className={styles.answer}>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
