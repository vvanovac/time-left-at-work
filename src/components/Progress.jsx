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
        color={theme.palette.text[theme.palette.mode].primary}
        sx={{
          marginTop: 2,
          marginBottom: 4,
          fontSize: {
            xs: 36,
            sm: 40,
            md: 48,
          },
        }}
      >
        Elapsed Time
      </Typography>
      <LinearProgress
        variant="determinate"
        value={80}
        color="primary"
        sx={{
          width: '100%',
          height: {
            xs: 48,
            sm: 56,
            md: 64,
            lg: 72,
          },
          borderRadius: `${theme.shape.borderRadius * 7}px`,
        }}
      />
    </Box>
  );
}
