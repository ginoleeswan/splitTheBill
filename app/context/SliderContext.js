import React, { useState, createContext } from "react";

export const SliderContext = createContext();

export const SliderProvider = (props) => {
  const [slider, setSliders] = useState({});
  return (
    <SliderContext.Provider value={[slider, setSliders]}>
      {props.children}
    </SliderContext.Provider>
  );
};
