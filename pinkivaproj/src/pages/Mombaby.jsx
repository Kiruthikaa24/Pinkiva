import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/ProductPage.css';

const bathcategories = [
  {
    id: 1,
    name: 'Baby Body Wash & Soaps',
    image: 'https://shop.vermontsoap.com/wp-content/uploads/2021/11/vermont-soap-kida-baby-2.jpg',
    price: '₹199'
  },
  {
    id: 2,
    name: 'Baby makeup Kit',
    image: 'https://m.media-amazon.com/images/I/812AZ1Js35L.jpg',
    price: '₹5499'
  },
  {
    id: 3,
    name: 'Shampoo & Conditioner',
    image: 'https://m.media-amazon.com/images/I/71-XB6EIlGL.jpg',
    price: '₹499'
  }
];

const Mombaby = () => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage initially
  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleIncrement = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrement = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  return (
    <div className="product-page">
      <h2>Mom & Baby Products</h2>
      <div className="product-grid">
        {bathcategories.map((product) => {
          const cartItem = cart.find(item => item.id === product.id);

          return (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h5>{product.name}</h5>
              <p>{product.price}</p>

              {cartItem ? (
                <div className="quantity-controls">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => handleDecrement(product.id)}
                  >
                    -
                  </button>
                  <span className="quantity">{cartItem.quantity}</span>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => handleIncrement(product.id)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mombaby;
