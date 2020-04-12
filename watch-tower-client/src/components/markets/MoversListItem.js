import React from "react";
import '../../styles/markets/Movers.css';

const MoversListItem = (props) => {
  const mover = props.mover;
  let changePercent = mover["changesPercentage"];
  changePercent = changePercent.slice(1, changePercent.length - 1);
  return (
    <div className="movers-list-item">
      <p className="movers-list-item-ticker">{mover["ticker"]}</p>
      <p className="movers-company-name">{mover["companyName"]}</p>
      <p className="movers-price">{parseFloat(mover["price"]).toFixed(2)}</p>
      {mover["changes"] > 0
        ? <p className="mover-positive-changes">{parseFloat(mover["changes"]).toFixed(2)}</p>
        : <p className="mover-negetive-changes">{parseFloat(mover["changes"]).toFixed(2)}</p>
      }
      {changePercent.includes("+")
        ? <p className="mover-positive-percent">{changePercent}</p>
        : <p className="mover-negetive-percent">{changePercent}</p>
      }
      {mover["changes"] > 0
        ? <p><i className="fas fa-sort-up fa-2x"></i></p>
        : <p><i className="fas fa-sort-down fa-2x"></i></p>
      }
    </div>
  )
}

export default MoversListItem;