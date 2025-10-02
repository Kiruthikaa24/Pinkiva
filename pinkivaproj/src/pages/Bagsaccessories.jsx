import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/ProductPage.css';

const bags = [
  {
    id: 'handbags-123', // Added unique ID
    name: 'Handbags',
    image: 'https://5.imimg.com/data5/ANDROID/Default/2023/1/GC/OV/IJ/19051907/product-jpeg-500x500.jpg',
    price: '₹599'
  },
  {
    id: 'hair-accessories-456', // Added unique ID
    name: 'Hair Accessories',
    image: 'https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Womens-Hair-Accessories-Set-WHA1-1.jpg',
    price: '₹199'
  },
  {
    id: 'travel-kits-789', // Added unique ID
    name: 'Travel Kits',
    image: 'https://nestasia.in/cdn/shop/files/DSC_1963_b013fa00-6556-4b98-8b03-10a373ae01ec_550x.jpg?v=1702966466',
    price: '₹299'
  }
];

const Bags = () => {
  const [quantities, setQuantities] = useState(
    bags.map(() => 0)
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
      const index = bags.findIndex(p => p.id === product.id); // Corrected to 'bags'
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
      <h2>Bags & Accessories</h2> {/* Corrected heading */}
      <div className="product-grid">
        {bags.map((product, idx) => (
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

export default Bags; // Corrected export



