import React from "react";
import Home from "./sections/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main-container">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
