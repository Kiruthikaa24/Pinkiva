import React from 'react';
import '../assets/styles/ProductPage.css';

const moisturizerProducts = [
  {
    name: 'Hydrating Moisturizer',
    price: '499',
    image: 'https://undry.in/wp-content/uploads/2023/04/1c.jpg'
  },
  {
    name: 'Oil-Free Moisturizer',
    price: '399',
    image: 'https://cdn.fcglcdn.com/brainbees/images/products/583x720/11330868a.webp'
  },
  {
    name: 'Night Cream',
    price: '599',
    image: 'https://www.lotusherbals.com/cdn/shop/products/Lotus-herbals-vedika-feb-222865_1024x.jpg?v=1688801889'
  }
];

function Moisturizer() {
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
      <h2>Moisturizers</h2>
      <div className="product-grid">
        {moisturizerProducts.map((product, idx) => (
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

export default Moisturizer;
