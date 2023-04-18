import { Box, useTheme } from '@mui/material';
import Header from './Header.jsx';
import MainContainer from './MainContainer.jsx';
import Progress from './Progress.jsx';

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
      <MainContainer>
        <Progress />
      </MainContainer>
    </Box>
  );
}
