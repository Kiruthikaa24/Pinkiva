import React, { useState } from 'react';
import '../assets/styles/Makeup.css';

const eyeProducts = [
  { id: 4, name: 'Kajal', price: 199, image: 'https://beautifulstore.in/wp-content/uploads/2024/05/413Ct7TGLFL._SX679_.jpg' },
  { id: 5, name: 'Eyeliner', price: 249, image: 'https://dazller.co.in/cdn/shop/products/FRONTIMAGEBROWN.jpg?v=1735793402' },
  { id: 6, name: 'Mascara', price: 299, image: 'https://i8.amplience.net/i/Cosnova/4202922' }
];

function EyeProducts() {
  const [quantities, setQuantities] = useState(
    eyeProducts.map(() => 0)
  );

  const handleAddToCart = (product, quantity) => {
    if (quantity > 0) {
      const storedCart = localStorage.getItem('cartItems');
      const cart = storedCart ? JSON.parse(storedCart) : [];

      const existing = cart.find(item => item.id === product.id);
      if (existing) {
        existing.quantity += quantity;
      } else {
        cart.push({ ...product, quantity: quantity });
      }

      localStorage.setItem('cartItems', JSON.stringify(cart));
      alert(`${quantity} ${product.name}(s) added to cart!`);

      const index = eyeProducts.findIndex(p => p.id === product.id);
      if (index !== -1) {
        const newQuantities = [...quantities];
        newQuantities[index] = 0;
        setQuantities(newQuantities);
      }
    } else {
      alert(`Please select a quantity for ${product.name}.`);
    }
  };

  const increment = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const decrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index] -= 1;
    }
    setQuantities(newQuantities);
  };

  return (
    <div className="product-page">
      <h2>Eye Products</h2>
      <div className="product-grid">
        {eyeProducts.map((product, idx) => (
          <div className="product-card" key={idx}>
            <img src={product.image} alt={product.name} />
            <h5>{product.name}</h5>
            <p>₹{product.price}</p>
            <div className="quantity-controls">
              <button onClick={() => decrement(idx)}>-</button>
              <span>{quantities[idx]}</span>
              <button onClick={() => increment(idx)}>+</button>
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
}

export default EyeProducts;

  