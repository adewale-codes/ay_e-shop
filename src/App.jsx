import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Products from "./Component/Products";
import Product from "./Component/Product";
import Cart from "./Component/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
