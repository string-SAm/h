// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Home from "./components/Home.js";
import Inventory from "./pages/inventory/Inventory";
import Transportation from "./pages/transportation/Transportation";
import Warehouse from "./pages/warehouse/Warehouse";
import Error from "./pages/Error";
import { Route, Routes } from "react-router-dom";
//import H from "./components/H.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/Inventory" element={<Inventory />} />
      <Route path="/Transportation" element={<Transportation />} />
      <Route path="/Warehouse" element={<Warehouse />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
