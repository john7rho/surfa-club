import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// import shadows from '@mui/material/styles/shadows';

const Hero = () => {
  return (
    <Box>
      <Box marginBottom={4} style={{ boxShadow: 12, border: '1px grey' }}>
        <Typography
          variant="h3"
          color="text.primary"
          align={'center'}
          sx={{
            fontWeight: 700,
          }}
        >
          Welcome to the Surfa Circle
        </Typography>
        <Typography marginTop={2} variant="h5">
          Account Details
        </Typography>
        <Grid container spacing={2} xs={12} marginTop={2}>
          <Grid item xs={4}>
            <Typography variant="body1" marginBottom={1}>
              Your Profile
            </Typography>
            <Avatar marginBottom={2}></Avatar>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" marginBottom={1}>
              Verified Status
            </Typography>
            <Avatar marginBottom={2}></Avatar>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" marginBottom={1}>
              Toggle Availability
            </Typography>
            <Avatar marginBottom={2}></Avatar>
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Change Instagram URL"></TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Change Twitter URL"></TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Change LinkedIn URL"></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Change bio"></TextField>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item justifyContent="flex-right" xs={4} style={{ flex: 1 }}>
            <Button fullWidth justifyContent="flex-right">
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
