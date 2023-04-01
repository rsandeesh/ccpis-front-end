import React from "react";
import "./App.css";
import { Route, Routes, Switch } from "react-router-dom";
import Home from "./components/Pages/home/Home";
import Services from "./components/Pages/services/Services";
import Products from "./components/Pages/product/Products";
import SignUp from "./components/Pages/register/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
