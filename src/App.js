import React from 'react';
import { Button, Typography } from '@mui/material';
import FilteredAirQualityChart from './components/FilteredAirQualityChart';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4">Environmental Data Analysis</Typography>
      <FilteredAirQualityChart />
      <Button variant="contained" color="primary">Fetch Data</Button>
    </div>
  );
};

export default App;
