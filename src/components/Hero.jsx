import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, ArrowRight, Star, CheckCircle2, Clock } from 'lucide-react'

const TRUST_BADGES = [
  { icon: '🏆', text: '30+ Years Trusted' },
  { icon: '✅', text: 'Quality Assured' },
  { icon: '💰', text: 'Best Local Prices' },
  { icon: '🚚', text: 'Home Delivery' },
]

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Decorative BG */}
      <div className="hero-bg-pattern"></div>

      <div className="container hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-eyebrow"
          >
            <Star className="w-4 h-4 fill-current" />
            <span>Welcome to Vigneswara General Store</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hero-heading"
          >
            Your Neighborhood Store for <span className="heading-highlight">Everything</span> You Need
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hero-sub"
          >
            From fresh groceries and daily essentials to stationery and household items — get it all at Vigneswara, serving our community with love since 1995.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="hero-cta"
          >
            <a href="#products" className="btn btn-orange">
              <ShoppingBag className="w-5 h-5" />
              Shop Now
            </a>
            <a href="#offers" className="btn btn-outline">
              View Deals <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="trust-badges"
          >
            {TRUST_BADGES.map((b, i) => (
              <div key={i} className="trust-badge">
                <span className="badge-icon">{b.icon}</span>
                <span>{b.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-visual"
        >
          <div className="hero-img-card">
            <img
              src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=700"
              alt="Vigneswara General Store – Full shelves of groceries"
            />
            <div className="hero-img-overlay">
              <div className="store-badge">
                <Clock className="w-4 h-4" />
                <span>Open Daily · 6 AM – 10 PM</span>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <div className="float-card float-card-1">
            <span className="float-emoji">🛒</span>
            <div>
              <p className="float-num">500+</p>
              <p className="float-label">Products</p>
            </div>
          </div>
          <div className="float-card float-card-2">
            <span className="float-emoji">😊</span>
            <div>
              <p className="float-num">2000+</p>
              <p className="float-label">Happy Customers</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Wave */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white"/>
        </svg>
      </div>

      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #FFF7ED 0%, #FEF3C7 40%, #ECFDF5 100%);
          position: relative;
          overflow: hidden;
          padding: 5.5rem 0 0;
        }
        .hero-bg-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 20% 50%, rgba(249,115,22,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(22,163,74,0.08) 0%, transparent 40%);
          pointer-events: none;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 4rem;
          padding-bottom: 4rem;
        }
        .hero-content { max-width: 580px; }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--saffron);
          color: white;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.45rem 1rem;
          border-radius: 9999px;
          margin-bottom: 1.5rem;
        }
        .hero-heading {
          font-size: 3.2rem;
          font-weight: 800;
          line-height: 1.15;
          color: var(--text-dark);
          margin-bottom: 1.25rem;
          letter-spacing: -0.02em;
        }
        .heading-highlight {
          color: var(--saffron);
          position: relative;
        }
        .heading-highlight::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 2px;
          width: 100%;
          height: 4px;
          background: var(--green);
          border-radius: 4px;
          opacity: 0.4;
        }
        .hero-sub {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.75;
          margin-bottom: 2rem;
        }
        .hero-cta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }
        .trust-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .trust-badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: white;
          border: 1px solid var(--border);
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-mid);
          box-shadow: var(--shadow-sm);
        }
        .badge-icon { font-size: 0.95rem; }

        /* Hero visual */
        .hero-visual { position: relative; }
        .hero-img-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(249,115,22,0.2);
          border: 3px solid white;
        }
        .hero-img-card img {
          width: 100%;
          height: 420px;
          object-fit: cover;
        }
        .hero-img-overlay {
          position: absolute;
          bottom: 1.25rem;
          left: 1.25rem;
        }
        .store-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(8px);
          padding: 0.6rem 1.25rem;
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--green-dark);
          box-shadow: var(--shadow-md);
          border: 1px solid rgba(22,163,74,0.2);
        }
        .float-card {
          position: absolute;
          background: white;
          border-radius: 16px;
          padding: 0.85rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-light);
          animation: float 4s ease-in-out infinite;
        }
        .float-card-1 { top: -1rem; right: -1.5rem; animation-delay: 0s; }
        .float-card-2 { bottom: 4rem; left: -2rem; animation-delay: 2s; }
        .float-emoji { font-size: 1.5rem; }
        .float-num { font-size: 1.1rem; font-weight: 800; color: var(--saffron); line-height: 1; }
        .float-label { font-size: 0.72rem; font-weight: 600; color: var(--text-muted); }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .hero-wave {
          position: relative;
          height: 80px;
          margin-top: -1px;
        }
        .hero-wave svg { width: 100%; height: 100%; }

        @media (max-width: 1024px) {
          .hero-heading { font-size: 2.6rem; }
          .hero-img-card img { height: 360px; }
        }
        @media (max-width: 768px) {
          .hero-container { grid-template-columns: 1fr; gap: 2.5rem; }
          .hero-heading { font-size: 2.1rem; }
          .hero-visual { order: -1; }
          .hero-img-card img { height: 280px; }
          .float-card-1 { top: -0.5rem; right: 0.5rem; }
          .float-card-2 { bottom: 2rem; left: 0; }
          .trust-badges { gap: 0.5rem; }
          .hero-section { padding-top: 4rem; }
        }
        @media (max-width: 480px) {
          .hero-heading { font-size: 1.75rem; }
          .hero-cta { flex-direction: column; }
          .hero-cta .btn { text-align: center; justify-content: center; }
        }
      `}</style>
    </section>
  )
}

export default Hero
