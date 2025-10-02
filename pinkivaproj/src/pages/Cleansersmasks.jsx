import React, { useState } from 'react';
import '../assets/styles/Makeup.css';

const cleansersmasks = [
  {
    id: 'foaming-cleanser-123', // Added unique ID
    name: 'Foaming Face Cleanser',
    price: '₹299',
    image: 'https://aqualogica.in/cdn/shop/files/Shoot.jpg?v=1702972128'
  },
  {
    id: 'charcoal-mask-456',  // Added unique ID
    name: 'Charcoal Face Mask',
    price: '₹349',
    image: 'https://www.themancompany.com/cdn/shop/files/2_5ee5b629-e361-4d06-88a4-b95b4a7cb7c4_1024x1024.jpg?v=1696943016'
  },
  {
    id: 'clay-cleanser-789',  // Added unique ID
    name: 'Clay Pore Cleanser',
    price: '₹399',
    image: 'https://d1iuscsovtvj4y.cloudfront.net/products/CANADIAN_CLAY_PORE_CLEANSER_-120gm_1.jpg'
  }
];

function Cleansersmasks() {
  const [quantities, setQuantities] = useState(
    cleansersmasks.map(() => 0)
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

      const index = cleansersmasks.findIndex(p => p.id === product.id);
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
      <h2>Cleansers & Masks</h2>
      <div className="product-grid">
        {cleansersmasks.map((product, idx) => (
          <div className="product-card" key={idx}>
            <img src={product.image} alt={product.name} />
            <h5>{product.name}</h5>
            <p>{product.price}</p>
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

export default Cleansersmasks;
