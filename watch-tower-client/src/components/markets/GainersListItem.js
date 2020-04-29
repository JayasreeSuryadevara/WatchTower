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
      <div className="gainers-list-item">
        <p className="gainers-list-item-ticker">{gainer["ticker"]}</p>
        <p className="gainers-company-name">{gainer["companyName"]}</p>
        <p className="gainers-price">{parseFloat(gainer["price"]).toFixed(2)}</p>
        {gainer["changes"] > 0
          ? <p className="gainer-positive-changes">{parseFloat(gainer["changes"]).toFixed(2)}</p>
          : <p className="gainer-negetive-changes">{parseFloat(gainer["changes"]).toFixed(2)}</p>
        }
        {changePercent.includes("+")
          ? <p className="gainer-positive-percent">{changePercent}</p>
          : <p className="gainer-negetive-percent">{changePercent}</p>
        }
        {gainer["changes"] > 0
          ? <p><i className="fas fa-sort-up fa-2x"></i></p>
          : <p><i className="fas fa-sort-down fa-2x"></i></p>
        }
      </div>
    </Link>
  )
}

export default GainersListItem;