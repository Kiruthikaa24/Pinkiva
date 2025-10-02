import React, { useState } from 'react';
import '../assets/styles/Makeup.css';

const lipProducts = [
  { id: 1, name: 'Lipstick', price: 299, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2TCV9g0cC9WTPr0ZmSDyPuCegyWqHf5gRg&s' },
  { id: 2, name: 'Lip Balm', price: 149, image: 'https://plumgoodness.com/cdn/shop/products/CandyMeltsVeganLipBalm_BerryFeast_01.jpg?v=1630923446&width=1214'},
  { id: 3, name: 'Lip Gloss', price: 199, image: 'https://swissbeauty.in/cdn/shop/files/SB-306_03_1400x.jpg?v=1743403527' }
];

function LipProducts() {
  const [quantities, setQuantities] = useState(lipProducts.map(() => 0));

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

      // Reset quantity after adding
      const index = lipProducts.findIndex(p => p.id === product.id);
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
      <h2>Lip Products</h2>
      <div className="product-grid">
        {lipProducts.map((product, idx) => (
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

export default LipProducts;
