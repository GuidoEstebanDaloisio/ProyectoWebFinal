import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Header from "./components/layout/Header";
import Nav from './components/layout/Nav';
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import Historia from "./pages/Historia";
import Productos from "./pages/Productos";
import NiveLab from "./pages/NiveLab";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <div className="App">
     <Header/>
     
     <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="historia" element={<Historia />} />
          <Route path="productos" element={<Productos />} />
          <Route path="niveLab" element={<NiveLab />} />
          <Route path="contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>

     <Footer/>
    </div>
  );
}

export default App;
