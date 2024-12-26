import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ClientDetails.css";

const ClientDetails = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/orders/${orderId}`)
      .then((response) => {
        setOrder(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching order details:", error);
        setLoading(false);
      });
  }, [orderId]);

  if (loading) {
    return <p>Loading client details...</p>;
  }

  if (!order) {
    return <p>Order not found.</p>;
  }

  return (
    <div className="client-details-container">
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        Back to Dashboard
      </button>
      <h1>Client Details</h1>
      <h2>{order.clientInfo.name}</h2>
      <p>
        <strong>Phone:</strong> {order.clientInfo.phone}
      </p>
      <p>
        <strong>Address:</strong> {order.clientInfo.address}
      </p>
      <h3>Products</h3>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {order.cartItems.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>
        <strong>Total Price:</strong> ${order.totalPrice.toFixed(2)}
      </h3>
    </div>
  );
};

export default ClientDetails;
