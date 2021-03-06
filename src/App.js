import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Housing from "./pages/Housing";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/a-propos" element={<About />}></Route>
        <Route path="/logement/:id" element={<Housing />}></Route>
        <Route path="*" element={<Error404 />}></Route>
        <Route path="/error" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
