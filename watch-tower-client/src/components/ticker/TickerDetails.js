import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks"
import { companyNews } from '../util/CurrentNews';
import TickerDetailsItem from './TickerDetailsItem'; 

export default () => {
  const [allCompanyNews, setCompanyNews] = useState([]);

  async function fetchCompanyNews() {
    const news = await companyNews("tesla") 
    setCompanyNews(news)
  }

  useEffect(() => {
    fetchCompanyNews()
  }, [])

  return (
    <h1>Ticker Page</h1>
  )
}