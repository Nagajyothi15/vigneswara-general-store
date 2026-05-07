import React from 'react'
import { MapPin, Clock, Phone, MessageCircle, Mail, Navigation } from 'lucide-react'
import { motion } from 'framer-motion'

const INFO = [
  {
    icon: <MapPin className="w-6 h-6" />,
    color: '#F97316',
    bg: '#FFF7ED',
    title: 'Store Address',
    lines: ['Vigneswara General Store', 'Main Road, China Palakaluru,', 'Chinapalakaluru, Andhra Pradesh – 522009'],
    action: { label: 'Get Directions', href: 'https://maps.google.com/?q=China+Palakaluru+Andhra+Pradesh', icon: <Navigation className="w-4 h-4" /> },
  },
  {
    icon: <Clock className="w-6 h-6" />,
    color: '#16A34A',
    bg: '#F0FDF4',
    title: 'Business Hours',
    lines: ['Monday – Sunday', '6:00 AM – 10:00 PM', 'Open on all holidays'],
    badge: '🟢 Open Now',
  },
  {
    icon: <Phone className="w-6 h-6" />,
    color: '#3B82F6',
    bg: '#EFF6FF',
    title: 'Call / WhatsApp',
    lines: ['+91 99497 60927', '+91 96427 28251', 'Place orders by phone or WhatsApp'],
    action: { label: 'WhatsApp Us', href: 'https://wa.me/919949760927?text=Hi, I want to place an order', icon: <MessageCircle className="w-4 h-4" /> },
  },
]

const Location = () => (
  <section id="contact" className="section-pad contact-section">
    <div className="container">
      <div className="section-header center">
        <span className="section-label">📍 Find Us</span>
        <h2 className="section-title">Contact &amp; <span>Location</span></h2>
        <p className="section-subtitle">
          Located in the heart of China Palakaluru — easy to find and always welcoming.
        </p>
      </div>

      <div className="contact-layout">
        {/* Info Cards */}
        <div className="info-cards-col">
          {INFO.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="info-card"
            >
              <div className="info-icon-wrap" style={{ background: item.bg, color: item.color }}>
                {item.icon}
              </div>
              <div className="info-body">
                <h3 className="info-title">{item.title}</h3>
                {item.badge && (
                  <span className="open-badge">{item.badge}</span>
                )}
                {item.lines.map((line, j) => (
                  <p key={j} className="info-line">{line}</p>
                ))}
                {item.action && (
                  <a
                    href={item.action.href}
                    target="_blank"
                    rel="noreferrer"
                    className="info-action-btn"
                    style={{ color: item.color, borderColor: item.color }}
                  >
                    {item.action.icon}
                    {item.action.label}
                  </a>
                )}
              </div>
            </motion.div>
          ))}

          {/* WhatsApp Banner */}
          <div className="wa-banner">
            <div className="wa-left">
              <span className="wa-emoji">💬</span>
              <div>
                <p className="wa-title">Order via WhatsApp</p>
                <p className="wa-sub">Send your list and we'll deliver to your door!</p>
              </div>
            </div>
            <a
              href="https://wa.me/919949760927?text=Hello! I'd like to place a grocery order."
              target="_blank"
              rel="noreferrer"
              className="btn btn-green"
            >
              Chat Now
            </a>
          </div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="map-col"
        >
          <div className="map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15442.274026364537!2d80.3540846!3d16.3296141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3589f71fb8131d%3A0x6fe6edc8d6da6a6b!2sChina%20Palakaluru%2C%20Chinapalakaluru%2C%20Andhra%20Pradesh%20522009!5e0!3m2!1sen!2sin!4v1712078512345!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vigneswara General Store Location"
            />
          </div>
          <div className="map-label">
            <MapPin className="w-4 h-4" />
            <span>China Palakaluru, Chinapalakaluru, AP 522009</span>
          </div>
        </motion.div>
      </div>
    </div>

    <style jsx>{`
      .contact-section { background: white; }

      .contact-layout {
        display: grid;
        grid-template-columns: 1fr 1.3fr;
        gap: 3rem;
        align-items: start;
      }

      /* Info Cards */
      .info-cards-col { display: flex; flex-direction: column; gap: 1.25rem; }
      .info-card {
        display: flex;
        gap: 1.25rem;
        padding: 1.5rem;
        background: var(--off-white);
        border-radius: var(--radius-lg);
        border: 1.5px solid var(--border-light);
        transition: var(--transition);
      }
      .info-card:hover {
        border-color: var(--saffron-light);
        box-shadow: var(--shadow-md);
        background: white;
      }
      .info-icon-wrap {
        width: 52px;
        height: 52px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .info-title { font-size: 0.9rem; font-weight: 800; color: var(--text-dark); margin-bottom: 0.35rem; text-transform: uppercase; letter-spacing: 0.05em; }
      .open-badge {
        display: inline-block;
        font-size: 0.75rem;
        font-weight: 700;
        color: var(--green-dark);
        margin-bottom: 0.35rem;
      }
      .info-line { font-size: 0.875rem; color: var(--text-muted); line-height: 1.65; }
      .info-action-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.82rem;
        font-weight: 700;
        margin-top: 0.75rem;
        border: 1.5px solid;
        border-radius: 9999px;
        padding: 0.35rem 0.9rem;
        transition: var(--transition);
      }
      .info-action-btn:hover { opacity: 0.8; transform: translateX(3px); }

      /* WhatsApp Banner */
      .wa-banner {
        background: linear-gradient(135deg, #DCFCE7, #BBF7D0);
        border: 1.5px solid #86EFAC;
        border-radius: var(--radius-lg);
        padding: 1.25rem 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
      }
      .wa-left { display: flex; align-items: center; gap: 0.85rem; }
      .wa-emoji { font-size: 1.75rem; }
      .wa-title { font-size: 0.9rem; font-weight: 800; color: var(--green-dark); }
      .wa-sub { font-size: 0.78rem; color: #166534; }

      /* Map */
      .map-col { display: flex; flex-direction: column; gap: 0.75rem; }
      .map-wrap {
        height: 440px;
        border-radius: var(--radius-xl);
        overflow: hidden;
        border: 3px solid var(--saffron-light);
        box-shadow: var(--shadow-xl);
      }
      .map-label {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.85rem;
        color: var(--text-muted);
        font-weight: 500;
        padding-left: 0.25rem;
        color: var(--saffron-dark);
      }

      @media (max-width: 1024px) {
        .contact-layout { grid-template-columns: 1fr; }
        .map-wrap { height: 350px; }
        .map-col { order: -1; }
      }
      @media (max-width: 480px) {
        .wa-banner { flex-direction: column; text-align: center; }
        .wa-left { flex-direction: column; }
      }
    `}</style>
  </section>
)

export default Location
