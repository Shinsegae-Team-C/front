import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as React from "react";
import Cart from "./Cart";
import Login from "./Login";
import Join from "./Join";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/join" element={<Join />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
