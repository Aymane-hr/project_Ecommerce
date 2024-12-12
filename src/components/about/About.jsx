import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header text-center">
        <h1 className="display-4 text-primary">About Us</h1>
        <p className="lead text-muted">
          Discover who we are and what makes us your trusted online store.
        </p>
      </div>
      <div className="about-content container">
        <div className="row">
          <div className="col-md-6 about-text">
            <h3>Our Story</h3>
            <p>
              At E-Shop, we aim to revolutionize your shopping experience. 
              We curate a collection of top-tier products at affordable prices. 
              Our commitment is to bring value and convenience to our customers.
            </p>
          </div>
          <div className="col-md-6 about-text">
            <h3>Our Values</h3>
            <ul>
              <li>Customer-first approach</li>
              <li>High-quality products</li>
              <li>Affordable prices</li>
              <li>Fast and reliable shipping</li>
            </ul>
          </div>
        </div>
        <div className="about-footer text-center">
          <p className="footer-text">
            Thank you for choosing us as your go-to online store. We are committed to making your shopping experience seamless and enjoyable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
