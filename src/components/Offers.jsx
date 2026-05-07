import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Tag, Clock, Zap, Gift, ArrowRight, Percent } from 'lucide-react'

const OFFERS = [
  {
    id: 1,
    title: 'Rice & Dal Combo',
    desc: 'Buy 5kg Sona Masoori Rice + 1kg Toor Dal and save big on your monthly essentials.',
    tag: 'Combo Deal',
    discount: '15% OFF',
    original: '₹460',
    offer: '₹391',
    emoji: '🌾',
    color: '#FFF7ED',
    accent: '#F97316',
    expires: 'Valid this week',
  },
  {
    id: 2,
    title: 'Stationery Bundle',
    desc: '2 A4 notebooks + 1 pen set + 1 file folder — perfect for students going back to school.',
    tag: 'School Special',
    discount: '20% OFF',
    original: '₹145',
    offer: '₹116',
    emoji: '📚',
    color: '#EFF6FF',
    accent: '#3B82F6',
    expires: 'Limited stock',
  },
  {
    id: 3,
    title: 'Household Starter Kit',
    desc: 'Vim bar + floor cleaner + 3 storage containers — everything you need for a clean home.',
    tag: 'Value Pack',
    discount: '12% OFF',
    original: '₹347',
    offer: '₹305',
    emoji: '🏠',
    color: '#F0FDF4',
    accent: '#16A34A',
    expires: 'While stocks last',
  },
]

const FLASHDEALS = [
  { emoji: '☕', name: 'Bru Coffee 100g', was: '₹110', now: '₹95', off: '14%' },
  { emoji: '🌶️', name: 'Spice Combo 250g', was: '₹100', now: '₹85', off: '15%' },
  { emoji: '🧼', name: 'Vim Dishwash 200g', was: '₹28', now: '₹22', off: '21%' },
  { emoji: '📓', name: 'A4 Notebook 200pg', was: '₹55', now: '₹45', off: '18%' },
]

const CountdownTimer = () => {
  const [time, setTime] = useState({ h: 11, m: 45, s: 30 })
  useEffect(() => {
    const t = setInterval(() => {
      setTime(prev => {
        let { h, m, s } = prev
        s--
        if (s < 0) { s = 59; m-- }
        if (m < 0) { m = 59; h-- }
        if (h < 0) { h = 23; m = 59; s = 59 }
        return { h, m, s }
      })
    }, 1000)
    return () => clearInterval(t)
  }, [])
  const pad = n => String(n).padStart(2, '0')
  return (
    <div className="timer-wrap">
      <Clock className="w-4 h-4" />
      <span>Deals reset in:</span>
      <div className="timer-blocks">
        <span className="t-block">{pad(time.h)}<small>h</small></span>
        <span className="colon">:</span>
        <span className="t-block">{pad(time.m)}<small>m</small></span>
        <span className="colon">:</span>
        <span className="t-block">{pad(time.s)}<small>s</small></span>
      </div>
    </div>
  )
}

const Offers = () => (
  <section id="offers" className="section-pad offers-section">
    <div className="container">
      <div className="section-header center">
        <span className="section-label">🎉 Special Offers</span>
        <h2 className="section-title">Today's <span>Best Deals</span></h2>
        <p className="section-subtitle">
          Hand-picked offers updated weekly. Grab them before they're gone!
        </p>
      </div>

      {/* Main Offer Cards */}
      <div className="offers-grid">
        {OFFERS.map((offer, i) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.12 }}
            className="offer-card"
            style={{ '--offer-color': offer.color, '--offer-accent': offer.accent }}
          >
            <div className="offer-top">
              <div className="offer-emoji-wrap" style={{ background: offer.color }}>
                <span className="offer-emoji">{offer.emoji}</span>
              </div>
              <div className="offer-header-right">
                <span className="offer-tag" style={{ background: offer.accent }}>{offer.tag}</span>
                <span className="offer-discount">{offer.discount}</span>
              </div>
            </div>

            <h3 className="offer-title">{offer.title}</h3>
            <p className="offer-desc">{offer.desc}</p>

            <div className="offer-footer">
              <div className="offer-pricing">
                <span className="offer-now" style={{ color: offer.accent }}>
                  {offer.offer}
                </span>
                <span className="offer-was">{offer.original}</span>
              </div>
              <span className="offer-expires">
                <Clock className="w-3 h-3" /> {offer.expires}
              </span>
            </div>

            <a href="#contact" className="offer-cta" style={{ background: offer.accent }}>
              Claim Offer <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>

      {/* Flash Deals Strip */}
      <div className="flash-deals-wrap">
        <div className="flash-header">
          <div className="flash-title">
            <Zap className="w-5 h-5" />
            <span>Flash Deals of the Day</span>
          </div>
          <CountdownTimer />
        </div>
        <div className="flash-grid">
          {FLASHDEALS.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flash-card"
            >
              <span className="flash-emoji">{d.emoji}</span>
              <div className="flash-info">
                <p className="flash-name">{d.name}</p>
                <div className="flash-prices">
                  <span className="flash-now">{d.now}</span>
                  <span className="flash-was">{d.was}</span>
                </div>
              </div>
              <span className="flash-off">-{d.off}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Banner */}
      <div className="offers-banner">
        <div className="banner-content">
          <Gift className="banner-icon" />
          <div>
            <h3>Free Delivery on Orders Above ₹500</h3>
            <p>Within 3 km of China Palakaluru — Order by phone or WhatsApp</p>
          </div>
        </div>
        <a
          href="https://wa.me/919949760927?text=Hi, I'd like to place an order"
          target="_blank"
          rel="noreferrer"
          className="btn btn-white"
        >
          Order on WhatsApp →
        </a>
      </div>
    </div>

    <style jsx>{`
      .offers-section { background: var(--cream); }

      /* Offer Cards */
      .offers-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.75rem;
        margin-bottom: 3rem;
      }
      .offer-card {
        background: white;
        border-radius: var(--radius-xl);
        padding: 1.75rem;
        border: 1.5px solid var(--border-light);
        box-shadow: var(--shadow-sm);
        display: flex;
        flex-direction: column;
        gap: 1rem;
        transition: var(--transition);
        position: relative;
        overflow: hidden;
      }
      .offer-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: var(--offer-accent);
        border-radius: 4px 4px 0 0;
      }
      .offer-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        border-color: var(--offer-accent, var(--saffron-light));
      }
      .offer-top { display: flex; align-items: center; justify-content: space-between; }
      .offer-emoji-wrap {
        width: 60px;
        height: 60px;
        border-radius: var(--radius-md);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .offer-emoji { font-size: 1.75rem; }
      .offer-header-right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.4rem;
      }
      .offer-tag {
        color: white;
        font-size: 0.68rem;
        font-weight: 700;
        padding: 0.2rem 0.65rem;
        border-radius: 9999px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .offer-discount {
        font-size: 1.3rem;
        font-weight: 800;
        color: var(--green-dark);
      }
      .offer-title { font-size: 1.1rem; font-weight: 700; color: var(--text-dark); }
      .offer-desc { font-size: 0.875rem; color: var(--text-muted); line-height: 1.65; flex: 1; }
      .offer-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
      .offer-pricing { display: flex; align-items: baseline; gap: 0.5rem; }
      .offer-now { font-size: 1.5rem; font-weight: 800; }
      .offer-was {
        text-decoration: line-through;
        color: var(--text-muted);
        font-size: 0.9rem;
      }
      .offer-expires {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        font-size: 0.75rem;
        color: var(--text-muted);
        font-weight: 500;
      }
      .offer-cta {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        color: white;
        font-weight: 700;
        font-size: 0.9rem;
        padding: 0.8rem;
        border-radius: var(--radius-md);
        transition: var(--transition);
      }
      .offer-cta:hover { filter: brightness(1.1); transform: translateY(-1px); }

      /* Flash deals */
      .flash-deals-wrap {
        background: white;
        border-radius: var(--radius-xl);
        padding: 1.75rem;
        border: 1.5px solid var(--border-light);
        box-shadow: var(--shadow-sm);
        margin-bottom: 2.5rem;
      }
      .flash-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
        gap: 1rem;
      }
      .flash-title {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.1rem;
        font-weight: 800;
        color: var(--saffron-dark);
      }
      .flash-title svg { color: var(--saffron); }
      .timer-wrap {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--text-muted);
      }
      .timer-blocks { display: flex; align-items: center; gap: 0.25rem; }
      .t-block {
        background: var(--saffron);
        color: white;
        font-size: 0.95rem;
        font-weight: 800;
        padding: 0.25rem 0.5rem;
        border-radius: 6px;
        min-width: 36px;
        text-align: center;
      }
      .t-block small { font-size: 0.55rem; font-weight: 600; margin-left: 2px; }
      .colon { font-weight: 800; color: var(--saffron); }

      .flash-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
      }
      .flash-card {
        display: flex;
        align-items: center;
        gap: 0.85rem;
        padding: 1rem;
        background: var(--saffron-pale);
        border-radius: var(--radius-md);
        border: 1px solid rgba(249,115,22,0.15);
        position: relative;
        transition: var(--transition);
      }
      .flash-card:hover {
        background: var(--saffron-pale);
        box-shadow: var(--shadow-md);
        transform: translateY(-2px);
      }
      .flash-emoji { font-size: 1.75rem; flex-shrink: 0; }
      .flash-name { font-size: 0.85rem; font-weight: 700; color: var(--text-dark); margin-bottom: 0.3rem; }
      .flash-prices { display: flex; align-items: baseline; gap: 0.4rem; }
      .flash-now { font-size: 1rem; font-weight: 800; color: var(--green-dark); }
      .flash-was { font-size: 0.75rem; color: var(--text-muted); text-decoration: line-through; }
      .flash-off {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: var(--saffron);
        color: white;
        font-size: 0.65rem;
        font-weight: 800;
        padding: 0.15rem 0.45rem;
        border-radius: 9999px;
      }

      /* Banner */
      .offers-banner {
        background: linear-gradient(135deg, var(--saffron-dark), var(--saffron));
        border-radius: var(--radius-xl);
        padding: 2rem 2.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        color: white;
      }
      .banner-content { display: flex; align-items: center; gap: 1.25rem; }
      .banner-icon { width: 40px; height: 40px; flex-shrink: 0; }
      .banner-content h3 { font-size: 1.15rem; font-weight: 800; margin-bottom: 0.25rem; }
      .banner-content p { font-size: 0.875rem; opacity: 0.88; }

      @media (max-width: 1024px) {
        .flash-grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 768px) {
        .offers-grid { grid-template-columns: 1fr; }
        .offers-banner { flex-direction: column; text-align: center; }
        .banner-content { flex-direction: column; }
        .flash-grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 480px) {
        .flash-grid { grid-template-columns: 1fr; }
      }
    `}</style>
  </section>
)

export default Offers
