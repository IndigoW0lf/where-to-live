import React from 'react';
import './App.css';
import DataVisualization from './components/DataVisualization';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Where Should I Live?
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="App">
        <DataVisualization />
      </div>
    </ThemeProvider>
  );
}

export default App;