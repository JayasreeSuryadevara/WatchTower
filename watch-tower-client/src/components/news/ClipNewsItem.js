import React from "react";
import '../../styles/news/ClipNewsItem.css';

const ClipNewsItems = (props) => (
  <>
    <div className="clip-main-page">
      <div className="clip-main-container">
        <div className="clip-img-container">
          <div className="clip-img-url-container">
            <a href={props.url}><img className="clip-img-url" src={props.urlToImage} /></a>
          </div>
        </div>
        <div className="clip-title-date-container">
          <div className="clip-title-container">
            <div className="title-item">
              <a href={props.url}><span>{props.title}</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default ClipNewsItems;