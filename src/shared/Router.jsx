import React, { useState } from "react";
import Detail from "pages/Detail";
import Home from "pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import fakeData from "fakeData.json";

function Router() {
  const [fanLetter, setFanLetter] = useState(fakeData);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home fanLetter={fanLetter} setFanLetter={setFanLetter} />}
        />
        <Route
          path="/detail/:id"
          element={<Detail fanLetter={fanLetter} setFanLetter={setFanLetter} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
