import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const REVIEWS = [
  {
    name: 'Radha Krishnamurthy',
    role: 'Housewife, China Palakaluru',
    text: `I have been shopping at Vigneswara Store for over 15 years. The quality is always great, staff is very helpful, and the prices are the best in the area. It is our family's go-to store!`,
    stars: 5,
    initials: 'RK',
    color: '#F97316',
  },
  {
    name: 'Suresh Babu',
    role: 'Teacher, Local School',
    text: `The stationery section is very well stocked. I often buy notebooks and supplies for my students here. They even offer a small discount for bulk orders. Truly a community store.`,
    stars: 5,
    initials: 'SB',
    color: '#3B82F6',
  },
  {
    name: 'Anitha Devi',
    role: 'Working Professional',
    text: `Home delivery is a lifesaver! I WhatsApp my grocery list and they deliver within the hour. Fresh produce, fair prices, and wonderful service. Highly recommended!`,
    stars: 5,
    initials: 'AD',
    color: '#16A34A',
  },
]

const Testimonials = () => (
  <section className="section-pad testimonials-section">
    <div className="container">
      <div className="section-header center">
        <span className="section-label">⭐ Customer Love</span>
        <h2 className="section-title">What Our <span>Neighbours Say</span></h2>
        <p className="section-subtitle">
          30+ years of trust, one happy customer at a time.
        </p>
      </div>

      <div className="reviews-grid">
        {REVIEWS.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.12 }}
            className="review-card"
          >
            <div className="quote-icon">
              <Quote className="w-5 h-5" />
            </div>
            <div className="stars">
              {Array.from({ length: r.stars }).map((_, j) => (
                <Star key={j} className="w-4 h-4 star-fill" />
              ))}
            </div>
            <p className="review-text">"{r.text}"</p>
            <div className="reviewer">
              <div className="reviewer-avatar" style={{ background: r.color }}>
                {r.initials}
              </div>
              <div>
                <p className="reviewer-name">{r.name}</p>
                <p className="reviewer-role">{r.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    <style jsx>{`
      .testimonials-section { background: var(--off-white); }
      .reviews-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.75rem;
      }
      .review-card {
        background: white;
        border-radius: var(--radius-xl);
        padding: 2rem;
        border: 1.5px solid var(--border-light);
        box-shadow: var(--shadow-sm);
        display: flex;
        flex-direction: column;
        gap: 1rem;
        transition: var(--transition);
        position: relative;
      }
      .review-card:hover {
        box-shadow: var(--shadow-xl);
        border-color: var(--saffron-light);
        transform: translateY(-4px);
      }
      .quote-icon {
        color: var(--saffron);
        opacity: 0.5;
      }
      .stars { display: flex; gap: 2px; }
      .star-fill { color: #FBBF24; fill: #FBBF24; }
      .review-text {
        font-size: 0.95rem;
        color: var(--text-mid);
        line-height: 1.8;
        flex: 1;
        font-style: italic;
      }
      .reviewer { display: flex; align-items: center; gap: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-light); }
      .reviewer-avatar {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        color: white;
        font-weight: 800;
        font-size: 0.95rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .reviewer-name { font-size: 0.9rem; font-weight: 700; color: var(--text-dark); }
      .reviewer-role { font-size: 0.78rem; color: var(--text-muted); margin-top: 0.1rem; }
      @media (max-width: 768px) {
        .reviews-grid { grid-template-columns: 1fr; }
      }
    `}</style>
  </section>
)

export default Testimonials
