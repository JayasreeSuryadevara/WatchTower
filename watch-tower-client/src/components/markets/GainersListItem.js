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
      <tr className="gainers-list-item">
        <td className="gainers-ticker">{gainer["ticker"].trim()}</td>
        <td className="gainers-name">{gainer["companyName"].trim()}</td>
        <td className="gainers-price">{parseFloat(gainer["price"]).toFixed(2)}</td>
        <td className="gainer-positive-changes">{parseFloat(gainer["changes"]).toFixed(2)}</td>
        <td className="gainer-positive-percent">{changePercent}</td>
        <td><i className="fas fa-sort-up fa-2x"></i></td>
      </tr>
    </Link>
  )

}

export default GainersListItem;