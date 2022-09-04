import React from "react";
import "./App.css";
import Footer from "./containers/Footer/Footer";
import Navbar from "./containers/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import LoRe from "./pages/LoginRegister/LoRe";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <LoRe /> */}
      {/* <Login /> */}
      <Footer />
    </div>
  );
}

export default App;
