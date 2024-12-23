import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ShopContext } from "../../context/ShopContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(ShopContext);
  const [showForm, setShowForm] = useState(false);
  const [clientInfo, setClientInfo] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const navigate = useNavigate(); 

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      clientInfo,
      cartItems,
      totalPrice,
      orderDate: new Date().toISOString(),
    };

    try {
      await axios.post("http://localhost:5000/orders", orderData);
      alert("Order placed successfully!");
      navigate("/shop");
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Failed to place the order. Please try again.");
    }
  };

  return (
    <div className="container my-4 cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="row cart-item align-items-center mb-3">
              <div className="col-md-2">
                <img src={item.image} alt={item.title} className="img-fluid cart-item-image" />
              </div>
              <div className="col-md-4">
                <h5 className="cart-item-title">{item.title}</h5>
              </div>
              <div className="col-md-2">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="form-control cart-item-quantity"
                  min="1"
                />
              </div>
              <div className="col-md-2">
                <p className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className="col-md-2">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button
              className="btn btn-success btn-lg"
              onClick={() => setShowForm(!showForm)}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

      {showForm && (
        <div className="checkout-form mt-4">
          <h2>Checkout Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={clientInfo.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Delivery Address
              </label>
              <textarea
                id="address"
                name="address"
                className="form-control"
                value={clientInfo.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                value={clientInfo.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Cart;
