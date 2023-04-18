import { CssBaseline, ThemeProvider } from '@mui/material';
import LandingPage from './components/LandingPage.jsx';
import { theme } from './theme/index';
import './App.css'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPage />
    </ThemeProvider>
  );
}
