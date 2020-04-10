import React from "react";
import '../../styles/homePage/MarketIndexPanel.css';

const IndexListItem = (props) => {
  const index = props.index;
  console.log("props",props);
  return (
    <div className="index-list-item">
      <p className="index-name">{index["indexName"]}</p>
      {/* <p className="index-ticker">{index["ticker"]}</p> */}
      <p className="index-price">{index["price"]}</p>
      <p className="index-changes">{index["changes"]}</p>
      {index["changes"] > 0 
        ? <p><i className="fas fa-sort-up fa-2x"></i></p>
        : <p><i className="fas fa-sort-down fa-2x"></i></p>
      }
    </div>
  )
}

export default IndexListItem;