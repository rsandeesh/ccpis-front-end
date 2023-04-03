import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/home/Home";
import Services from "./components/Pages/services/Services";
import Products from "./components/Pages/product/Products";
import SignUp from "./components/auth/Signup";
import { AuthProvider } from "./components/context/AuthContext";
import Login from "./components/auth/Login";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
