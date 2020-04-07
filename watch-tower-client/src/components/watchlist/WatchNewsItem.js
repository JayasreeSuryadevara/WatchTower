import React from "react";

const WatchNewsItem = (props) => {
  const today = new Date(props.publishedAt);
  const useDate = today.toUTCString();
  return (
  <>
    <div className="watch-list-news-date">
      <span>{useDate}</span>
    </div>
    <div className="watch-list-news-title">
      <a href={props.url}><span className="">{props.title}</span></a>
    </div>
  </>
  )
}

export default WatchNewsItem;