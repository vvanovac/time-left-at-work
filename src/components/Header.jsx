import { useState } from 'react';
import { AppBar, Box, Button, Modal, useTheme } from '@mui/material';
import ThemeSettings from './ThemeSettings.jsx';

const APP_BAR_HEIGHT = 75;
const BUTTONS_HEIGHT = 45;

export default function Header() {
  const theme = useTheme();

  const [ openThemeSettingsModal, setOpenThemeSettingsModal ] = useState(false);

  const handleOpenThemeSettingsModal = () => setOpenThemeSettingsModal(true);

  const handleCloseThemeSettingsModal = () => setOpenThemeSettingsModal(false);

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
            onClick={handleOpenThemeSettingsModal}
          >
            Theme Settings
          </Button>
        </Box>
      </Box>
      <Modal
        open={openThemeSettingsModal}
        onClose={handleCloseThemeSettingsModal}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '90%',
            maxWidth: 600,
            backgroundColor: theme.palette.background[theme.palette.mode].default,
            borderRadius: `${theme.shape.borderRadius}px`,
            p: 3,
          }}
        >
          <ThemeSettings />
        </Box>
      </Modal>
    </AppBar>
  );
}
