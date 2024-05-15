import React from "react";
import { Home } from "./Home/Home";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Admin } from "./Admin/admin";
// import { MenWear } from "./Admin/menWear";
import { ProductForm } from "./Admin/practice";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="Admin" element={<Admin />} />
          {/* <Route path="/menWear" element={<MenWear />} /> */}
          <Route path="/pro" element={<ProductForm />} />
          {/* <Route path="/" element={<Home1 />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export { App };
