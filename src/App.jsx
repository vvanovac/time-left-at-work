import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme/index';
import './App.css'

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}
