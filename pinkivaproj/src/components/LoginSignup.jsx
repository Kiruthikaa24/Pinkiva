import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/App.css';
import { isValidEmail } from '../utils/validation';
import successIcon from '../assets/images/success.png';

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = isLogin
        ? "https://pinkiva-backend.onrender.com/api/login"
        : "https://pinkiva-backend.onrender.com/api/signup";

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        if (isLogin) {
          alert(data.message || "Login successful");
          setIsSuccess(true);
          setTimeout(() => navigate('/homepage'), 2000);
        } else {
          alert(data.message || "Signup successful");
          setIsSuccess(true);
          setTimeout(() => navigate('/homepage'), 2000);
        }
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <h1 className="auth-brand pinkiva-logo">Welcome to Pinkiva</h1>
      </div>

      <div className="auth-right">
        <div className="glassy-box">
          {isSuccess ? (
            <div className="success-box text-center">
              <img
                src={successIcon}
                alt="Success"
                className="success-icon"
              />
              <h3>Success!</h3>
              <p>{isLogin ? 'Logged in successfully.' : 'Signed up successfully.'}</p>
              <button
                className="btn btn-pink mt-3"
                onClick={() => navigate('/homepage')}
              >
                Go to Homepage
              </button>
            </div>
          ) : (
            <>
              <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
              <form onSubmit={handleSubmit}>
                {!isLogin && (
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                )}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                {isLogin && (
                  <div className="forgot-link">
                    <Link to="/forgot-password">Forgot Password?</Link>
                  </div>
                )}

                <button type="submit">
                  {isLogin ? 'Login' : 'Sign Up'}
                </button>
              </form>

              <p className="toggle-auth" onClick={() => setIsLogin(!isLogin)}>
                {isLogin
                  ? "Don't have an account? Sign Up"
                  : 'Already have an account? Login'}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;


