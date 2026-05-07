import React from 'react'
import ProductList from '../components/ProductList'

const ProductsPage = ({ products, addToCart, searchQuery }) => {
  return (
    <div className="page products-page">
      <section className="section-pad products-page-hero">
        <div className="container">
          <div className="section-header center">
            <span className="section-label">🛍️ Products</span>
            <h2 className="section-title">
              Browse all <span>store products</span>
            </h2>
            <p className="section-subtitle">
              Find groceries, stationery, household essentials and more on a dedicated product page.
            </p>
          </div>
        </div>
      </section>

      <ProductList products={products} addToCart={addToCart} searchQuery={searchQuery} />
    </div>
  )
}

export default ProductsPage
