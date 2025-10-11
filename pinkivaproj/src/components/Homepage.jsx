import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/App.css';

import video from '../assets/images/video.mp4';
import makeup from '../assets/images/makeup.png';
import skincare from '../assets/images/skincare.png';
import haircare from '../assets/images/haircare.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Homepage() {
  const navigate = useNavigate(); 
  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
        <a href="https://www.nykaa.com/installApp" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
        <i className="fa fa-mobile"></i> Get App
        </a> |
      <a href="https://www.nykaa.com/installApp" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
      <i className="fa fa-map-marker-alt"></i> Store & Events
          </a> |
          <a href="https://www.nykaa.com/giftcard/list" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
          <i className="fa fa-gift"></i> Gift Card
          </a> |
          <a href="https://www.nykaa.com/help-center?dl_type=help_center" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
          <i className="fa fa-question-circle"></i> Help
          </a>
        </div>
      </div>

      {/* Header Nav */}
      <div className="bg-light py-2 px-3 border-bottom">
        <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap">
          <div className="d-flex gap-4 align-items-center fw-bold">
            <div className="pinkiva-logo">Pinkiva</div>
            <div>Categories</div>
            <div>Brands</div>
            <div>Luxe</div>
            <div>Pinkiva Fashion</div>
            <div>Beauty Advice</div>
          </div>

          <div className="d-flex align-items-center gap-2 flex-wrap">
         
          <form className="d-flex" role="search" onSubmit={(e) => { e.preventDefault(); navigate('/feedback'); }}>
      <button type="submit" className="btn btn-outline-danger">
       Feedback
      </button>
</form>
            <Link to="/cart" className="btn btn-outline-dark btn-sm">🛒 Cart</Link>
<Link to="/login" className="btn btn-outline-danger ms-2">Sign Up/Login</Link>

          </div>
        </div>
      </div>

      {/* Nav Menu */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-top">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        {[
          { name: 'Makeup', path: '/makeup' },
          { name: 'Skin', path: '/skin' },
          { name: 'Appliances', path: '/appliances' },
          { name: 'Bath & Body', path: '/bathbody' },
          { name: 'Natural', path: '/natural' },
          { name: 'Mom & Baby', path: '/mombaby' },
          { name: 'Health & Wellness', path: '/healthwellness' },
          { name: 'Men', path: '/men' },
          { name: 'Fragrance', path: '/fragrance' },
          { name: 'Bags & Accessories', path: '/bagsaccessories' },
          { name: 'Offers', path: '/offers' }
        ].map((item, idx) => (
          <li className="nav-item" key={idx}>
            <Link className="nav-link" to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
</nav>


      {/* Hero Banner with Background Video */}
      <div className="hero-banner position-relative overflow-hidden" style={{ height: '100vh' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
          style={{ zIndex: 0 }}
        >
          <source
      src="https://cdn.pixabay.com/video/2025/04/06/270065_tiny.mp4"
      type="video/mp4"
    />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }}
        ></div>

        {/* Foreground Text */}
        <div className="container text-center text-white d-flex flex-column justify-content-center align-items-center h-100 position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-5 fw-bold">Mega Beauty Sale</h1>
          <p className="lead">Up to 50% off on your favorite brands</p>
          <Link to="/offers" className="buy-now-button btn btn-pink btn-lg mt-3">Shop Now</Link>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Shop by Category</h2>
        <div className="row g-4">
          {/* Makeup  */}
          <div className="col-md-4">
            <Link to="/makeup" className="text-decoration-none"> {/* Link to Makeup.jsx */}
              <div className="card category-card h-100 text-center shadow-sm">
                <img src={makeup} className="card-img-top" alt="Makeup" />
                <div className="card-body">
                  <h5 className="card-title">Makeup</h5>
                  <p className="card-text">Explore our collection of lipsticks, foundations, and more.</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Skincare */}
          <div className="col-md-4">
            <Link to="/skin" className="text-decoration-none"> {/* Link to SkinPage.jsx */}
              <div className="card category-card h-100 text-center shadow-sm">
                <img src={skincare} className="card-img-top" alt="Skincare" />
                <div className="card-body">
                  <h5 className="card-title">Skincare</h5>
                  <p className="card-text">Find the perfect cleanser, moisturizer, and serum for your skin type.</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Haircare */}
          <div className="col-md-4">
            <Link to="/natural" className="text-decoration-none"> {/* Link to SkinPage.jsx */}
              <div className="card category-card h-100 text-center shadow-sm">
                <img src={haircare} className="card-img-top" alt="Natural" />
                <div className="card-body">
                  <h5 className="card-title">Natural</h5>
                  <p className="card-text">Top shampoos, conditioners, and treatments naturally.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>


      {/* Offer  */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Top Offers</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="offer-box p-4 shadow-sm">
                <h5>Flat 30% Off on Nykaa Cosmetics</h5>
                <p>Use code: GLAM30</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="offer-box p-4 shadow-sm">
                <h5>Buy 2 Get 1 Free on Skincare</h5>
                <p>Valid till Sunday</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">

  {/* Top */}
  <div className="footer-top">
    <div>
      <p>📩 Get special discount on your inbox</p>
      <input type="email" placeholder="Your Email" />
      <button>SEND</button>
    </div>
    

    <div>
  <p>📱 EXPERIENCE THE PINKIVA MOBILE APP</p>
  
  <a href="https://www.nykaa.com/installApp" target="_blank" rel="noopener noreferrer">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
      alt="Google Play"
      style={{ width: '150px', marginRight: '10px' }}
    />
  </a>

  <a href="https://www.nykaa.com/installApp" target="_blank" rel="noopener noreferrer">
    <img
      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
      alt="App Store"
      style={{ width: '150px' }}
    />
  </a>
</div>



    <div>
      <p>📞 FOR ANY HELP, CALL US AT</p>
      <p>1800-267-4444</p>
    </div>
  </div>

  {/* Footer Links */}
  <div className="footer-mid">
    <div>
      <h3>PINKIVA</h3>
      <p>Who are we?</p>
      <p>Careers</p>
    </div>
    <div>
      <h3>Help</h3>
      <p>Contact Us</p>
      <p>FAQs</p>
      <p>Nearby Store</p>
      <p>Cancellation & Returns</p>
      <p>Shipping & Delivery</p>
    </div>
    <div>
      <h3>Inspire Me</h3>
      <p>Beauty Book</p>
      <p>Pinkiva Network</p>
      <p>Buying Guides</p>
    </div>
    <div>
      <h3>Quick Links</h3>
      <p>Offer Zone</p>
      <p>Pinkiva Women</p>
      <p>Pinkiva Fashion</p>
      <p>Site Map</p>
    </div>
    <div>
      <h3>Top Categories</h3>
      <p>Makeup</p>
      <p>Skin</p>
      <p>Hair</p>
      <p>Bath & Body</p>
      <p>Natural</p>
      <p>Mom & Baby</p>
      <p>Health & Wellness</p>
      <p>Men</p>
      <p>Fragrance</p>
      <p>Bags & Accessories</p>
      <p>Offers</p>
    </div>
  </div>

  {/* Bottom Info  */}
  <div className="footer-info">
    <div>
      <p>🚚 FREE SHIPPING<br />On Orders Above ₹299</p>
    </div>
    <div>
      <p>🔄 EASY RETURNS<br />15-Day Return Policy</p>
    </div>
    <div>
      <p>✅ 100% AUTHENTIC<br />Products Sourced Directly</p>
    </div>
    <div>
      <p>🛍 1900+ BRANDS<br />1.2 Lakh+ Products</p>
    </div>
    <div>
      <p>❤️ Follow us on:</p>
      <span>📸</span>
      <span>📘</span>
      <span>▶️</span>
      <span>🐦</span>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="footer-bottom">
    <a href="#">Terms & Conditions</a> |
    <a href="#">Shipping Policy</a> |
    <a href="#">Cancellation Policy</a> |
    <a href="#">Privacy Policy</a>
    <p>© 2025 PINKIVA E-RETAIL LIMITED All Rights Reserved.</p>
  </div>
</footer>
</div>

  );
}

export default Homepage;



  
