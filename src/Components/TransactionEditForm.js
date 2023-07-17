import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function TransactionsEditForm() {
  let { index } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    id: 0,
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((e) => console.error(e));
  }, [index]);

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const updateTransaction = () => {
    
    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then((response) => {
        setTransaction(response.data);
        navigate(`/transactions/${index}`);
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction();
  };

    return (
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <h1>Edit Transaction Item</h1>
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
          <Link to={`/transactions/${index}`}>
        <button>Nevermind!</button>
      </Link>
        </div>
      </div>
    );
  }
  
  export default TransactionsEditForm;
  