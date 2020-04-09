import React from 'react';
import fetchSectorData from '../util/fetch-sector-resolver';

export default () => {

  const data = fetchSectorData();

  return (
    <div>
      <div>Test Sector Data</div>
      <h1> {data["Meta Data"]["Information"]} </h1>
      <h2> {data["Meta Data"]["Last Refreshed"] } </h2>
    </div>
  )
}