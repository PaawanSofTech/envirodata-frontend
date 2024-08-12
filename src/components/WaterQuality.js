import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WaterQuality() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/waterquality')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the water quality data!', error);
      });
  }, []);

  return (
    <div>
      <h1>Water Quality Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            pH: {item.ph} - Potability: {item.Potability}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WaterQuality;
