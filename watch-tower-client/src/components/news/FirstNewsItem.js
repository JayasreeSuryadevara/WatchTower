import React from "react";
import '../../styles/news/FirstNewsItem.css';

const FirstNewsItem = (props) => (
  <div className="main-page">
    <div className="title-container">
      <div className="title-item">
        <a href={props.url}><span>{props.title}</span></a>
      </div>
    </div>
    <div className="img-container">
      <div className="img-item">
        <a href={props.url}><img className="img-url" src={props.urlToImage} /></a>
      </div>
    </div>
  </div>
)

export default FirstNewsItem;