
import React, { useState, useEffect } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [stage, setStage] = useState('cart'); // stages: cart, address, payment
  const [address, setAddress] = useState({
    name: '',
    street: '',
    city: '',
    pincode: '',
  });

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
      const price =
        typeof item.price === 'string'
          ? parseFloat(item.price.replace('₹', '').replace(',', ''))
          : item.price;
      return sum + price * item.quantity;
    }, 0);
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    if (!address.name || !address.street || !address.city || !address.pincode) {
      alert('Please fill all address fields!');
      return;
    }
    setStage('payment');
  };

  // 🏦 Official bank websites
  const bankLinks = [
    { name: 'State Bank of India (SBI)', url: 'https://www.onlinesbi.sbi/' },
    { name: 'HDFC Bank', url: 'https://www.hdfcbank.com/' },
    { name: 'ICICI Bank', url: 'https://www.icicibank.com/' },
  ];

  return (
    <div className="container py-5">
      {stage === 'cart' && (
        <>
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
                    style={{
                      width: '120px',
                      height: 'auto',
                      marginRight: '20px',
                      borderRadius: '8px',
                    }}
                  />
                  <div className="flex-grow-1">
                    <h5>{item.name}</h5>
                    <p>Price: ₹{item.price}</p>
                    <div className="d-flex align-items-center gap-3">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="btn btn-sm btn-outline-dark"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="btn btn-sm btn-outline-dark"
                      >
                        +
                      </button>
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
                <h4>Total: ₹{getTotal().toFixed(2)}</h4>
                <button
                  className="btn btn-success mt-2"
                  onClick={() => setStage('address')}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {stage === 'address' && (
        <div className="address-form">
          <h3 className="text-center mb-4">📍 Enter Your Shipping Address</h3>
          <form
            onSubmit={handleAddressSubmit}
            className="shadow p-4 rounded"
            style={{ maxWidth: '500px', margin: '0 auto' }}
          >
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                value={address.name}
                onChange={(e) => setAddress({ ...address, name: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Street Address</label>
              <input
                type="text"
                className="form-control"
                value={address.street}
                onChange={(e) => setAddress({ ...address, street: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Pincode</label>
              <input
                type="text"
                className="form-control"
                value={address.pincode}
                onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                required
              />
            </div>
            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-secondary" onClick={() => setStage('cart')}>
                Back to Cart
              </button>
              <button type="submit" className="btn btn-success">
                Continue to Payment
              </button>
            </div>
          </form>
        </div>
      )}

      {stage === 'payment' && (
        <div className="payment-page text-center">
          <h3 className="mb-4">💳 Choose Your Bank for Payment</h3>
          <ul className="list-group" style={{ maxWidth: '400px', margin: '0 auto' }}>
            {bankLinks.map((bank) => (
              <li
                key={bank.name}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {bank.name}
                <a
                  href={bank.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-sm"
                >
                  Go to Bank
                </a>
              </li>
            ))}
          </ul>
          <button className="btn btn-secondary mt-4" onClick={() => setStage('address')}>
            Back to Address
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;


