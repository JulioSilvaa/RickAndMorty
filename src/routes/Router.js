import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CharacterFilteredPage } from "../Pages/CharacterFilteredPage/CharacterFilteredPage";
import { Home } from "../Pages/Home/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filtrados" element={<CharacterFilteredPage />} />
      </Routes>
    </BrowserRouter>
  );
};
