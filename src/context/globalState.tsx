import React, { createContext, useReducer } from "react";
import { AppReducer } from "./appReducer";
import { initialStateTransaction } from "./Typeo";

const initialState: initialStateTransaction = {
  transaction: [{ id: 1, text: "Bilal", ammount: 40 }],
};

export const GlobalContext = createContext(initialState);

let [state, dispatch] = useReducer(AppReducer, initialState);
function deleteTransaction(id: any) {
  dispatch({
    type: "DELETE_TRANSACTION",
    payload: id,
  });
}
function addTransaction(transaction: string) {
  dispatch({
    type: "ADD_TRANSACTION",
    payload: transaction,
  });
}
type props = {
  children: any;
};
export const GlobalProvider = ({ children }: props) => {
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
