import { Box, useTheme } from '@mui/material';

export default function MainContainer({ children }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 8,
      }}
    >
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: `${theme.shape.borderRadius}px`,
          backgroundColor: theme.palette.background[theme.palette.mode].default,
          height: '50vh',
          width: '90%',
          maxWidth: 1150,
          paddingTop: 2,
          paddingBottom: 1,
          paddingX: 3,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
