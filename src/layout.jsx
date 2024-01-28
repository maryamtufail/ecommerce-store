import React from "react";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
