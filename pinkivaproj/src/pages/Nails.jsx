import React, { useEffect, useState } from 'react';
import '../assets/styles/Makeup.css';

const nailProducts = [
  { name: 'Nail Paint', price: '5 for ₹129', image: 'https://www.ogbeauty.in/cdn/shop/files/12..jpg?v=1735997067&width=535' },
  { name: 'Nail Art Kit', price: '₹399', image: 'https://m.media-amazon.com/images/I/81O3nCZE3nL._AC_UF1000,1000_QL80_.jpg' }
];

function Nails() {
  const [cart, setCart] = useState([]);

  // Load cart items from localStorage when component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart changes to localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    const existing = cart.find(item => item.name === product.name);
    if (existing) {
      setCart(cart.map(item =>
        item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleIncrement = (product) => {
    setCart(cart.map(item =>
      item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrement = (product) => {
    setCart(cart
      .map(item =>
        item.name === product.name ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0) // remove if quantity becomes 0
    );
  };

  const getQuantity = (product) => {
    const item = cart.find(i => i.name === product.name);
    return item ? item.quantity : 0;
  };

  return (
    <div className="product-page">
      <h2>Nail Products</h2>
      <div className="product-grid">
        {nailProducts.map((product, idx) => {
          const quantity = getQuantity(product);
          return (
            <div className="product-card" key={idx}>
              <img src={product.image} alt={product.name} />
              <h5>{product.name}</h5>
              <p>{product.price}</p>
              
              {quantity === 0 ? (
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              ) : (
                <div className="quantity-controls">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => handleDecrement(product)}
                  >
                    -
                  </button>
                  <span className="mx-2">{quantity}</span>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => handleIncrement(product)}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Nails;
