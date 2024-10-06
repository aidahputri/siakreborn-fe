import React, { createContext, useContext, useState } from "react";

const SelectionContext = createContext();

export const useSelectionContext = () => useContext(SelectionContext);

export const SelectionProvider = ({ children }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <SelectionContext.Provider value={{ selectedValue, setSelectedValue }}>
      {children}
    </SelectionContext.Provider>
  );
};
