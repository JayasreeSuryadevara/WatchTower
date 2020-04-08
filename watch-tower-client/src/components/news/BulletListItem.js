import React from "react";
import '../../styles/news/BulletListItem.css';

const BulletListItem = (props) => (
  <div className="bullet-main-page">
    <div className="bullet-title-container">
      <ul>
        <li className="bullet-item"><a className="bullet-link" href={props.url}>{props.title}</a></li>
      </ul>
    </div>
  </div>
)

export default BulletListItem;