import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// import shadows from '@mui/material/styles/shadows';
import * as yup from 'yup';
import AWS from 'aws-sdk';
import { getUser } from '../../../../utils/Utils.js';

const re =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;

const validationSchema = yup.object({
  bio: yup
    .string()
    .trim()
    .min(10, 'Please enter a valid bio')
    .max(250, 'Please enter a valid bio'),
  instagram: yup.string().matches(re, 'Please enter a valid URL'),
  twitter: yup.string().matches(re, 'Please enter a valid URL'),
  linkedin: yup.string().matches(re, 'Please enter a valid URL'),
});

AWS.config.update({
  accessKeyId: 'AKIASYSAF2CE6ZODFN6N',
  secretAccessKey: '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',
  region: 'us-east-1',
});

// const dynamoDb = new AWS.DynamoDB();

// let mock = [];

// Call the scan method to retrieve all items from the table
// dynamoDb.scan({ TableName: 'users' }, (err, data) => {
//   if (err) {
//     console.error(err);
//     console.log('unable to scan table. Error JSON');
//   } else {
//     mock = data.Items;
//     // You can now use the 'items' variable to access the table data
//     console.log(mock);
//     console.log('successfully scanned table for hero.js.');
//   }
// });

// const [value, setValue] = useState('');

// useEffect(() => {
//   const storedValue = localStorage.getItem('username');
//   if (storedValue) {
//     setValue(storedValue);
//   }
// }, []);

// Set up the parameters for the query

const Hero = () => {
  // const [value, setValue] = useState('');
  const [user, setUser] = useState('');

  const email = localStorage.getItem('username');
  // console.log(email);
  // console.log(getUser(localStorage.getItem('username')));

  const returnUser = async () => {
    let temp = await getUser({ username: email });
    console.log(temp);
    console.log(temp.image);
    setUser(temp);
  };

  returnUser();

  // useEffect(() => {
  //   const storedValue = localStorage.getItem('username');
  //   if (storedValue) {
  //     setValue(storedValue);
  //   }
  //   console.log(value);
  // }, []);

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
            <Avatar marginBottom={2} src={user.image}></Avatar>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" marginBottom={1}>
              Verified Status
            </Typography>
            <Avatar marginBottom={2}></Avatar>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" marginBottom={1}>
              Hosting Status (Available/Unavailable)
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
          <Grid item xs={4}>
            <Button fullWidth justifyContent="flex-right">
              Change Profile Picture
            </Button>
          </Grid>
          <Grid item justifyContent="flex-right" xs={4} style={{ flex: 1 }}>
            <Button fullWidth justifyContent="flex-right">
              Toggle Availability
            </Button>
          </Grid>
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
