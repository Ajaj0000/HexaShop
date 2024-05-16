import React from "react";
import { Home } from "./Home/Home";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Admin } from "./Admin/admin";
// import { MenWear } from "./Admin/menWear";
import { ProductForm } from "./Admin/practice";
import { SingleProduct } from "./SingleProduct/SingleProduct";
import { Aboutus } from "./About-us/Aboutus";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singleproduct" element={<SingleProduct/>}/>
          <Route path="Admin" element={<Admin />} />
          <Route path="/pro" element={<ProductForm />} />
          <Route path="/about" element={<Aboutus/>}/>
          {/* <Route path="/" element={<Home1 />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export { App };
