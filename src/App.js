import React, {useState} from "react";
import "./App.css";
import backImage from "./assets/images/test.jpg";
import testPred from "./assets/images/test1.jpg";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/home/Home";
// import Services from "./components/Pages/services/Services";
// import Products from "./components/Pages/product/Products";
import SignUp from "./components/auth/Signup";
import { AuthProvider } from "./components/context/AuthContext";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/routes/PrivateRoute";
import Upload from "./components/upload/Upload";
import UploadSection from "./components/uploadSection/UploadSection";
import Results from "./components/Pages/results/Results";
import Sketch from "react-p5";

function App() {

  return (
    <AuthProvider>
      <div className="App">
         <Routes>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/services" element={<Results />} />
            <Route path="/products" element={<UploadSection />} />
          </Route>
          <Route path="/upload" element={<Upload />} />

          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
