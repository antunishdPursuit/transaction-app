import { Link } from "react-router-dom";
function Transaction({transaction}) {
    return (
      <div >
        <ul className="list-group list-group-horizontal">
          <li className="list-group-item">{transaction.date}</li>
          <li className="list-group-item"><Link to={`/transactions/${transaction.id}`}>{transaction.item_name}</Link></li>
          <li className="list-group-item">{transaction.amount}</li>
        </ul>
      </div>
    );
  }
  
  export default Transaction;
  