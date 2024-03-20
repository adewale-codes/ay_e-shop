import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} style={{ width: 50, height: 50 }} />
            <span>{product.title}</span>
            <span>${product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
