import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Gift from "./pages/Gift";

import Aboute from "./pages/Aboute";
import { Contact } from "lucide-react";
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<Aboute />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
