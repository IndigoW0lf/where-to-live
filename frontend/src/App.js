// frontend/src/App.js
import React from 'react';
import './App.css';
import DataVisualization from './components/DataVisualization';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My Data Visualization App</h1>
        </header>
        <DataVisualization />
      </div>
    </ThemeProvider>
  );
}

export default App;
