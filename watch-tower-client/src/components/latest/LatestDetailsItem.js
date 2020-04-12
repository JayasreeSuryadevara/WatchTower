import React from "react";
import '../../styles/news/NewsDetailsItem.css';
import '../../styles/technology/TechnologyNews.css';

const LatestDetailsItem = (props) => (
  <>
    <div className="tech-main-page">
      <div className="main-container">
        <div className="img-container">
          <div className="img-url-container">
            <a href={props.url}><img className="img-url" src={props.urlToImage} /></a>
          </div>
        </div>
        <div className="title-date-container">
          <div className="title-container">
            <div className="title-item">
              <a href={props.url}><span>{props.title}</span></a>
            </div>
          </div>
          <div className="date-container">
            <div className="date-item">
              <span>{props.publishedAt}</span>
            </div>
            <div className="time-container">
              <div className="time-item">
                <span>at {props.time}</span>
              </div>
            </div>
            <div className="author-container">
              <div className="author-item">
                <span>by: {props.author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default LatestDetailsItem;