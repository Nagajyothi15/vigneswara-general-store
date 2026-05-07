import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Tag } from 'lucide-react'

const CartSidebar = ({ items, total, closeCart, updateQuantity, removeFromCart, clearCart }) => {
  const [authMode, setAuthMode] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authEmail, setAuthEmail] = useState('')
  const [authPhone, setAuthPhone] = useState('')
  const [checkoutStep, setCheckoutStep] = useState('cart')
  const [deliveryName, setDeliveryName] = useState('')
  const [deliveryPhone, setDeliveryPhone] = useState('')
  const [deliveryAddress, setDeliveryAddress] = useState('')
  const [deliveryNotes, setDeliveryNotes] = useState('')

  const savings = items.reduce((acc, item) => {
    const saved = item.oldPrice ? (item.oldPrice - item.price) * item.quantity : 0
    return acc + saved
  }, 0)

  const handleAuthSubmit = () => {
    if (!authEmail.trim() && !authPhone.trim()) return
    setIsAuthenticated(true)
    setAuthMode(null)
  }

  const authLabel = authMode === 'signup' ? 'Sign Up' : 'Login'
  const authButtonLabel = authMode === 'signup' ? 'Create account' : 'Login'

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeCart}
        className="cart-backdrop"
      />

      {/* Sidebar */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 220 }}
        className="cart-sidebar"
      >
        {/* Header */}
        <div className="cart-header">
          <div className="cart-header-left">
            <div className="cart-header-icon">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="cart-title">Your Basket</h2>
              <p className="cart-count">{items.length} item{items.length !== 1 ? 's' : ''}</p>
            </div>
          </div>
          <button className="cart-close" onClick={closeCart}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="cart-items">
          {items.length > 0 ? (
            items.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img">
                  <img src={item.img || item.image} alt={item.name} />
                  <span className="cart-item-emoji">{item.emoji || '🛒'}</span>
                </div>
                <div className="cart-item-info">
                  <span className="cart-item-cat">{item.category}</span>
                  <h4 className="cart-item-name">{item.name}</h4>
                  <p className="cart-item-unit">{item.unit}</p>
                  <div className="cart-item-bottom">
                    <div className="qty-ctrl">
                      <button onClick={() => updateQuantity(item.id, -1)}>
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="cart-item-price">₹{item.price * item.quantity}</span>
                  </div>
                </div>
                <button className="cart-remove" onClick={() => removeFromCart(item.id)}>
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          ) : (
            <div className="cart-empty">
              <div className="empty-icon">🛒</div>
              <h3>Your basket is empty</h3>
              <p>Add some products and come back!</p>
              <button className="btn btn-orange" onClick={closeCart}>
                Continue Shopping
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="cart-footer">
            {savings > 0 && (
              <div className="savings-row">
                <Tag className="w-4 h-4" />
                <span>You save ₹{savings} on this order!</span>
              </div>
            )}
            <div className="subtotal-row">
              <span>Subtotal</span>
              <span className="subtotal-amt">₹{total}</span>
            </div>
            <p className="delivery-note">
              🚚 Free delivery on orders above ₹500 (within 3 km)
            </p>
            {checkoutStep === 'review' ? (
              <div className="checkout-review">
                <h3>Review Your Order</h3>
                <p>Confirm your delivery details before placing the order.</p>
                <input
                  type="text"
                  placeholder="Recipient name"
                  value={deliveryName}
                  onChange={e => setDeliveryName(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="Contact number"
                  value={deliveryPhone}
                  onChange={e => setDeliveryPhone(e.target.value)}
                />
                <textarea
                  rows={3}
                  placeholder="Delivery address"
                  value={deliveryAddress}
                  onChange={e => setDeliveryAddress(e.target.value)}
                />
                <textarea
                  rows={2}
                  placeholder="Delivery note (optional)"
                  value={deliveryNotes}
                  onChange={e => setDeliveryNotes(e.target.value)}
                />
                <div className="checkout-actions">
                  <button className="btn btn-white" onClick={() => setCheckoutStep('cart')}>
                    Back to Cart
                  </button>
                  <button
                    className="btn btn-green"
                    disabled={!deliveryName.trim() || !deliveryPhone.trim() || !deliveryAddress.trim()}
                    onClick={() => setCheckoutStep('confirmation')}
                  >
                    Confirm Order
                  </button>
                </div>
              </div>
            ) : checkoutStep === 'confirmation' ? (
              <div className="order-confirmation">
                <h3>Order Confirmed!</h3>
                <p>Your order has been registered. We will follow up via WhatsApp shortly.</p>
                <div className="order-summary">
                  <p><strong>Name:</strong> {deliveryName}</p>
                  <p><strong>Contact:</strong> {deliveryPhone}</p>
                  <p><strong>Delivery Address:</strong> {deliveryAddress}</p>
                  {deliveryNotes && <p><strong>Note:</strong> {deliveryNotes}</p>}
                  <p><strong>Order total:</strong> ₹{total}</p>
                </div>
                <button
                  className="btn btn-green checkout-btn"
                  onClick={() => {
                    if (clearCart) clearCart()
                    closeCart()
                  }}
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                {!isAuthenticated && (
                  <div className="auth-panel">
                    <p>Please login or sign up before placing your order.</p>
                    <div className="auth-button-row">
                      <button className="btn btn-white" onClick={() => setAuthMode('login')}>
                        Login
                      </button>
                      <button className="btn btn-orange" onClick={() => setAuthMode('signup')}>
                        Sign Up
                      </button>
                    </div>
                  </div>
                )}
                {authMode && (
                  <div className="auth-form">
                    <div className="auth-form-header">
                      <h3>{authLabel}</h3>
                      <button className="auth-form-close" onClick={() => setAuthMode(null)}>
                        Cancel
                      </button>
                    </div>
                    <p>Enter your email or mobile number to continue.</p>
                    <input
                      type="email"
                      placeholder="Email address"
                      value={authEmail}
                      onChange={e => setAuthEmail(e.target.value)}
                    />
                    <input
                      type="tel"
                      placeholder="Mobile number"
                      value={authPhone}
                      onChange={e => setAuthPhone(e.target.value)}
                    />
                    <div className="auth-form-actions">
                      <button className="btn btn-green" onClick={handleAuthSubmit}>
                        {authButtonLabel}
                      </button>
                    </div>
                  </div>
                )}
                <button
                  className="btn btn-green checkout-btn"
                  disabled={!isAuthenticated}
                  onClick={() => {
                    if (!isAuthenticated) {
                      setAuthMode('login')
                      return
                    }
                    window.open(
                      `https://wa.me/919949760927?text=Hi! I'd like to order:%0A${items.map(i => `• ${i.name} x${i.quantity} = ₹${i.price * i.quantity}`).join('%0A')}%0A%0ATotal: ₹${total}`,
                      '_blank'
                    )
                  }}
                >
                  <span>Order via WhatsApp</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  className="btn btn-orange checkout-btn"
                  style={{ marginTop: '0.65rem' }}
                  disabled={!isAuthenticated}
                  onClick={() => {
                    if (!isAuthenticated) {
                      setAuthMode('login')
                      return
                    }
                    setCheckoutStep('review')
                  }}
                >
                  Proceed to Checkout
                </button>
                {!isAuthenticated && (
                  <p className="auth-note">
                    Need an account? Login or sign up to complete your order.
                  </p>
                )}
              </>
            )}
          </div>
        )}
      </motion.div>

      <style jsx>{`
        .cart-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(28, 25, 23, 0.55);
          backdrop-filter: blur(4px);
          z-index: 200;
        }
        .cart-sidebar {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          max-width: 420px;
          height: 100dvh;
          background: white;
          z-index: 201;
          display: flex;
          flex-direction: column;
          box-shadow: -12px 0 40px rgba(0,0,0,0.12);
        }

        /* Header */
        .cart-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          border-bottom: 2px solid var(--saffron-pale);
          background: var(--saffron-pale);
        }
        .cart-header-left { display: flex; align-items: center; gap: 0.85rem; }
        .cart-header-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: var(--saffron);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cart-title { font-size: 1.1rem; font-weight: 800; color: var(--text-dark); line-height: 1; }
        .cart-count { font-size: 0.78rem; color: var(--text-muted); margin-top: 2px; }
        .cart-close {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: white;
          border: 1.5px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: var(--transition);
        }
        .cart-close:hover { background: var(--saffron); color: white; border-color: var(--saffron); transform: rotate(90deg); }

        /* Items */
        .cart-items {
          flex: 1;
          overflow-y: auto;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .cart-items::-webkit-scrollbar { width: 5px; }
        .cart-items::-webkit-scrollbar-thumb { background: var(--saffron-light); border-radius: 4px; }

        .cart-item {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          background: var(--off-white);
          border-radius: var(--radius-lg);
          border: 1.5px solid var(--border-light);
          position: relative;
          transition: var(--transition);
        }
        .cart-item:hover { border-color: var(--saffron-light); background: var(--saffron-pale); }
        .cart-item-img {
          width: 72px;
          height: 72px;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
          background: white;
        }
        .cart-item-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .cart-item-emoji {
          position: absolute;
          bottom: 2px;
          right: 2px;
          font-size: 0.85rem;
          background: white;
          border-radius: 50%;
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cart-item-info { flex: 1; min-width: 0; }
        .cart-item-cat { font-size: 0.65rem; font-weight: 700; text-transform: uppercase; color: var(--saffron); letter-spacing: 0.06em; }
        .cart-item-name { font-size: 0.9rem; font-weight: 700; color: var(--text-dark); margin: 0.15rem 0; line-height: 1.3; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .cart-item-unit { font-size: 0.72rem; color: var(--text-muted); margin-bottom: 0.5rem; }
        .cart-item-bottom { display: flex; align-items: center; justify-content: space-between; }
        .qty-ctrl {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: white;
          border: 1.5px solid var(--border);
          border-radius: 9999px;
          padding: 0.2rem 0.5rem;
        }
        .qty-ctrl button {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--saffron);
          background: var(--saffron-pale);
          transition: var(--transition);
        }
        .qty-ctrl button:hover { background: var(--saffron); color: white; }
        .qty-ctrl span { font-size: 0.9rem; font-weight: 700; min-width: 20px; text-align: center; color: var(--text-dark); }
        .cart-item-price { font-size: 1rem; font-weight: 800; color: var(--green-dark); }
        .cart-remove {
          position: absolute;
          top: 0.65rem;
          right: 0.65rem;
          color: var(--text-muted);
          opacity: 0.5;
          transition: var(--transition);
          padding: 0.25rem;
        }
        .cart-remove:hover { color: #EF4444; opacity: 1; }

        /* Empty */
        .cart-empty {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 1rem;
          padding: 3rem 2rem;
        }
        .empty-icon { font-size: 4rem; }
        .cart-empty h3 { font-size: 1.1rem; font-weight: 700; color: var(--text-dark); }
        .cart-empty p { font-size: 0.875rem; color: var(--text-muted); }

        /* Footer */
        .cart-footer {
          border-top: 2px solid var(--border-light);
          padding: 1.25rem 1.5rem;
          background: white;
        }
        .savings-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: #F0FDF4;
          border: 1px solid #BBF7D0;
          border-radius: 9999px;
          padding: 0.4rem 0.85rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--green-dark);
          margin-bottom: 1rem;
        }
        .savings-row svg { color: var(--green); }
        .subtotal-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 0.5rem;
        }
        .subtotal-amt { font-size: 1.5rem; font-weight: 800; color: var(--saffron-dark); }
        .delivery-note {
          font-size: 0.78rem;
          color: var(--green-dark);
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .checkout-btn { width: 100%; justify-content: center; border-radius: var(--radius-md); }
        .checkout-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        .checkout-review,
        .order-confirmation {
          margin: 1rem 0 0;
          padding: 1rem;
          border-radius: 18px;
          background: #fafafa;
          border: 1px solid var(--border);
        }
        .checkout-review h3,
        .order-confirmation h3 {
          margin: 0 0 0.5rem;
          font-size: 1rem;
          font-weight: 800;
          color: var(--text-dark);
        }
        .checkout-review p,
        .order-confirmation p {
          margin: 0 0 1rem;
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .checkout-review input,
        .checkout-review textarea {
          width: 100%;
          border-radius: 14px;
          border: 1px solid var(--border);
          padding: 0.9rem 1rem;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
          color: var(--text-dark);
        }
        .checkout-review textarea {
          resize: vertical;
        }
        .checkout-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .checkout-actions button {
          flex: 1;
        }
        .order-summary {
          border-top: 1px solid var(--border);
          padding-top: 1rem;
          display: grid;
          gap: 0.55rem;
          font-size: 0.95rem;
          color: var(--text-dark);
        }
        .order-summary p { margin: 0; }
        .auth-panel {
          margin: 1rem 0 0;
          padding: 1rem;
          border-radius: 18px;
          background: #f5f7f5;
          border: 1px dashed rgba(56, 161, 105, 0.45);
        }
        .auth-panel p { margin: 0 0 0.85rem; color: var(--text-dark); font-weight: 600; }
        .auth-button-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.75rem;
        }
        .auth-form {
          margin: 1rem 0 0;
          padding: 1rem;
          border-radius: 18px;
          background: #ffffff;
          border: 1px solid var(--border);
        }
        .auth-form-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }
        .auth-form h3 { margin: 0; font-size: 1rem; font-weight: 800; }
        .auth-form-close {
          border: none;
          background: transparent;
          color: var(--text-muted);
          font-size: 0.95rem;
          cursor: pointer;
        }
        .auth-form p { margin: 0 0 0.9rem; color: var(--text-muted); }
        .auth-form input {
          width: 100%;
          height: 44px;
          border-radius: 14px;
          border: 1px solid var(--border);
          padding: 0 0.95rem;
          margin-top: 0.75rem;
          color: var(--text-dark);
          font-size: 0.95rem;
        }
        .auth-form-actions {
          margin-top: 1rem;
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .auth-note {
          margin-top: 1rem;
          font-size: 0.9rem;
          color: var(--text-muted);
        }
      `}</style>
    </>
  )
}

export default CartSidebar
