import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/ProductPage.css';

const bathcategories = [
  {
    id: 'body-lotion-123', // Added unique ID
    name: 'Body Lotion',
    image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-720w,f_auto,q_auto:best/newscms/2023_18/1709082/d40ee9b4-cce6-42c2-bb59-b8325232ffb0_1-628f8faf074bc8c597c716f58637668e.jpg',
    price: '₹299'
  },
  {
    id: 'bath-salts-456', // Added unique ID
    name: 'Bath salts',
    image: 'https://cdn.zeptonow.com/production/tr:w-640,ar-1021-1021,pr-true,f-auto,q-80/cms/product_variant/f9c524f6-58b3-4a11-b1ba-d7f435f9258b.jpeg',
    price: '₹399'
  },
  {
    id: 'bath-body-kit-789', // Added unique ID
    name: 'Bath & Body Kit (Pack of 2)',
    image: 'https://bryanandcandy.com/cdn/shop/products/Copyof20220306-DSC02450.jpg?v=1652164301',
    price: '₹699'
  }
];

const Bathbody = () => {
  const [quantities, setQuantities] = useState(
    bathcategories.map(() => 0)
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
      // Reset quantity after adding to cart (optional)
      const index = bathcategories.findIndex(p => p.id === product.id);
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
      <h2>Bath & Body Products</h2>
      <div className="product-grid">
        {bathcategories.map((product, idx) => (
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

export default Bathbody;