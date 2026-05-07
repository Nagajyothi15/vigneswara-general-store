import React from 'react'
import { motion } from 'framer-motion'
import { Leaf, Handshake, Tag, Truck, Award, Heart } from 'lucide-react'

const FEATURES = [
  { icon: <Leaf className="w-6 h-6" />, color: '#16A34A', bg: '#F0FDF4', title: 'Always Fresh', desc: 'Hand-picked produce and daily restocked shelves ensure you get the freshest products every visit.' },
  { icon: <Handshake className="w-6 h-6" />, color: '#F97316', bg: '#FFF7ED', title: 'Community Trust', desc: 'Serving the China Palakaluru neighbourhood since 1995 with honesty, warmth, and reliability.' },
  { icon: <Tag className="w-6 h-6" />, color: '#3B82F6', bg: '#EFF6FF', title: 'Affordable Prices', desc: 'Competitive pricing on all items — no hidden costs, no surprises. Everyday savings for everyone.' },
  { icon: <Truck className="w-6 h-6" />, color: '#8B5CF6', bg: '#F5F3FF', title: 'Home Delivery', desc: 'Free delivery within 3 km for orders above ₹500. Quick and reliable, right to your doorstep.' },
]

const Features = () => (
  <section className="section-pad-sm features-section">
    <div className="container">
      <div className="features-grid">
        {FEATURES.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.1 }}
            className="feature-card"
          >
            <div className="feature-icon" style={{ background: f.bg, color: f.color }}>
              {f.icon}
            </div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
    <style jsx>{`
      .features-section {
        background: white;
        border-top: 1px solid var(--border-light);
        border-bottom: 1px solid var(--border-light);
      }
      .features-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
      }
      .feature-card {
        text-align: center;
        padding: 2rem 1.25rem;
        border-radius: var(--radius-lg);
        background: var(--off-white);
        border: 1px solid var(--border-light);
        transition: var(--transition);
      }
      .feature-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-lg);
        border-color: var(--saffron-light);
        background: white;
      }
      .feature-icon {
        width: 60px;
        height: 60px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.25rem;
      }
      .feature-title {
        font-size: 1rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 0.6rem;
      }
      .feature-desc {
        font-size: 0.875rem;
        color: var(--text-muted);
        line-height: 1.65;
      }
      @media (max-width: 1024px) {
        .features-grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 480px) {
        .features-grid { grid-template-columns: 1fr; }
      }
    `}</style>
  </section>
)

export default Features
