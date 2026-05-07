import React from 'react'
import { Store, Phone, MapPin, Clock, Heart, Globe, Link, MessageCircle, ArrowRight } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Offers & Deals', href: '#offers' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'FAQ', href: '#faq' },
]

const CATEGORIES = [
  { label: 'Groceries & Essentials', href: '#products' },
  { label: 'Rice, Pulses & Oils', href: '#products' },
  { label: 'Spices & Masalas', href: '#products' },
  { label: 'Stationery', href: '#products' },
  { label: 'Household Items', href: '#products' },
  { label: 'Snacks & Beverages', href: '#products' },
]

const Footer = () => (
  <footer className="footer">
    {/* Newsletter CTA */}
    <div className="footer-newsletter">
      <div className="container newsletter-inner">
        <div className="newsletter-text">
          <h3>Stay Updated with Our Latest Offers!</h3>
          <p>Follow us on WhatsApp for daily deals, new arrivals, and seasonal discounts.</p>
        </div>
        <a
          href="https://wa.me/919949760927?text=Hi! Please add me to your offers list."
          target="_blank"
          rel="noreferrer"
          className="btn btn-white"
        >
          <MessageCircle className="w-5 h-5" />
          Join WhatsApp List
        </a>
      </div>
    </div>

    {/* Main Footer */}
    <div className="footer-main">
      <div className="container footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">
              <Store className="w-6 h-6" />
            </div>
            <div>
              <p className="footer-logo-name">Vigneswara</p>
              <p className="footer-logo-sub">General Store</p>
            </div>
          </div>
          <p className="footer-tagline">
            Your trusted neighbourhood store for groceries, daily essentials, stationery, and household items — serving China Palakaluru since 1995.
          </p>
          <div className="footer-socials">
            <a href="https://wa.me/919949760927" target="_blank" rel="noreferrer" className="social-btn wa" title="WhatsApp">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-btn fb" title="Facebook">
              <Globe className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn ig" title="Instagram">
              <Link className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links">
            {QUICK_LINKS.map(l => (
              <li key={l.href}>
                <a href={l.href}>
                  <ArrowRight className="w-3.5 h-3.5" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-col">
          <h4 className="footer-col-title">Our Categories</h4>
          <ul className="footer-links">
            {CATEGORIES.map(c => (
              <li key={c.label}>
                <a href={c.href}>
                  <ArrowRight className="w-3.5 h-3.5" />
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4 className="footer-col-title">Contact Us</h4>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <MapPin className="w-4 h-4" />
              <span>Main Road, China Palakaluru, AP – 522009</span>
            </div>
            <div className="footer-contact-item">
              <Phone className="w-4 h-4" />
              <a href="tel:+919949760927">+91 99497 60927</a>
            </div>
            <div className="footer-contact-item">
              <Clock className="w-4 h-4" />
              <span>Open Daily · 6 AM – 10 PM</span>
            </div>
            <div className="footer-contact-item">
              <MessageCircle className="w-4 h-4" />
              <a href="https://wa.me/919949760927" target="_blank" rel="noreferrer">
                WhatsApp Orders
              </a>
            </div>
          </div>

          <div className="footer-hours-card">
            <div className="hours-dot"></div>
            <div>
              <p className="hours-title">Open 7 Days a Week</p>
              <p className="hours-time">6:00 AM – 10:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="footer-bottom">
      <div className="container footer-bottom-inner">
        <p>
          © {new Date().getFullYear()} Vigneswara General Store. All rights reserved.
        </p>
        <p className="made-with">
          Made with <Heart className="w-3.5 h-3.5 heart-icon" /> for the China Palakaluru community
        </p>
      </div>
    </div>

    <style jsx>{`
      .footer { background: #1C1917; color: #D6D3D1; }

      /* Newsletter */
      .footer-newsletter {
        background: linear-gradient(135deg, var(--saffron-dark) 0%, var(--saffron) 100%);
        padding: 2.5rem 0;
      }
      .newsletter-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        flex-wrap: wrap;
      }
      .newsletter-text h3 {
        font-size: 1.2rem;
        font-weight: 800;
        color: white;
        margin-bottom: 0.3rem;
      }
      .newsletter-text p { font-size: 0.9rem; color: rgba(255,255,255,0.85); }

      /* Main footer */
      .footer-main { padding: 4rem 0 3rem; }
      .footer-grid {
        display: grid;
        grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
        gap: 3rem;
      }

      /* Brand */
      .footer-logo {
        display: flex;
        align-items: center;
        gap: 0.85rem;
        margin-bottom: 1.25rem;
      }
      .footer-logo-icon {
        width: 44px;
        height: 44px;
        background: var(--saffron);
        color: white;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .footer-logo-name { font-size: 1.15rem; font-weight: 800; color: white; line-height: 1; }
      .footer-logo-sub { font-size: 0.65rem; font-weight: 600; color: var(--saffron-light); text-transform: uppercase; letter-spacing: 0.08em; }
      .footer-tagline {
        font-size: 0.875rem;
        line-height: 1.7;
        color: #A8A29E;
        margin-bottom: 1.5rem;
      }
      .footer-socials { display: flex; gap: 0.75rem; }
      .social-btn {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: var(--transition);
        font-size: 1rem;
      }
      .social-btn.wa { background: #25D366; color: white; }
      .social-btn.fb { background: #1877F2; color: white; }
      .social-btn.ig { background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); color: white; }
      .social-btn:hover { transform: translateY(-3px) scale(1.1); opacity: 0.9; }

      /* Cols */
      .footer-col-title {
        font-size: 0.8rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        color: white;
        margin-bottom: 1.25rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid #292524;
      }
      .footer-links { display: flex; flex-direction: column; gap: 0.65rem; }
      .footer-links a {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.875rem;
        color: #A8A29E;
        transition: var(--transition);
      }
      .footer-links a svg { flex-shrink: 0; opacity: 0.5; }
      .footer-links a:hover { color: var(--saffron-light); transform: translateX(4px); }

      /* Contact */
      .footer-contact-list { display: flex; flex-direction: column; gap: 0.85rem; margin-bottom: 1.25rem; }
      .footer-contact-item {
        display: flex;
        align-items: flex-start;
        gap: 0.65rem;
        font-size: 0.875rem;
        color: #A8A29E;
      }
      .footer-contact-item svg { color: var(--saffron); flex-shrink: 0; margin-top: 2px; }
      .footer-contact-item a:hover { color: var(--saffron-light); }

      .footer-hours-card {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        background: #292524;
        border-radius: var(--radius-md);
        padding: 0.85rem 1.1rem;
        border-left: 3px solid var(--green);
      }
      .hours-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--green);
        flex-shrink: 0;
        animation: pulse 2s ease-in-out infinite;
      }
      @keyframes pulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(22,163,74,0.5); }
        50% { box-shadow: 0 0 0 6px rgba(22,163,74,0); }
      }
      .hours-title { font-size: 0.78rem; font-weight: 700; color: white; }
      .hours-time { font-size: 0.75rem; color: #A8A29E; }

      /* Bottom */
      .footer-bottom {
        border-top: 1px solid #292524;
        padding: 1.25rem 0;
      }
      .footer-bottom-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.5rem;
        font-size: 0.8rem;
        color: #78716C;
      }
      .made-with {
        display: flex;
        align-items: center;
        gap: 0.35rem;
      }
      .heart-icon { color: #F97316; fill: #F97316; }

      @media (max-width: 1024px) {
        .footer-grid { grid-template-columns: 1fr 1fr; }
        .footer-brand { grid-column: 1 / -1; }
      }
      @media (max-width: 640px) {
        .footer-grid { grid-template-columns: 1fr; }
        .footer-brand { grid-column: auto; }
        .footer-bottom-inner { flex-direction: column; text-align: center; }
        .newsletter-inner { flex-direction: column; text-align: center; }
      }
    `}</style>
  </footer>
)

export default Footer
