import React from "react";

const Button = ({ children, productId, addToCart }) => {
  return (
    <div>
      <button
        className="btn btn-outline-dark mb-2 mx-2"
        onClick={() => addToCart(productId)}
      >
        {children}
      </button>
    </div>
  );
};
export default Button;
