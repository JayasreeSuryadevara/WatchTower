import React from "react";
import '../../styles/news/FirstNewsItem.css';

const FirstNewsItem = (props) => (
  <div className="first-main-page">
    <div className="first-title-container">
      <div className="first-title-item">
        <a href={props.url}><span>{props.title}</span></a>
      </div>
    </div>
    <div className="first-img-container">
      <div className="first-img-item">
        <a href={props.url}><img className="first-img-url" src={props.urlToImage} /></a>
      </div>
    </div>
  </div>
)

export default FirstNewsItem;