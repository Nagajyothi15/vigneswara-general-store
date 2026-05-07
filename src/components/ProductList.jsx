import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Plus, Star, Filter } from 'lucide-react'

const CATEGORIES = ['All', 'Groceries', 'Stationery', 'Household']

const PRODUCTS = [
  // Groceries
  { id: 1, name: 'Sona Masoori Rice', category: 'Groceries', price: 68, unit: 'per kg', badge: 'Best Seller', emoji: '🌾', color: '#FFF7ED', accent: '#F97316', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Toor Dal (Split Pigeon Pea)', category: 'Groceries', price: 120, unit: 'per kg', emoji: '🫘', color: '#FFF7ED', accent: '#EA580C', img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Sunflower Cooking Oil', category: 'Groceries', price: 165, unit: 'per litre', badge: 'Popular', emoji: '🌻', color: '#FEFCE8', accent: '#CA8A04', img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=400' },
  { id: 4, name: 'Mixed Spice Combo Pack', category: 'Groceries', price: 85, unit: '250g each', emoji: '🌶️', color: '#FFF7ED', accent: '#DC2626', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400' },
  { id: 5, name: 'Lays Chips Variety Pack', category: 'Groceries', price: 40, unit: 'pack of 5', badge: 'New', emoji: '🍟', color: '#FEFCE8', accent: '#CA8A04', img: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=400' },
  { id: 6, name: 'Bru Coffee Powder', category: 'Groceries', price: 95, unit: '100g pack', emoji: '☕', color: '#FFF7ED', accent: '#92400E', img: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&q=80&w=400' },
  // Stationery
  { id: 7, name: 'A4 Ruled Notebook', category: 'Stationery', price: 45, unit: '200 pages', badge: 'Top Pick', emoji: '📓', color: '#EFF6FF', accent: '#3B82F6', img: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=400' },
  { id: 8, name: 'Ballpoint Pen Set', category: 'Stationery', price: 30, unit: 'pack of 10', emoji: '🖊️', color: '#EFF6FF', accent: '#2563EB', img: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&q=80&w=400' },
  { id: 9, name: 'Plastic File Folder', category: 'Stationery', price: 25, unit: 'A4 size', emoji: '📁', color: '#F0FDF4', accent: '#16A34A', img: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=400' },
  { id: 10, name: 'School Supply Kit', category: 'Stationery', price: 120, unit: 'complete set', badge: 'Value', emoji: '🎒', color: '#FFF7ED', accent: '#F97316', img: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&q=80&w=400' },
  // Household
  { id: 11, name: 'Vim Dishwash Bar', category: 'Household', price: 22, unit: '200g bar', emoji: '🧼', color: '#F0FDF4', accent: '#16A34A', img: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&q=80&w=400' },
  { id: 12, name: 'Stainless Steel Tiffin Box', category: 'Household', price: 250, unit: '3-tier set', badge: 'Premium', emoji: '🍱', color: '#F5F3FF', accent: '#7C3AED', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400' },
  { id: 13, name: 'Floor Cleaner (Phenyl)', category: 'Household', price: 75, unit: '500ml bottle', emoji: '🧹', color: '#EFF6FF', accent: '#3B82F6', img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=400' },
  { id: 14, name: 'Plastic Storage Container', category: 'Household', price: 180, unit: 'set of 3', badge: 'Popular', emoji: '📦', color: '#FFF7ED', accent: '#EA580C', img: 'https://images.unsplash.com/photo-1584727638096-042d6f45aa3c?auto=format&fit=crop&q=80&w=400' },
]

const ProductCard = ({ product, onAdd }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    whileHover={{ y: -6 }}
    className="product-card"
    style={{ '--card-accent': product.accent }}
  >
    {product.badge && (
      <span className="prod-badge">{product.badge}</span>
    )}
    <div className="prod-img-wrap" style={{ background: product.color }}>
      <img src={product.img} alt={product.name} />
      <div className="prod-emoji">{product.emoji}</div>
    </div>
    <div className="prod-body">
      <span className="prod-category">{product.category}</span>
      <h3 className="prod-name">{product.name}</h3>
      <div className="prod-footer">
        <div className="prod-price-group">
          <span className="prod-price">₹{product.price}</span>
          <span className="prod-unit">{product.unit}</span>
        </div>
        <button className="add-btn" onClick={() => onAdd(product)}>
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  </motion.div>
)

const ProductCatalog = ({ products, addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="products" className="section-pad products-section">
      <div className="container">
        <div className="section-header center">
          <span className="section-label">🛒 Product Catalog</span>
          <h2 className="section-title">
            Everything Under <span>One Roof</span>
          </h2>
          <p className="section-subtitle">
            Groceries, daily essentials, stationery, and household items — all at affordable prices, all in one place.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="cat-filter">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`cat-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'All' && '🏪 '}
              {cat === 'Groceries' && '🌾 '}
              {cat === 'Stationery' && '📚 '}
              {cat === 'Household' && '🏠 '}
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div className="products-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} onAdd={addToCart} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="catalog-cta">
          <p>Don't see what you need? <strong>We stock much more in-store!</strong></p>
          <a href="#contact" className="btn btn-outline">Call or Visit Us →</a>
        </div>
      </div>

      <style jsx>{`
        .products-section { background: var(--off-white); }

        .cat-filter {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }
        .cat-pill {
          padding: 0.6rem 1.5rem;
          border-radius: 9999px;
          font-size: 0.9rem;
          font-weight: 600;
          background: white;
          border: 2px solid var(--border);
          color: var(--text-mid);
          cursor: pointer;
          transition: var(--transition);
        }
        .cat-pill:hover { border-color: var(--saffron-light); color: var(--saffron); }
        .cat-pill.active {
          background: var(--saffron);
          border-color: var(--saffron);
          color: white;
          box-shadow: 0 4px 12px rgba(249,115,22,0.35);
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        /* Product Card */
        .product-card {
          background: white;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1.5px solid var(--border-light);
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
          position: relative;
          cursor: default;
        }
        .product-card:hover {
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          border-color: var(--card-accent, var(--saffron-light));
        }
        .prod-badge {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          z-index: 2;
          background: var(--saffron);
          color: white;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 0.25rem 0.7rem;
          border-radius: 9999px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .prod-img-wrap {
          position: relative;
          height: 170px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .prod-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .product-card:hover .prod-img-wrap img { transform: scale(1.07); }
        .prod-emoji {
          position: absolute;
          bottom: 0.6rem;
          right: 0.6rem;
          font-size: 1.5rem;
          background: white;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          z-index: 2;
        }
        .prod-body { padding: 1rem 1.1rem 1.1rem; }
        .prod-category {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--saffron);
          display: block;
          margin-bottom: 0.35rem;
        }
        .prod-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 0.9rem;
          line-height: 1.35;
          min-height: 2.5rem;
        }
        .prod-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .prod-price-group { display: flex; align-items: baseline; gap: 0.35rem; }
        .prod-price { font-size: 1.2rem; font-weight: 800; color: var(--green-dark); }
        .prod-unit { font-size: 0.72rem; color: var(--text-muted); font-weight: 500; }
        .add-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--saffron);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 3px 8px rgba(249,115,22,0.4);
          transition: var(--transition);
          flex-shrink: 0;
        }
        .add-btn:hover { background: var(--saffron-dark); transform: scale(1.15); }

        .catalog-cta {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          color: var(--text-muted);
          font-size: 1rem;
        }
        .catalog-cta strong { color: var(--text-dark); }

        @media (max-width: 1024px) {
          .products-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .products-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
        }
        @media (max-width: 400px) {
          .products-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}

export { PRODUCTS }
export default ProductCatalog
