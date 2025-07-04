import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: { main: '#dc2626' },
          background: { default: '#fdfdfd', paper: '#fff' },
        }
      : {
          primary: { main: '#f87171' },
          background: { default: '#121212', paper: '#1e1e1e' },
        }),
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

export const getTheme = (mode) => createTheme(getDesignTokens(mode));
