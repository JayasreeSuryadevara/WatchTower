import React from "react"; 
import '../../styles/news/newsDetailsItem.css';

const NewsDetailsItem = (props) => (
  <>
    <div className="news-object">
      <div className="articles-container">
        <div className="article-item">
          <div className="article-image-container">
            <a href={props.url}><img className="article-thumbnail" src={props.urlToImage} /></a>
          </div>
          <div className="article-content">
            <a href={props.url}><span className="article-title">{props.title}</span></a>
            <span className="article-data">{props.publishedAt}</span>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default NewsDetailsItem;