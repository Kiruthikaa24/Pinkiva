import React, { useState, useEffect } from 'react';
import '../assets/styles/Makeup.css';

const trendyProducts = [
  { id: 1, name: 'Glitter Palette', price: '699', image: 'https://kingdomoflashes.com/cdn/shop/products/Delighful-Surprise-Pressed-Glitter-Eyeshadow-Palette-MAIN-1.jpg?v=1694686655' },
  { id: 2, name: 'Blue Heaven Bridal Makeup Kit', price: '349', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRbXoEqGR23ad11--zUHSgzzhnqNG31IXhRiqR4XzUzVuwMbrH-XOzJBArerBqDSK9FvTWKlgTlzoSRHduqVvbu42PD4CDsvipkvfgyEPqCxes2uf8_Z7lyCw' }
];

function Trendy() {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage when component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleIncrement = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0) // remove if quantity becomes 0
    );
  };

  const getQuantity = (id) => {
    const item = cart.find(p => p.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="product-page">
      <h2>Trendy</h2>
      <div className="product-grid">
        {trendyProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h5>{product.name}</h5>
            <p>₹{product.price}</p>

            {getQuantity(product.id) === 0 ? (
              <button 
                className="btn btn-sm btn-outline-danger"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            ) : (
              <div className="quantity-controls">
                <button className="btn btn-sm btn-outline-secondary" onClick={() => handleDecrement(product.id)}>-</button>
                <span className="mx-2">{getQuantity(product.id)}</span>
                <button className="btn btn-sm btn-outline-secondary" onClick={() => handleIncrement(product.id)}>+</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trendy;

  