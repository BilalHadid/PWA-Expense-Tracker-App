import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import { Transaction } from "./Transaction";
import { transType } from "../context/Typeo";
import { contextProps } from "../context/Typeo";

export const TransactionHistory = () => {
  let { transaction }: any = useContext<Partial<contextProps>>(GlobalContext);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {" "}
        {transaction.map((transactions: transType) => (
          <Transaction key={transactions.id} transactions={transactions} />
        ))}
      </ul>
    </div>
  );
};
