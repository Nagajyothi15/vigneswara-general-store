import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShoppingCart, Search, Menu, X, Store, Phone, MapPin } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Products', href: '/products' },
  { label: 'Offers', href: '/#offers' },
  { label: 'Contact', href: '/#contact' },
]

const Navbar = ({ cartCount, openCart, searchQuery, setSearchQuery }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top strip */}
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span><Phone className="w-3 h-3" /> +91 99497 60927</span>
          <span><MapPin className="w-3 h-3" /> China Palakaluru, AP — Open Daily 6 AM – 10 PM</span>
        </div>
      </div>

      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-inner">
          {/* Logo */}
          <Link to="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
            <div className="logo-icon">
              <Store className="w-5 h-5" />
            </div>
            <div className="logo-text">
              <span className="logo-main">Vigneswara</span>
              <span className="logo-sub">General Store</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="nav-links">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <Link to={link.href} className="nav-link" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="nav-actions">
            {/* Search */}
            <div className={`search-wrap ${searchOpen ? 'open' : ''}`}>
              {searchOpen && (
                <motion.input
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 180, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  autoFocus
                  className="search-input"
                />
              )}
              <button
                className="icon-btn"
                onClick={() => { setSearchOpen(!searchOpen); if (searchOpen) setSearchQuery('') }}
                aria-label="Search"
              >
                {searchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
              </button>
            </div>

            {/* Cart */}
            <button className="cart-btn" onClick={openCart} aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            {/* Mobile toggle */}
            <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mobile-menu"
            >
              <ul>
                {NAV_LINKS.map(link => (
                  <li key={link.href}>
                <Link to={link.href} onClick={() => setMobileOpen(false)}>{link.label}</Link>
              </li>
                ))}
              </ul>
              <div className="mobile-search">
                <Search className="w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <style jsx>{`
        .top-strip {
          background: var(--saffron-dark);
          color: white;
          font-size: 0.78rem;
          font-weight: 500;
          padding: 0.45rem 0;
        }
        .top-strip-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .top-strip span {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          opacity: 0.95;
        }

        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          background: white;
          border-bottom: 2px solid var(--border-light);
          transition: var(--transition);
        }
        .navbar-scrolled {
          box-shadow: 0 4px 20px rgba(249,115,22,0.12);
          border-bottom-color: rgba(249,115,22,0.15);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.85rem;
          padding-bottom: 0.85rem;
          gap: 1.5rem;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }
        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--saffron), var(--saffron-dark));
          color: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(249,115,22,0.35);
        }
        .logo-text { display: flex; flex-direction: column; line-height: 1; }
        .logo-main { font-size: 1.15rem; font-weight: 800; color: var(--text-dark); letter-spacing: -0.02em; }
        .logo-sub { font-size: 0.65rem; font-weight: 600; color: var(--saffron); text-transform: uppercase; letter-spacing: 0.08em; }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
        }
        .nav-link {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-mid);
          padding: 0.5rem 0.9rem;
          border-radius: 8px;
          transition: var(--transition);
          position: relative;
        }
        .nav-link:hover {
          color: var(--saffron);
          background: var(--saffron-pale);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
        }
        .search-wrap { display: flex; align-items: center; }
        .search-input {
          border: 2px solid var(--saffron-light);
          border-radius: 9999px;
          padding: 0.4rem 1rem;
          font-size: 0.85rem;
          outline: none;
          color: var(--text-dark);
          font-family: inherit;
        }
        .icon-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-mid);
          background: var(--off-white);
          transition: var(--transition);
        }
        .icon-btn:hover { background: var(--saffron-pale); color: var(--saffron); }
        .cart-btn {
          position: relative;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          background: var(--saffron);
          box-shadow: 0 4px 10px rgba(249,115,22,0.35);
          transition: var(--transition);
        }
        .cart-btn:hover { background: var(--saffron-dark); transform: scale(1.05); }
        .cart-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          background: var(--green);
          color: white;
          font-size: 0.6rem;
          font-weight: 800;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
        }
        .mobile-toggle {
          display: none;
          color: var(--text-dark);
          padding: 0.25rem;
        }

        .mobile-menu {
          overflow: hidden;
          background: white;
          border-top: 1px solid var(--border-light);
        }
        .mobile-menu ul {
          display: flex;
          flex-direction: column;
          padding: 1rem 1.5rem;
          gap: 0.25rem;
        }
        .mobile-menu a {
          display: block;
          padding: 0.65rem 1rem;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-mid);
          border-radius: 8px;
          transition: var(--transition);
        }
        .mobile-menu a:hover { color: var(--saffron); background: var(--saffron-pale); }
        .mobile-search {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin: 0 1.5rem 1rem;
          background: var(--off-white);
          border: 1px solid var(--border);
          border-radius: 9999px;
          padding: 0.65rem 1.25rem;
        }
        .mobile-search svg { color: var(--text-muted); flex-shrink: 0; }
        .mobile-search input {
          border: none;
          background: transparent;
          outline: none;
          font-size: 0.9rem;
          width: 100%;
          font-family: inherit;
          color: var(--text-dark);
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .mobile-toggle { display: flex; }
          .search-wrap { display: none; }
          .top-strip-inner { flex-direction: column; gap: 0.25rem; font-size: 0.72rem; }
        }
      `}</style>
    </>
  )
}

export default Navbar
