import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  { q: 'Do you deliver to homes?', a: 'Yes! We offer free home delivery within a 3 km radius of China Palakaluru for orders above ₹500. For smaller orders, a nominal delivery charge of ₹20 applies. Just WhatsApp or call us to place your order.' },
  { q: 'What are your store timings?', a: 'We are open every day of the week — Monday to Sunday — from 6:00 AM to 10:00 PM, including all public holidays and festivals.' },
  { q: 'Do you accept UPI and digital payments?', a: 'Absolutely! We accept all major UPI apps (PhonePe, Google Pay, Paytm, BHIM), credit and debit cards, and of course cash. We make payment easy and convenient for you.' },
  { q: 'Can I return or exchange products?', a: 'Yes. Fresh produce can be returned within 24 hours, and sealed packaged goods can be exchanged within 7 days if the packaging is intact. Just bring your receipt or mention your order number.' },
  { q: 'Do you sell school and office stationery?', a: 'Yes! We have a well-stocked stationery section with notebooks, pens, pencils, files, folders, school kits, and more. Bulk orders for institutions also get a special discount.' },
  { q: 'Can I place bulk orders for events or businesses?', a: 'Yes, we welcome bulk orders for weddings, events, restaurants, and businesses. Please call or WhatsApp us in advance and we will prepare your order with special pricing.' },
]

const FAQ = () => {
  const [open, setOpen] = useState(null)
  return (
    <section id="faq" className="section-pad faq-section">
      <div className="container">
        <div className="section-header center">
          <span className="section-label">❓ FAQ</span>
          <h2 className="section-title">Common <span>Questions</span></h2>
          <p className="section-subtitle">Quick answers to things our customers ask us most.</p>
        </div>
        <div className="faq-list">
          {FAQS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`faq-item ${open === i ? 'open' : ''}`}
            >
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{item.q}</span>
                <div className={`faq-chevron ${open === i ? 'rotated' : ''}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-a-wrap"
                  >
                    <p className="faq-a">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .faq-section { background: var(--cream); }
        .faq-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .faq-item {
          background: white;
          border-radius: var(--radius-lg);
          border: 1.5px solid var(--border-light);
          overflow: hidden;
          transition: var(--transition);
        }
        .faq-item.open {
          border-color: var(--saffron-light);
          box-shadow: var(--shadow-md);
        }
        .faq-q {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          text-align: left;
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-dark);
          cursor: pointer;
          transition: var(--transition);
        }
        .faq-q:hover { color: var(--saffron); }
        .faq-item.open .faq-q { color: var(--saffron-dark); }
        .faq-chevron {
          background: var(--off-white);
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--text-muted);
          transition: transform 0.35s ease, background 0.2s;
        }
        .faq-chevron.rotated { transform: rotate(180deg); background: var(--saffron); color: white; }
        .faq-a-wrap { overflow: hidden; }
        .faq-a {
          padding: 0 1.5rem 1.5rem;
          font-size: 0.925rem;
          color: var(--text-muted);
          line-height: 1.75;
        }
      `}</style>
    </section>
  )
}

export default FAQ
