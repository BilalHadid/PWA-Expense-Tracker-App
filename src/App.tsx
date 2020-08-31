import React from "react";
import "./component/component.css";
import { AddTransaction } from "./component/addTransaction";
import { Ammount } from "./component/Ammount";
import { IncomeExpense } from "./component/IncomeExpense";
import { TransactionHistory } from "./component/TransactionHistory";

import { GlobalProvider } from "./context/globalState";

function App() {
  return (
    <GlobalProvider>
      <h3>Expense Tracker App </h3>

      <div className="container">
        <Ammount />
        <IncomeExpense />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
