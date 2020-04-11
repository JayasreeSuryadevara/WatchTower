import React from "react";
import '../../styles/homePage/MarketIndexPanel.css';

const IndexListItem = (props) => {
  const index = props.index;
  console.log("props",props);
  return (
    <div className="index-list-item">
      <p className="index-name">{index["indexName"]}</p>
      <p className="index-price">{index["price"]}</p>
      {index["changes"] > 0
        ? <p className="positive-changes">{parseFloat(index["changes"]).toFixed(2)}</p>
        : <p className="negetive-changes">{parseFloat(index["changes"]).toFixed(2)}</p>
      }
      {index["changes"] > 0 
        ? <p><i className="fas fa-sort-up fa-2x"></i></p>
        : <p><i className="fas fa-sort-down fa-2x"></i></p>
      }
    </div>
  )
}

export default IndexListItem;