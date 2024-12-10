import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(ShopContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container my-4">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="row mb-3">
              <div className="col-md-2">
                <img src={item.image} alt={item.title} className="img-fluid" />
              </div>
              <div className="col-md-4">
                <h5>{item.title}</h5>
              </div>
              <div className="col-md-2">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="form-control"
                  min="1"
                />
              </div>
              <div className="col-md-2">
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className="col-md-2">
                <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button className="btn btn-success">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
