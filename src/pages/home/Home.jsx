import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';
import './Home.css';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=4')
      .then(response => setFeaturedProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to E-Shop</h1>
          <p>Your one-stop shop for the latest and greatest products.</p>
          <a className="btn hero-btn"><Link to="/shop" className="text-dark text-decoration-none">Shop Now </Link></a>
        </div>
      </header>
      <div className="featured-section">
        <h2>Featured Products</h2>
        <p>Handpicked items just for you!</p>
        <div className="row">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
