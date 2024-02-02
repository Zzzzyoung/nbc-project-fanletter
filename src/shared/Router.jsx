import React from "react";
import Detail from "pages/Detail";
import Home from "pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FanLetterContextProvider from "context/FanLetterContext";

function Router() {
  return (
    <FanLetterContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </FanLetterContextProvider>
  );
}

export default Router;
