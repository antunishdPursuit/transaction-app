import Transaction from "./Transaction";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;
function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
      axios
      .get(`${API}/transactions`)
      .then((response) => {
          setTransactions(response.data)})
      .catch((e) => console.error("catch", e));
  }, []);
  return (
    <div className="row justify-content-md-center">
      <div className="col-md-auto">
        <h1>Transactions</h1>
          {transactions.map(transaction => {
            return <Transaction key={transaction.id} transaction={transaction} />;
          })}
      </div>
    </div>
  );
}

export default Transactions;
