import React, { useState } from 'react';
import '../assets/styles/ProductPage.css';

const naturalcategories = [
  {
    id: 1,
    name: 'Tea tree oil',
    price: '₹299',
    image: 'https://m.media-amazon.com/images/I/61m+XNerT9L.jpg',
    link: '/natural/skincare'
  },
  {
    id: 2,
    name: 'Lotus Herbal Moisturizer',
    price: '₹399',
    image: 'https://images-static.nykaa.com/media/catalog/product/4/8/481c12eNYLOTUS000021_1.jpg',
    link: '/natural/haircare'
  },
  {
    id: 3,
    name: 'Lotus Herbal Face Serum',
    price: '₹499',
    image: 'https://m.media-amazon.com/images/I/71PTc4kFHnL.jpg',
    link: '/natural/wellness'
  }
];

const Natural = () => {
  // Track quantity for each product
  const [quantities, setQuantities] = useState(naturalcategories.map(() => 1));

  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const handleDecrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  const handleAddToCart = (product, qty) => {
    const storedCart = localStorage.getItem('cartItems');
    const cart = storedCart ? JSON.parse(storedCart) : [];

    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += qty;
    } else {
      cart.push({ ...product, quantity: qty });
    }

    localStorage.setItem('cartItems', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-page">
      <h2>Natural Products</h2>
      <div className="product-grid">
        {naturalcategories.map((product, idx) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h5>{product.name}</h5>
            <p>{product.price}</p>

            {/* Increment / Decrement Controls */}
            <div className="quantity-controls">
              <button onClick={() => handleDecrement(idx)}>-</button>
              <span>{quantities[idx]}</span>
              <button onClick={() => handleIncrement(idx)}>+</button>
            </div>

            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => handleAddToCart(product, quantities[idx])}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Natural;
