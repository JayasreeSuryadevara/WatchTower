import React from "react";
import NewsDetails from "../../components/news/NewsDetails";
import '../../styles/news/newsPage.css'

export default () => {
  return (
    <div className="news-page-object">
      <div className="title">
        <span>Latest News</span>
      </div>
      <div>
        <div className='bottom-border'></div>
      </div>
      <div className="update-message">
        <span>Real Time Updates From Watch Tower</span>
      </div>
      <div className="articles-container">
        <NewsDetails />
      </div>
    </div>
  )
}