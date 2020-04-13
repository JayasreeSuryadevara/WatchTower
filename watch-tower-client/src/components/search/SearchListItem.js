import React,{ useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import searchStock from '../util/SearchStock';
// import TickerDetails from "../ticker/TickerDetails";

const SearchListItem = ({ticker}) => {

  const [companyName, setCompanyName] = useState("");

  async function fetchCompanyProfile() {
    const data = await searchStock(ticker)
    if(data.symbol){
      const name = await data["profile"]["companyName"];
      setCompanyName(name.toString());
    }
  }

  useEffect(() => {
    fetchCompanyProfile()
  }, [])

  const route = "/ticker/" + companyName + "/" + ticker;
  return (
    <div className="search-list-item">
      {/* <Link to={{
        pathname: "/ticker",
        props: {
          name: companyName,
          ticker: ticker
        }
      }}>{ ticker }</Link> */}
      <Link to={route}>{ticker}</Link>
      {/* <Link to="/ticker" name={companyName} ticker={ticker} hello="hello">{ticker}</Link> */}
      {/* <TickerDetails name={companyName} ticker={ticker} >{ticker}</TickerDetails> */}
    </div>
  )
}

export default SearchListItem;