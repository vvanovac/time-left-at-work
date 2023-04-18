import { AppBar, Box, Button, useTheme } from '@mui/material';

const APP_BAR_HEIGHT = 75;
const BUTTONS_HEIGHT = 45;

export default function Header() {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        background: theme.palette.background[theme.palette.mode].default,
        boxShadow: 2,
        height: APP_BAR_HEIGHT,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          height: APP_BAR_HEIGHT,
          marginX: 2,
        }}
      >
        <Box fontSize="3rem">
          &#8987;
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ height: BUTTONS_HEIGHT }}
          >
            Hours Settings
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{ height: BUTTONS_HEIGHT }}
          >
            Theme Settings
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
}
