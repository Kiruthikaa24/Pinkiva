import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/ProductPage.css';


const mencategories = [
  {
    name: 'Beard Oil',
    image: 'https://m.media-amazon.com/images/I/61VMp0ksi8L._AC_UF1000,1000_QL80_.jpg',
    price: '₹149'
  },
  {
    name: 'Moisturizer',
    image: 'https://m.media-amazon.com/images/I/51L2JRZvxxL._AC_UF1000,1000_QL80_.jpg',
    price: '₹249'
  },
  {
    name: 'Face Wash',
    image: 'https://products.drbatras.com/cdn/shop/products/oil-control-face-wash-for-men-women-310043_600x.jpg?v=1701180809',
    price: '₹449'
  }
];

const Men = () => {
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
      <h2>Men</h2>
      <div className="product-grid">
        {mencategories.map((product, idx) => (
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
};

export default Men;

