/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { store_email } from '../../../../utils/Utils.js';

const Subscription = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const [email, setEmail] = useState('');
  const [buttonText, setButtonText] = useState('Subscribe');

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonText('Subscribe');
    }, 1000);
    return () => clearTimeout(timer);
  }, [buttonText]);

  return (
    <Box>
      <Box component={Card} boxShadow={4} paddingY={3}>
        <CardContent>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box marginBottom={4}>
              <Typography
                variant="h4"
                align={'center'}
                data-aos={'fade-up'}
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                Join the wave
              </Typography>
              <Typography
                variant="h6"
                align={'center'}
                color={'text.secondary'}
                data-aos={'fade-up'}
              >
                Stay up to date with the latest news and updates.
              </Typography>
            </Box>
            <Box
              width={1}
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              justifyContent={'center'}
            >
              <FormControl
                fullWidth
                variant="outlined"
                sx={{ maxWidth: { xs: 1, sm: 400 }, width: 1 }}
              >
                <OutlinedInput
                  placeholder="Enter your email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </FormControl>
              <Box
                onClick={() => {
                  store_email(email);
                  setButtonText('Subscribed!');
                }}
                component={Button}
                variant="contained"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ sm: 2 }}
                height={54}
                endIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width={24}
                    height={24}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                }
              >
                {buttonText}
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Box>
  );
};

export default Subscription;
