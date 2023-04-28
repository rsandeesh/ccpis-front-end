import React, { useState } from "react";
import "../../../App.css";
import "./index.css";
import { storage } from "../../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from 'uuid';
import Footer from "../../footer/Footer";
import Navbar from "../../navBar/Navbar";
import Upload from "../../upload/Upload";

const Product = () => {

  const [imageUpload, setImageUpload] = useState(null);
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image Uploaded");
    });
  };

  // <div className="products">
  //     <input type="file" onChange={(e) => { setImageUpload(e.target.files[0]) }} />
  //     <button onClick={uploadImage}>Upload Image</button>
  //   </div>
  return (
    <>
      <Navbar />
      <Upload />
      <Footer />
    </>
  );
}

export default Product;
