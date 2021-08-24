import React, { useState, createContext } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = (props) => {
  const [scroll, setScroll] = useState(false);
  return (
    <ScrollContext.Provider value={[scroll, setScroll]}>
      {props.children}
    </ScrollContext.Provider>
  );
};
