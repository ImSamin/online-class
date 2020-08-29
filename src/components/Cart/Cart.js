import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  const coursePrice = cart.reduce((total, prd) => total + prd.price, 0);
  const total = coursePrice.toFixed(2);

  return (
    <div className="cart">
      <h2>Summary</h2>
      <h4>Item: {cart.length}</h4>
      <h3>Total:{total}</h3>
    </div>
  );
};

export default Cart;
