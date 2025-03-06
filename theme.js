import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Tema escuro por padrão
    primary: {
      main: '#90caf9', // Azul claro
    },
    secondary: {
      main: '#f48fb1', // Rosa claro
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
  },
});

export default theme;
