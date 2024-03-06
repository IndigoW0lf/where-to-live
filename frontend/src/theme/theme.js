// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffb5a7',
    },
    secondary: {
      main: '#b0c4b1',
    },
    accent: {
      main: '#f67280',
    },
    background: {
      default: '#f8edeb',
      paper: '#ffffff',
    },
    text: {
      primary: '#4a5759',
      secondary: '#6e8385',
    },
  },
});

export default theme;
