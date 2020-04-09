import React from "react";

const WatchNewsItem = (props) => {
  const today = new Date(props.publishedAt);
<<<<<<< HEAD
  const useDate = today.toUTCString();
=======
  const useDate = today.toString();
>>>>>>> 914f413840f163009c44f788e0bac1069bf3cfbd
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