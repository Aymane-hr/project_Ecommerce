import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Adjust the number of products per page

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  // Calculate the range of products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Pagination handler
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="shop-container">
      <div className="container my-4">
        <h1 className="shop-title">Explore Our Collection</h1>
        <p className="shop-subtitle">
          Discover unique products tailored for you. Shop your favorites now!
        </p>

        {/* Products Grid */}
        <div className="row">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`pagination-btn ${currentPage === i + 1 ? "active" : ""}`}
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
