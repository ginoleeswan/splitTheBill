import React, { useState, createContext } from "react";

export const BillContext = createContext();

export const BillProvider = (props) => {
  const [bills, setBills] = useState([
    // {
    //   catagory: "food",
    //   totalAmount: 480,
    //   tip: 0.1,
    //   people: 3,
    //   id: 930299,
    // },
  ]);
  return (
    <BillContext.Provider value={[bills, setBills]}>
      {props.children}
    </BillContext.Provider>
  );
};
