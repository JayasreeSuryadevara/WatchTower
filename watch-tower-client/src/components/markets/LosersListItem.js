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
      <tr className="losers-list-item">
        <td className="losers-list-item-ticker">{loser["ticker"]}</td>
        <td className="losers-company-name">{loser["companyName"]}</td>
        <td className="losers-price">{parseFloat(loser["price"]).toFixed(2)}</td>
        <td className="loser-negetive-changes">{parseFloat(loser["changes"]).toFixed(2)}</td>
        <td className="loser-negetive-percent">{changePercent}</td>
        <td><i className="fas fa-sort-down fa-2x"></i></td>
      </tr>
    </Link>
  )
}

export default LosersListItem;