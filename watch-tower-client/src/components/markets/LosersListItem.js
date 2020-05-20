import React from "react";
import { Link } from 'react-router-dom';
import '../../styles/markets/Losers.css';

const LosersListItem = (props) => {
  const loser = props.loser;
  let changePercent = loser["changesPercentage"];
  changePercent = changePercent.slice(1, changePercent.length - 1);
  if (!loser["companyName"] || loser["companyName"].length > 100) return null;
  return (
    <Link to={`/ticker/${loser["companyName"]}/${loser["ticker"]}`} >
      <li className="losers-list-item">
        <p className="losers-list-item-ticker">{loser["ticker"]}</p>
        <p className="losers-company-name">{loser["companyName"]}</p>
        <p className="losers-price">{parseFloat(loser["price"]).toFixed(2)}</p>
        <p className="loser-negetive-changes">{parseFloat(loser["changes"]).toFixed(2)}</p>
        <p className="loser-negetive-percent">{changePercent}</p>
        <p><i className="fas fa-sort-down fa-2x"></i></p>
      </li>
    </Link>
  )
}

export default LosersListItem;