import React, { useState } from 'react';
import '../assets/styles/Makeup.css';

const faceProducts = [
  {
    id: 1,
    name: 'Foundation',
    price: 499,
    image: 'https://images-cdn.ubuy.co.in/645e9998a218095d950dc46a-e-l-f-flawless-finish-foundation.jpg'
  },
  {
    id: 2,
    name: 'Concealer',
    price: 299,
    image: 'https://swissbeauty.in/cdn/shop/files/1_3bff48ec-4a46-4645-a170-a6215ae23383_1400x.jpg?v=1743404463'
  },
  {
    id: 3,
    name: 'Blush',
    price: 399,
    image: 'https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000000494273773/trgySzkTkT-000000000494273773_1.png'
  }
];

function FaceProducts() {
  const [quantities, setQuantities] = useState(
    faceProducts.map(() => 0)
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

      const index = faceProducts.findIndex(p => p.id === product.id);
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
      <h2>Face Products</h2>
      <div className="product-grid">
        {faceProducts.map((product, idx) => (
          <div className="product-card" key={product.id}>
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

export default FaceProducts;
