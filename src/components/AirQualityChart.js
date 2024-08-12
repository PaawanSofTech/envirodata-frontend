import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import axios from 'axios';

const AirQualityChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/airquality');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching air quality data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Air Quality Trends</h2>
      <LineChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="AQI" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default AirQualityChart;
