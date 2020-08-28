import React from "react";
import "./component/component.css";
import { Transaction } from "./component/Transaction";
import { AddTransaction } from "./component/addTransaction";
import { Ammount } from "./component/Ammount";
import { IncomeExpense } from "./component/IncomeExpense";
import { TransactionHistory } from "./component/TransactionHistory";

import { GlobalProvider } from "./context/globalState";

function App() {
  return (
    <GlobalProvider>
      <h1>Expense Tracker App </h1>

      <div className="container">
        <Ammount />
        <IncomeExpense />
        <TransactionHistory />
        <Transaction />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
