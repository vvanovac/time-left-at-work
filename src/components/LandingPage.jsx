import { Box, useTheme } from '@mui/material';
import Progress from './Progress.jsx';
import Header from './Header.jsx';

export default function LandingPage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: theme.palette.background[theme.palette.mode].paper,
      }}
    >
      <Header />
      <Progress />
    </Box>
  );
}
