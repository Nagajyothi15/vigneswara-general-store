import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Categories from './components/Categories'
import { PRODUCTS } from './components/ProductList'
import Offers from './components/Offers'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Location from './components/Location'
import Footer from './components/Footer'
import CartSidebar from './components/CartSidebar'
import ProductsPage from './pages/ProductsPage'

const ScrollToHash = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [pathname, hash])

  return null
}

function App() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta
        return newQty > 0 ? { ...item, quantity: newQty } : item
      }
      return item
    }))
  }

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)
  const cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  const filteredProducts = PRODUCTS.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <Router>
      <div className="app">
        <Navbar 
          cartCount={cartCount} 
          openCart={() => setIsCartOpen(true)} 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <ScrollToHash />

        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <About />
                <Features />
                <Categories />
                <Offers />
                <Testimonials />
                <FAQ />
                <Location />
              </main>
            }
          />
          <Route
            path="/products"
            element={
              <main>
                <ProductsPage products={filteredProducts} addToCart={addToCart} />
              </main>
            }
          />
        </Routes>

        <Footer />

        <AnimatePresence>
          {isCartOpen && (
            <CartSidebar 
              items={cartItems} 
              total={cartTotal}
              closeCart={() => setIsCartOpen(false)} 
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
              clearCart={() => setCartItems([])}
            />
          )}
        </AnimatePresence>

        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/919949760927?text=Namaste! I have a question about your products."
          target="_blank"
          rel="noreferrer"
          className="whatsapp-float"
          title="Chat with us on WhatsApp"
        >
          <div className="wa-pulse"></div>
          <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-14.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg>
        </a>

        <style jsx>{`
          .whatsapp-float {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            background-color: #25d366;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
            z-index: 99;
            transition: var(--transition);
          }
          .whatsapp-float:hover {
            transform: translateY(-5px) scale(1.1);
            box-shadow: 0 15px 30px rgba(37, 211, 102, 0.4);
          }
          .wa-pulse {
            position: absolute;
            inset: 0;
            background: #25d366;
            border-radius: 50%;
            z-index: -1;
            animation: wa-pulse 2s infinite;
          }
          @keyframes wa-pulse {
            0% { transform: scale(1); opacity: 0.8; }
            100% { transform: scale(1.6); opacity: 0; }
          }
          @media (max-width: 768px) {
            .whatsapp-float { bottom: 20px; right: 20px; width: 50px; height: 50px; }
          }
        `}</style>
      </div>
    </Router>
  )
}

export default App
