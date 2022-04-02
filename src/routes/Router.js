import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CharacterFilteredPage } from "../Pages/CharacterFilteredPage/CharacterFilteredPage";
import { Home } from "../Pages/Home/Home";
import { SeasonPage } from "../Pages/SeasonPage/SeasonPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filtrados" element={<CharacterFilteredPage />} />
        <Route path="/episodios" element={<SeasonPage />} />
      </Routes>
    </BrowserRouter>
  );
};
