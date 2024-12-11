import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-4">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              Welcome to E-Shop, your one-stop destination for exclusive and high-quality products. Shop with confidence and discover the best deals.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-dark text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-dark text-decoration-none">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-dark text-decoration-none">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-dark text-decoration-none">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4">
            <h5>Contact</h5>
            <p>
              <i className="bi bi-geo-alt-fill"></i> 7 Street, Hay Riad, Fez
            </p>
            <p>
              <i className="bi bi-telephone-fill"></i> +1 (234) 567-890
            </p>
            <p>
              <i className="bi bi-envelope-fill"></i> support@eshop.com
            </p>
            <div>
              <a href="https://facebook.com" className="text-dark me-3" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" className="text-dark me-3" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-dark" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} E-Shop. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
