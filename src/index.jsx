import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MemberContextProvider from "context/MemberContext";
import FanLetterContextProvider from "context/FanLetterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MemberContextProvider>
    <FanLetterContextProvider>
      <App />
    </FanLetterContextProvider>
  </MemberContextProvider>
);
