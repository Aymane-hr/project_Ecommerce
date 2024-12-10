import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=4')
      .then(response => setFeaturedProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container my-4">
      <h1>Welcome to Our Store</h1>
      <p>Discover our exclusive collection of products.</p>
      <div className="row">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
