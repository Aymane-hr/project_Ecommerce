import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import './Cart.css'; // Import custom styles

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(ShopContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container my-4 cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
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
                <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button className="btn btn-success btn-lg">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
