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
      <AppBar className="appBar">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome to Nest Quest
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="hero-section">
        <Typography variant="h3">Explore. Discover. Connect.</Typography>
        <Typography variant="subtitle1">
          Dive into the world of data and make informed decisions with Nest
          Quest.
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
