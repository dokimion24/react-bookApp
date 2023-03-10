import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Add from "./pages/Add";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Add />} />
      <Route path="/book/:id" element={<Detail />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="*" element={<p>Not Found</p>} />
    </Routes>
  );
};

export default App;
