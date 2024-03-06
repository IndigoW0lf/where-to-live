import React from 'react';
import './App.css';
import DataVisualization from './components/DataVisualization';
import MapComponent from './components/MapComponent';
import DemographicsPieChart from './components/DemographicsPieChart';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import logo from './logo.png'; 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        className="hero-section"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ marginRight: '20px', height: '300px' }}
        />
        <div>
          <Typography variant="h2" style={{ color: '#333', textAlign: 'center' }}>
            Nest Quest
          </Typography>
          <Typography variant="h3" style={{ color: '#333', textAlign: 'center' }}>
            Explore. Discover. Decide.
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ color: '#333', textAlign: 'center' }}
          >
            Dive into the world of locale data and make an informed decision.
          </Typography>
        </div>
      </div>
      <Container maxWidth="lg">
        <Paper elevation={3} className="main-content">
          {/* Data Visualization Component Title */}
          <Typography variant="h4" style={{ marginTop: '20px', color: '#333' }}>
            Insights Dashboard
          </Typography>
          <Typography
            variant="subtitle2"
            style={{ marginBottom: '20px', color: '#666' }}
          >
            Interactive overview of city metrics for informed decision-making.
          </Typography>
          <div className="visualization-container">
            <DataVisualization />
          </div>

          {/* Map Component Title */}
          <Typography variant="h4" style={{ marginTop: '40px', color: '#333' }}>
            Cities on the Map
          </Typography>
          <Typography
            variant="subtitle2"
            style={{ marginBottom: '20px', color: '#666' }}
          >
            Geographic locations and key facts.
          </Typography>
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
