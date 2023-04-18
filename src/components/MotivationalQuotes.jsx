import { Box } from '@mui/material';

export default function MotivationalQuotes() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 3,
      }}
    >
      This should be a random motivational quote.
      <br/>
      If current time is in working hours -> show progress bar
      <br/>
      If current time is outside of working hours -> show huge message
      <br/>
      Message could use weather API with appropriate message like:
      <br/>
      ‣ It's a sunny day, go have a beer!
      <br/>
      ‣ It's a raining day, but still you should enjoy it! Knock yourself out with your favourite Netflix series.
      <br/>
      ‣ Ideally we have an option to generate new motivational message
    </Box>
  );
}
