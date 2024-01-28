import "./App.css";
import React from "react";
import Layout from "./layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Recommended from "./pages/recommended";
import Shop from "./pages/shop";
import Featured from "./pages/featured";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/recommended" element={<Recommended />} />
            <Route path="/featured" element={<Featured />} />
            <Route path="/shop" element={<Shop />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
