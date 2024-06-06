import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css';
import About from "./pages/About";
import Location from "./pages/Location";
import PageError from "./pages/PageError";
import './App.css';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/location/:id" element={<Location/>} />
        <Route path="*" element={<PageError/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
