import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import "./component.css";

export const Ammount = () => {
  const { transaction } = useContext(GlobalContext);
  const amounts = transaction.map((transactions: any) => transactions.ammount);
  console.log(amounts);
  const total = amounts
    .reduce((acc: any, item: any) => (acc += item), 0)
    .toFixed(2);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1> ${total} </h1>
    </div>
  );
};
