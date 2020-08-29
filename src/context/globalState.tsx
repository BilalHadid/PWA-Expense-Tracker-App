import React, { createContext, useReducer } from "react";
import { AppReducer } from "./appReducer";
import { initialStateTransaction } from "./Typeo";

const initialState: initialStateTransaction = {
  transaction: [{ id: 1, text: "Bilal", ammount: 40 }],
};
type transType = {
  type: string;
  payload: number;
};
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
