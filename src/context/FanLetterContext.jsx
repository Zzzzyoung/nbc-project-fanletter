import { createContext, useState } from "react";
import fakeData from "../assets/fakeData.json";

export const FanLetterContext = createContext(null);

function FanLetterContextProvider({ children }) {
  const [fanLetter, setFanLetter] = useState(fakeData);

  return (
    <FanLetterContext.Provider value={{ fanLetter, setFanLetter }}>
      {children}
    </FanLetterContext.Provider>
  );
}

export default FanLetterContextProvider;
