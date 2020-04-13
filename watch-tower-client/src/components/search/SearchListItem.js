import React,{ useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import searchStock from '../util/SearchStock';

const SearchListItem = ({ticker}) => {

  const [companyName, setCompanyName] = useState("");

  async function fetchCompanyProfile() {
    const data = await searchStock(ticker)
    console.log(data["profile"]["companyName"])
    setCompanyName(data["profile"]["companyName"]);
  }

  useEffect(() => {
    fetchCompanyProfile()
  }, [])

  // const route = "/"
  // const company = data.company;
  const route = "/ticker/" + companyName;
  // console.log(route);
  return (
    <div className="search-list-item">
      <Link to={route} name={companyName} ticker={ticker} > { ticker } </Link>
     </div>
  )
}

export default SearchListItem;