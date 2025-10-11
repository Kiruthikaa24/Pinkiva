import React from 'react';
import '../assets/styles/Makeup.css';

const sunscreenProducts = [
  {
    name: 'SPF 50 Sunscreen Lotion',
    price: '₹349',
    image: 'https://m.media-amazon.com/images/I/41v1L8K+11L.jpg'
  },
  {
    name: 'Matte Sunscreen Gel',
    price: '₹299',
    image: 'https://m.media-amazon.com/images/I/61k9wzzDoyL.jpg'
  },
  {
    name: 'Waterproof Sunscreen Spray',
    price: '₹449',
    image: 'https://www.drsheths.com/cdn/shop/files/27.jpg?v=1689311556'
  }
];

function Sunscreen() {
  const handleAddToCart = (product) => {
    const storedCart = localStorage.getItem('cartItems');
    const cart = storedCart ? JSON.parse(storedCart) : [];

    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };
  return (
    <div className="product-page">
      <h2>Sunscreens</h2>
      <div className="product-grid">
        {sunscreenProducts.map((product, idx) => (
          <div className="product-card" key={idx}>
            <img src={product.image} alt={product.name} />
            <h5>{product.name}</h5>
            <p>{product.price}</p>
            <button className="btn btn-sm btn-outline-danger" onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sunscreen;
