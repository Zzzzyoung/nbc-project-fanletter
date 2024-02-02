import React, { useState } from "react";
import Detail from "pages/Detail";
import Home from "pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import fakeData from "fakeData.json";
import { FanLetterContext } from "context/FanLetterContext";

function Router() {
  const [fanLetter, setFanLetter] = useState(fakeData);

  return (
    <FanLetterContext.Provider value={{ fanLetter, setFanLetter }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </FanLetterContext.Provider>
  );
}

export default Router;
