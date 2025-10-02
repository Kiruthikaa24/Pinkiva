import React, { useState } from 'react';
import '../assets/styles/ProductPage.css';

const fragrance = [
  {
    id: 'perfume-123',
    name: 'Perfumes',
    image: 'https://upsilonofficial.com/cdn/shop/products/WB-01.jpg?v=1680767571&width=1200',
    price: '₹199'
  },
  {
    id: 'body-mist-456',
    name: 'Body Mist',
    image: 'https://image.made-in-china.com/2f0j00ftCvwUjgCKop/250ml-Long-Lasting-Body-Spray-Natural-Organic-Body-Mist-Perfume-for-Women-Body-Mist-Deodorant-Tropical-Floral-Scents-Original-Splash-Body-Mist-Spray.jpg',
    price: '₹99'
  },
  {
    id: 'deodorant-789',
    name: 'Deodorants',
    image: 'https://www.frenchessence.com/cdn/shop/files/5_7d27ca34-56d6-42e3-ab8c-33e69e3b6827.jpg?v=1705746470',
    price: '₹399'
  }
];

const Fragrance = () => {
  const [quantities, setQuantities] = useState(
    fragrance.map(() => 0)
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

      const index = fragrance.findIndex(p => p.id === product.id);
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
      <h2>Fragrance</h2>
      <div className="product-grid">
        {fragrance.map((product, idx) => (
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
};

export default Fragrance;
