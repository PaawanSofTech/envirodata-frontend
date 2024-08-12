import React, { useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const FilteredAirQualityChart = () => {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/airquality?startDate=${startDate}&endDate=${endDate}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching air quality data:', error.message);
    }
  };

  return (
    <div>
      <h2>Filtered Air Quality Trends</h2>
      <input 
        type="date" 
        value={startDate} 
        onChange={(e) => setStartDate(e.target.value)} 
      />
      <input 
        type="date" 
        value={endDate} 
        onChange={(e) => setEndDate(e.target.value)} 
      />
      <button onClick={fetchData}>Fetch Data</button>
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

export default FilteredAirQualityChart;
