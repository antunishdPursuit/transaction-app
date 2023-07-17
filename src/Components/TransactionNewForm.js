import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {v4 as uuidv4} from 'uuid';
let myuuid = uuidv4();
const API = process.env.REACT_APP_API_URL;

function TransactionsNewForm() {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    id: myuuid,
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });
  
  const addTransaction = (newtransaction) => {
    axios
    .post(`${API}/transactions`, newtransaction)
    .then(
    (res) => {
    navigate(`/transactions`);
    })
    .catch((c) => console.error("catch", c));
  };

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction(transaction)
  };

    return (
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <h1>New Transaction Item</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-floating">
                <input
                id="item_name" 
                type="text" 
                value={transaction.item_name}
                onChange={handleTextChange}
                className="form-control" 
                placeholder="item_name"
                required
                />
                <label htmlFor="item_name">Name:</label>
            </div>
            <br></br>
            <div className="form-floating">
                <input
                id="amount" 
                type="number" 
                value={transaction.amount}
                onChange={handleTextChange}
                className="form-control" 
                placeholder="Amount:"
                required
                />
                <label htmlFor="amount">Amount:</label>
            </div>
            <br></br>
            <div className="form-floating">
                <input
                id="date" 
                type="date" 
                value={transaction.date}
                onChange={handleTextChange}
                className="form-control" 
                placeholder="date"
                required
                />
                <label htmlFor="date">Date:</label>
            </div>
            <br></br>
            <div className="form-floating">
                <input
                id="from" 
                type="text" 
                value={transaction.from}
                onChange={handleTextChange}
                className="form-control" 
                placeholder="From:"
                required
                />
                <label htmlFor="from">From:</label>
            </div>
            <br></br>
            <div className="form-floating">
                <input
                id="category" 
                type="text" 
                value={transaction.category}
                onChange={handleTextChange}
                className="form-control" 
                placeholder="Category:"
                required
                />
                <label htmlFor="category">Category:</label>
            </div>
            <br></br>
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
  
  export default TransactionsNewForm;
  