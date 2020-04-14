import React from "react";
import { Link } from 'react-router-dom';
import '../../styles/markets/Losers.css';

const LosersListItem = (props) => {
  const loser = props.loser;
  let changePercent = loser["changesPercentage"];
  changePercent = changePercent.slice(1, changePercent.length - 1);
  return (
    <Link to={`/ticker/${loser["companyName"]}/${loser["ticker"]}`} >
      <div className="losers-list-item">
        <p className="losers-list-item-ticker">{loser["ticker"]}</p>
        <p className="losers-company-name">{loser["companyName"]}</p>
        <p className="losers-price">{parseFloat(loser["price"]).toFixed(2)}</p>
        {loser["changes"] > 0
          ? <p className="loser-positive-changes">{parseFloat(loser["changes"]).toFixed(2)}</p>
          : <p className="loser-negetive-changes">{parseFloat(loser["changes"]).toFixed(2)}</p>
        }
        {changePercent.includes("+")
          ? <p className="loser-positive-percent">{changePercent}</p>
          : <p className="loser-negetive-percent">{changePercent}</p>
        }
        {loser["changes"] > 0
          ? <p><i className="fas fa-sort-up fa-2x"></i></p>
          : <p><i className="fas fa-sort-down fa-2x"></i></p>
        }
      </div>
    </Link>
  )
}

export default LosersListItem;