import { Box, LinearProgress, Typography, useTheme } from '@mui/material';

export default function Progress() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h3"
        color={theme.palette.text.primary}
        sx={{
          marginTop: 8,
          marginBottom: 2,
          fontSize: {
            xs: 36,
            sm: 40,
            md: 48,
            lg: 48,
          },
        }}
      >
        Working Hours progress
      </Typography>
      <LinearProgress
        variant="determinate"
        value={80}
        color="primary"
        sx={{
          width: {
            xs: '90%',
            md: '80%',
            lg: '75%',
          },
          height: {
            xs: 48,
            sm: 56,
            md: 64,
            lg: 72,
          },
          borderRadius: 7,
        }}
      />
    </Box>
  );
}
