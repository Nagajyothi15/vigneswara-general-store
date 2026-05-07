import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const CATS = [
  {
    name: 'Groceries & Essentials',
    emoji: '🌾',
    desc: 'Rice, pulses, oils, spices, snacks & beverages',
    img: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=600',
    color: '#FFF7ED',
    accent: '#F97316',
    href: '#products',
    items: '200+ items',
  },
  {
    name: 'Stationery',
    emoji: '📚',
    desc: 'Notebooks, pens, files & school supplies',
    img: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=600',
    color: '#EFF6FF',
    accent: '#3B82F6',
    href: '#products',
    items: '80+ items',
  },
  {
    name: 'Household Items',
    emoji: '🏠',
    desc: 'Cleaning supplies, utensils & storage',
    img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600',
    color: '#F0FDF4',
    accent: '#16A34A',
    href: '#products',
    items: '150+ items',
  },
]

const Categories = () => (
  <section className="section-pad categories-section">
    <div className="container">
      <div className="section-header center">
        <span className="section-label">🏪 Browse by Category</span>
        <h2 className="section-title">Shop <span>Our Collections</span></h2>
        <p className="section-subtitle">Everything you need for your home — organised, easy to find, always in stock.</p>
      </div>

      <div className="cat-grid">
        {CATS.map((cat, i) => (
          <motion.a
            key={i}
            href={cat.href}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.12 }}
            whileHover={{ y: -8 }}
            className="cat-card"
            style={{ '--cat-accent': cat.accent }}
          >
            <div className="cat-img-box">
              <img src={cat.img} alt={cat.name} />
              <div className="cat-img-overlay" style={{ background: `${cat.accent}cc` }}></div>
              <div className="cat-emoji-circle">{cat.emoji}</div>
              <span className="cat-items-badge">{cat.items}</span>
            </div>
            <div className="cat-body" style={{ background: cat.color }}>
              <h3 className="cat-name" style={{ color: cat.accent }}>{cat.name}</h3>
              <p className="cat-desc">{cat.desc}</p>
              <span className="cat-link" style={{ color: cat.accent }}>
                Shop Now <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>

    <style jsx>{`
      .categories-section { background: white; }
      .cat-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
      }
      .cat-card {
        border-radius: var(--radius-xl);
        overflow: hidden;
        border: 2px solid var(--border-light);
        transition: var(--transition);
        display: block;
        box-shadow: var(--shadow-sm);
      }
      .cat-card:hover {
        border-color: var(--cat-accent, var(--saffron-light));
        box-shadow: var(--shadow-xl);
      }
      .cat-img-box {
        position: relative;
        height: 200px;
        overflow: hidden;
      }
      .cat-img-box img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease;
      }
      .cat-card:hover .cat-img-box img { transform: scale(1.08); }
      .cat-img-overlay {
        position: absolute;
        inset: 0;
        opacity: 0.3;
        transition: opacity 0.4s;
      }
      .cat-card:hover .cat-img-overlay { opacity: 0.5; }
      .cat-emoji-circle {
        position: absolute;
        bottom: -20px;
        left: 1.5rem;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        box-shadow: var(--shadow-md);
        border: 2px solid white;
        z-index: 2;
      }
      .cat-items-badge {
        position: absolute;
        top: 0.75rem;
        right: 0.75rem;
        background: rgba(255,255,255,0.9);
        backdrop-filter: blur(8px);
        font-size: 0.72rem;
        font-weight: 700;
        padding: 0.25rem 0.65rem;
        border-radius: 9999px;
        color: var(--text-dark);
      }
      .cat-body { padding: 2rem 1.5rem 1.5rem; }
      .cat-name { font-size: 1.1rem; font-weight: 800; margin-bottom: 0.4rem; }
      .cat-desc { font-size: 0.875rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1rem; }
      .cat-link {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.875rem;
        font-weight: 700;
        transition: gap 0.2s;
      }
      .cat-card:hover .cat-link { gap: 0.7rem; }

      @media (max-width: 768px) {
        .cat-grid { grid-template-columns: 1fr; }
      }
    `}</style>
  </section>
)

export default Categories
