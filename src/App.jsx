import React from "react";
import GlobalStyle from "GlobalStyle";
import Router from "shared/Router";
import MemberContextProvider from "context/MemberContext";
import FanLetterContextProvider from "context/FanLetterContext";

function App() {
  return (
    <>
      <MemberContextProvider>
        <FanLetterContextProvider>
          <GlobalStyle />
          <Router />
        </FanLetterContextProvider>
      </MemberContextProvider>
    </>
  );
}

export default App;
