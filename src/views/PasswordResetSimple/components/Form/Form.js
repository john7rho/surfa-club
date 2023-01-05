/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { send_email } from '../../../../utils/Utils.js';
import { ConnectingAirportsOutlined } from '@mui/icons-material';

const Form = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    send_email(email);
  };

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'text.secondary'}
        >
          Recover account
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          Forgot your password?
        </Typography>
        <Typography color="text.secondary">
          Enter your email address below and we'll get you back on track. For
          any help, please contact help@surfaclub.com!
          {/* TIP: this is the main one that we are using */}
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
            Enter your email
          </Typography>
          <TextField
            label="Email *"
            variant="outlined"
            onChange={(event) => handleEmailChange(event)}
            style={{ width: '100%' }}
          />
        </Grid>
        <Grid item container xs={12}>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'center' }}
            justifyContent={'space-between'}
            width={1}
            maxWidth={600}
            margin={'0 auto'}
          >
            <Box marginBottom={{ xs: 1, sm: 0 }}>
              <Button
                size={'large'}
                variant={'outlined'}
                component={Link}
                href={'/signin-simple'}
                fullWidth
              >
                Back to login
              </Button>
            </Box>
            <Button size={'large'} variant={'contained'} onClick={handleSubmit}>
              Send reset link!
            </Button>
            {/* TIP: This is the main one */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;
