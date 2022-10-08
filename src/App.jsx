import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./containers/Footer/Footer";
import Navbar from "./containers/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import LoRe from "./pages/LoginRegister/LoRe";

const Main = () => (
  <>
    <Navbar />
    <Home />
    <Footer />
  </>
);
function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Main />} />
        <Route path="/" element={<LoRe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
