import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/orders")
      .then((response) => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setLoading(false);
      });
  }, []);

  const handleStatusChange = (id, newStatus) => {
    axios
      .patch(`http://localhost:5000/orders/${id}`, { status: newStatus })
      .then(() => {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === id ? { ...order, status: newStatus } : order
          )
        );
      })
      .catch((error) => console.error("Error updating status:", error));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      axios
        .delete(`http://localhost:5000/orders/${id}`)
        .then(() => {
          alert("Order deleted successfully!");
          setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
        })
        .catch((error) => console.error("Error deleting order:", error));
    }
  };

  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-dashboard">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        {loading ? (
          <p>Loading orders...</p>
        ) : orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Order ID</th>
                <th>Client Name</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Total Price</th>
                <th>Order Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order.id}>
                  <td>{index + 1}</td>
                  <td>{order.id}</td>
                  <td>{order.clientInfo?.name || "N/A"}</td>
                  <td>{order.clientInfo?.phone || "N/A"}</td>
                  <td>{order.clientInfo?.address || "N/A"}</td>
                  <td>${order.totalPrice?.toFixed(2) || "0.00"}</td>
                  <td>{new Date(order.orderDate).toLocaleString()}</td>
                  <td>
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      className={`form-select form-select-sm ${order.status === "Pending"
                          ? "status-pending"
                          : order.status === "In Progress"
                            ? "status-in-progress"
                            : "status-completed"
                        }`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>

                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(order.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
