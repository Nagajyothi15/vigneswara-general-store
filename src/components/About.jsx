import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Award, Users, Leaf, Tag } from 'lucide-react'

const STATS = [
  { num: '30+', label: 'Years of Service' },
  { num: '500+', label: 'Products Stocked' },
  { num: '2000+', label: 'Happy Families' },
  { num: '7', label: 'Days a Week Open' },
]

const VALUES = [
  { icon: <Award className="w-5 h-5" />, title: 'Quality First', desc: 'We never compromise on the quality of products we stock. Only the best for our community.' },
  { icon: <Tag className="w-5 h-5" />, title: 'Fair Pricing', desc: 'Transparent pricing with no surprises. We believe everyone deserves affordable essentials.' },
  { icon: <Heart className="w-5 h-5" />, title: 'Community Love', desc: 'We are part of this community. Your trust is our greatest reward and biggest responsibility.' },
  { icon: <Leaf className="w-5 h-5" />, title: 'Fresh Always', desc: 'Restocked daily so that every item you pick is fresh, hygienic, and at its best quality.' },
]

const About = () => (
  <section id="about" className="section-pad about-section">
    <div className="container">
      <div className="about-grid">
        {/* Left – Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="about-img-col"
        >
          <div className="about-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=700"
              alt="Store interior with fresh produce"
            />
            <div className="since-badge">
              <span className="since-year">1995</span>
              <span className="since-label">Est.</span>
            </div>
          </div>
          {/* Stats row */}
          <div className="stats-strip">
            {STATS.map((s, i) => (
              <div key={i} className="stat-item">
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right – Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="about-content"
        >
          <span className="section-label">🏪 Our Story</span>
          <h2 className="section-title">
            A Store Built on <span>Trust &amp; Care</span>
          </h2>
          <p className="about-intro">
            Vigneswara General Store was founded in 1995 with a simple mission — to be the most reliable and affordable shop in the China Palakaluru community. Over three decades, we have grown from a small corner shop into a beloved neighbourhood destination.
          </p>
          <p className="about-body">
            We believe that shopping for daily essentials should be simple, affordable, and enjoyable. That's why we stock over 500 products — from fresh groceries and spices to school stationery and household items — all under one roof.
          </p>

          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div key={i} className="value-item">
                <div className="value-icon">{v.icon}</div>
                <div>
                  <h4 className="value-title">{v.title}</h4>
                  <p className="value-desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn btn-orange mt-cta">
            Visit Our Store →
          </a>
        </motion.div>
      </div>
    </div>

    <style jsx>{`
      .about-section { background: var(--cream); }
      .about-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;
        align-items: start;
      }

      /* Image column */
      .about-img-col { display: flex; flex-direction: column; gap: 1.5rem; }
      .about-img-wrap {
        position: relative;
        border-radius: var(--radius-xl);
        overflow: hidden;
        box-shadow: var(--shadow-xl);
        border: 3px solid white;
      }
      .about-img-wrap img {
        width: 100%;
        height: 380px;
        object-fit: cover;
        display: block;
      }
      .since-badge {
        position: absolute;
        top: 1.25rem;
        right: 1.25rem;
        background: var(--saffron);
        color: white;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 15px rgba(249,115,22,0.45);
      }
      .since-year { font-size: 1rem; font-weight: 800; line-height: 1; }
      .since-label { font-size: 0.6rem; font-weight: 700; text-transform: uppercase; opacity: 0.9; }

      .stats-strip {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        background: white;
        border-radius: var(--radius-lg);
        padding: 1.25rem;
        box-shadow: var(--shadow-sm);
        border: 1px solid var(--border-light);
      }
      .stat-item { text-align: center; }
      .stat-num { display: block; font-size: 1.4rem; font-weight: 800; color: var(--saffron); line-height: 1; }
      .stat-label { font-size: 0.72rem; font-weight: 600; color: var(--text-muted); margin-top: 0.2rem; display: block; }

      /* Content column */
      .about-content {}
      .about-intro {
        font-size: 1.05rem;
        color: var(--text-mid);
        line-height: 1.8;
        font-weight: 500;
        margin-bottom: 1rem;
      }
      .about-body {
        font-size: 0.95rem;
        color: var(--text-muted);
        line-height: 1.8;
        margin-bottom: 2rem;
      }

      .values-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.25rem;
        margin-bottom: 2.25rem;
      }
      .value-item {
        display: flex;
        gap: 0.85rem;
        align-items: flex-start;
        padding: 1rem;
        background: white;
        border-radius: var(--radius-md);
        border: 1px solid var(--border-light);
        transition: var(--transition);
      }
      .value-item:hover {
        border-color: var(--saffron-light);
        box-shadow: var(--shadow-md);
      }
      .value-icon {
        width: 36px;
        height: 36px;
        border-radius: 10px;
        background: var(--saffron-pale);
        color: var(--saffron);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .value-title { font-size: 0.9rem; font-weight: 700; color: var(--text-dark); margin-bottom: 0.2rem; }
      .value-desc { font-size: 0.8rem; color: var(--text-muted); line-height: 1.55; }

      .mt-cta { margin-top: 0; }

      @media (max-width: 1024px) {
        .about-grid { gap: 3rem; }
        .stats-strip { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 768px) {
        .about-grid { grid-template-columns: 1fr; }
        .about-img-wrap img { height: 300px; }
        .values-grid { grid-template-columns: 1fr; }
      }
    `}</style>
  </section>
)

export default About
