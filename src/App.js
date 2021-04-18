import React from "react";
import "../src/assets/css/index.css";
import Navbar from "../src/scripts/component/Navbar";
import Content from "../src/scripts/component/Content";
import Shipping from "../src/scripts/layout/Shipping";

function App() {
  return (
    <div className="App">
      <div className="bg-purple-50 m-0 px-0 pb-28">
        <Navbar></Navbar>
        <Content></Content>
      </div>
      <Shipping></Shipping>
    </div>
  );
}

export default App;
