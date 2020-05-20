import React from "react";
import { Link } from 'react-router-dom';
import '../../styles/markets/Gainers.css';

const GainersListItem = (props) => {

  const gainer = props.gainer;

  let changePercent = gainer["changesPercentage"];
  changePercent = changePercent.slice(1, changePercent.length - 1);

  if (!gainer["companyName"] || gainer["companyName"].length > 100) return null;

  return (
    <Link to={`/ticker/${gainer["companyName"]}/${gainer["ticker"]}`} >
      <li className="gainers-list-item">
        <p className="gainers-ticker">{gainer["ticker"].trim()}</p>
        <p className="gainers-name">{gainer["companyName"].trim()}</p>
        <p className="gainers-price">{parseFloat(gainer["price"]).toFixed(2)}</p>
        <p className="gainer-positive-changes">{parseFloat(gainer["changes"]).toFixed(2)}</p>
        <p className="gainer-positive-percent">{changePercent}</p>
        <p><i className="fas fa-sort-up fa-2x"></i></p>
      </li>
    </Link>
  )

}

export default GainersListItem;