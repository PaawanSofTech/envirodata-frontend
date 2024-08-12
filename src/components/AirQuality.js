import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AirQuality() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/airquality')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the air quality data!', error);
      });
  }, []);

  return (
    <div>
      <h1>Air Quality Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.City} - {item.Date} - AQI: {item.AQI}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AirQuality;
