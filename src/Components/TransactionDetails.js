import { useState, useEffect } from "react";
import { useParams,Link, useNavigate } from "react-router-dom";
import axios from "axios";

function TransactionsDetails() {
  const API = process.env.REACT_APP_API_URL;
  const [transaction, setTransactions] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        setTransactions(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate, API]);

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((e) => console.error(e));
  };

    return (
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <h1>Transactions Details</h1>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><span className="fw-bold">Date: </span>{transaction.date}</li>
            <li className="list-group-item"><span className="fw-bold">Name: </span>{transaction.item_name}</li>
            <li className="list-group-item"><span className="fw-bold">Amount: </span>{transaction.amount}</li>
            <li className="list-group-item"><span className="fw-bold">From: </span>{transaction.from}</li>
            <li className="list-group-item"><span className="fw-bold">Catergory: </span>{transaction.category}</li>
          </ul>
          <div>
          {" "}
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
  
  export default TransactionsDetails;
  