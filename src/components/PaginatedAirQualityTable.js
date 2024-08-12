import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const PaginatedAirQualityTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/airquality?page=${currentPage}&limit=${itemsPerPage}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching air quality data:', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  return (
    <div>
      <h2>Air Quality Data</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>AQI</th>
          </tr>
        </thead>
        <tbody>
          {data.map(entry => (
            <tr key={entry._id}>
              <td>{new Date(entry.Date).toLocaleDateString()}</td>
              <td>{entry.AQI}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>Previous</button>
      <button onClick={() => setCurrentPage(prev => prev + 1)}>Next</button>
    </div>
  );
};

export default PaginatedAirQualityTable;
