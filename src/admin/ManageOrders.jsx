import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import "./ManageOrders.css";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/orders")
      .then((response) => setOrders(response.data))
      .catch((error) => console.error(error));
  }, []);

  const updateOrderStatus = (id, status) => {
    axios
      .put(`https://fakestoreapi.com/orders/${id}`, { status })
      .then((response) => {
        setOrders(orders.map((order) => (order.id === id ? response.data : order)));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="manage-orders">
      <Sidebar />
      <div className="admin-content">
        <h1>Manage Orders</h1>
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <p>Order ID: {order.id}</p>
              <p>Status: {order.status}</p>
              <button onClick={() => updateOrderStatus(order.id, "shipped")}>Mark as Shipped</button>
              <button onClick={() => updateOrderStatus(order.id, "delivered")}>Mark as Delivered</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageOrders;
