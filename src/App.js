import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Shop from './pages//shop/Shop';
import Cart from './pages/cart/Cart';
import About from './components/about/About';
import ProductDetails from './pages/productdetail/ProductDetail';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer'

import AdminDashboard from "./admin/AdminDashboard";
import ClientDetails from "./admin/ClientDetails";
import ManageProducts from "./admin/ManageProducts";
import ManageOrders from "./admin/ManageOrders";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/client-details/:orderId" element={<ClientDetails />} />
        <Route path="/admin/products" element={<ManageProducts />} />
        <Route path="/admin/orders" element={<ManageOrders />} />
        
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
