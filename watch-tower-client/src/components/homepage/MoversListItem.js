import React, { useState } from "react";
import { Link, withRouter } from 'react-router-dom';
import '../../styles/homePage/MarketMoversPanel.css';

const MoversListItem = (props) => {
  const active = props.active;
  let changePercent = active["changesPercentage"];
  changePercent = changePercent.slice(1,changePercent.length-1);
  if (!active["companyName"] || active["companyName"].length > 100) return null;

  return (
    <a href={`/ticker/${active["companyName"]}/${active["ticker"]}`} >
      <div className="active-list-item">
        <p className="active-company-name">{active["companyName"]}</p>
        <p className="active-price">{parseFloat(active["price"]).toFixed(2)}</p>
        {active["changes"] > 0
          ? <p className="active-positive-changes">{parseFloat(active["changes"]).toFixed(2)}</p>
          : <p className="active-negetive-changes">{parseFloat(active["changes"]).toFixed(2)}</p>
        }
        {changePercent.includes("+")
          ? <p className="active-positive-percent">{changePercent}</p>
          : <p className="active-negetive-percent">{changePercent}</p>
        }     
        {active["changes"] > 0
          ? <p><i className="fas fa-sort-up fa-2x"></i></p>
          : <p><i className="fas fa-sort-down fa-2x"></i></p>
        }
      </div>
    </a>
  )
}

export default withRouter(MoversListItem);