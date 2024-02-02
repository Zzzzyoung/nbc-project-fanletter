import { createContext, useState } from "react";

export const MemberContext = createContext(null);

function MemberContextProvider({ children }) {
  const [selectedMember, setSelectedMember] = useState("카리나");

  return (
    <MemberContext.Provider value={{ selectedMember, setSelectedMember }}>
      {children}
    </MemberContext.Provider>
  );
}

export default MemberContextProvider;
