import React from "react";
import "./App.css";
import Footer from "./containers/Footer/Footer";
import Navbar from "./containers/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import LoRe from "./pages/LoginRegister/LoRe";
import Search from "./pages/Search/Search";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Search /> */}
      <Home />
      {/* <LoRe /> */}
      {/* <Login /> */}
      <Footer />
    </div>
  );
}

export default App;
