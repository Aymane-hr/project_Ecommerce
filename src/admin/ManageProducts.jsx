import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import "./ManageProducts.css";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ title: "", price: "", description: "" });

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  const addProduct = () => {
    axios
      .post("https://fakestoreapi.com/products", newProduct)
      .then((response) => setProducts([...products, response.data]))
      .catch((error) => console.error(error));
  };

  const deleteProduct = (id) => {
    axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => setProducts(products.filter((product) => product.id !== id)))
      .catch((error) => console.error(error));
  };

  return (
    <div className="manage-products">
      <Sidebar />
      <div className="admin-content">
        <h1>Manage Products</h1>
        <div className="add-product">
          <h3>Add Product</h3>
          <input
            type="text"
            placeholder="Title"
            value={newProduct.title}
            onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <textarea
            placeholder="Description"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          ></textarea>
          <button onClick={addProduct}>Add Product</button>
        </div>

        <div className="product-list">
          <h3>Product List</h3>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.title} - ${product.price}
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
