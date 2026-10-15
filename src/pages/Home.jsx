import React from "react";
import Hero from "../components/home/Hero";
import Category from "../components/home/Category";
import Customers from "../components/home/Customers";
import BestSellers from "../components/home/BestSellers";

const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <BestSellers />
      <Customers />
    </>
  );
};

export default Home;
