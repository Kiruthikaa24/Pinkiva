import React, { useState } from 'react';
import '../assets/styles/App.css';
import { isValidEmail } from '../utils/validation';


function ForgotPassword() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!input) {
      setError('Please enter your email.');
      return;
    }
  
    if (!isValidEmail(input)) {
      setError('Please enter a valid email address.');
      return;
    }
  
    setError('');
    alert('Reset link sent!');
  };
  

  return (
    <div className="forgot-container">
      <div className="glassy-forgot-box">
        <h1 className="auth-brand pinkiva-logo">Welcome to Pinkiva</h1>
        <h4 className="mb-4">Reset Password</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Email or Mobile"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {error && <p className="text-danger" style={{ fontSize: '0.9rem' }}>{error}</p>}
          <button type="submit" className="btn btn-pink w-100 mt-3">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;

