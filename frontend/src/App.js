import React from 'react';
import './App.css';
import DataVisualization from './components/DataVisualization';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import MapComponent from './components/MapComponent';
import DemographicsPieChart from './components/DemographicsPieChart';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="hero-section">
        <Typography variant="h3" style={{ color: '#333' }}>
          Explore. Discover. Decide.
        </Typography>
        <Typography variant="subtitle1" style={{ color: '#333' }}>
          Dive into the world of locale data to make an informed decision with Nest Quest.
        </Typography>
      </div>
      <Container maxWidth="lg">
        <Paper elevation={3} className="main-content">
          <div className="visualization-container">
            <DataVisualization />
          </div>
          <div className="map-container">
            <MapComponent />
          </div>
          <div className="demographics-chart-container">
            <DemographicsPieChart />
          </div>
        </Paper>
      </Container>
      <div className="footer">
        <Typography variant="body1">Nest Quest ©2024</Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
