import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BuyNow from "./pages/BuyNow";
import Header from "./static/Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/buynow" element={<BuyNow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
