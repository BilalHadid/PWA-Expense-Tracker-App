import React, { createContext, useReducer } from "react";
import { AppReducer } from "./appReducer";
import {
  transType,
  transactionType,
  contextProps,
  initialStateTransaction,
} from "./Typeo";

const initialState: transactionType = {
  transaction: [{ id: 1, text: "Bilal", ammount: 40 }],
};

// type StateObject = {
//   ID: number;
//   Description: string;
//   Amount: number;
// };
export const GlobalContext = createContext(initialState);

let [state, dispatch] = useReducer(AppReducer, initialState);

export const GlobalProvider = ({ children }: any) => {
  let deleteTransaction = (id: number) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  let addTransaction = (transaction: transType) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        transaction: state.transaction,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
