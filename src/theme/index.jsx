import { createTheme } from '@mui/material';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  palette: {
    mode: 'dark',
    background: {
      dark: {
        paper: '#1B2636',
        default: '#1E293B',
      },
      light: {
        paper: '#D7DFEA',
        default: '#E2E8F0',
      },
    },
    divider: {
      dark: '#E2E8F0',
      light: '#1E293B',
    },
    primary: {
      main: '#00DC86',
      dark: '#00CC7E',
      light: '#00F597',
      contrastText: '#000000',
    },
    secondary: {
      main: '#FED700',
      dark: '#F5D000',
      light: '#FFDD1F',
      contrastText: '#000000',
    },
    colorBlind: {
      primary: {
        main: '#6A93FE',
        dark: '#5D8AFE',
        light: '#85A8FE',
        contrastText: '#000000',
      },
      secondary: {
        main: '#FF9027',
        dark: '#FF8B1F',
        light: '#FFA047',
        contrastText: '#000000',
      },
    },
    text: {
      primary: '#CCD6E5',
      secondary: '#7892BA',
      disabled: '#F2F4F8',
    }
  },
});
