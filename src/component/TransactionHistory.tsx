import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import { Transaction } from "./Transaction";

export const TransactionHistory = () => {
  let { transaction } = useContext(GlobalContext);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {" "}
        {transaction.map((transactions: any) => (
          <Transaction key={transactions.id} transactions={transactions} />
        ))}
      </ul>
    </div>
  );
};
