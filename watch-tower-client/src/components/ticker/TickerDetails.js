import React, { useEffect, useState } from "react";
import { companyNews } from '../util/CurrentNews';

export default () => {
  const [allCompanyNews, setCompanyNews] = useState([]);

  useEffect(() => {
    fetchCompanyNews()
  }, [])

  return (
    <h1>Ticker Page</h1>
  )
}