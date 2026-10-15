import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main  className="pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
