
import React, { useState, useEffect } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('cartItems');
    const parsed = stored ? JSON.parse(stored) : [];
    setCartItems(parsed);
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleQuantityChange = (id, delta) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    );
    setCartItems(updated);
  };

  const handleRemoveItem = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
  };

  const getTotal = () => {
    return cartItems.reduce((sum, item) => {
  
      const price = typeof item.price === 'string'
        ? parseFloat(item.price.replace('₹', '').replace(',', ''))
        : item.price; 
  
      return sum + price * item.quantity;
    }, 0);
  };
  

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item d-flex mb-4 p-3 shadow-sm rounded">
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '120px', height: 'auto', marginRight: '20px', borderRadius: '8px' }}
              />
              <div className="flex-grow-1">
                <h5>{item.name}</h5>
                <p>Price: ₹{item.price}</p>
                <div className="d-flex align-items-center gap-3">
                  <button onClick={() => handleQuantityChange(item.id, -1)} className="btn btn-sm btn-outline-dark">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)} className="btn btn-sm btn-outline-dark">+</button>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="btn btn-sm btn-danger mt-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-total text-end mt-4">
            <h4>Total: ₹{getTotal().toFixed(2)}</h4> {/* Display total with 2 decimal points */}
            <button className="btn btn-success mt-2">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

