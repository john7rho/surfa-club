import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../../../contexts/UserContext';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

// import shadows from '@mui/material/styles/shadows';
// import * as yup from 'yup';
import AWS from 'aws-sdk';
// import { useFormik } from 'formik';

// import { getUser } from '../../../../utils/Utils.js';

const re =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;

// ONLY USE WITH FORMIK, REMOVED FOR NOW BC VALIDATIONS DONT CONSIDER EMPTY STRINGS
// const validationSchema = yup.object({
//   bio: yup
//     .string()
//     .trim()
//     .min(10, 'Please enter a valid bio')
//     .max(250, 'Please enter a valid bio'),
//   instagram: yup.string().matches(re, 'Please enter a valid URL'),
//   twitter: yup.string().matches(re, 'Please enter a valid URL'),
//   linkedin: yup.string().matches(re, 'Please enter a valid URL'),
// });

AWS.config.update({
  accessKeyId: 'AKIASYSAF2CE6ZODFN6N',
  secretAccessKey: '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',
  region: 'us-east-1',
});

const Hero = () => {
  const { user } = useContext(UserContext);
  // console.log(user.username);
  // console.log(user.school);
  const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

  const [instagram, setInstagram] = useState(null);
  const [twitter, setTwitter] = useState(null);
  const [linkedin, setLinkedin] = useState(null);
  const [bio, setBio] = useState(null);
  const [image, setImage] = useState(null);
  const [hosting, setHosting] = useState(false);

  // const params = {
  //   TableName: 'users',
  //   Key: {
  //     username: { S: user.username },
  //     school: { S: user.school },
  //   },
  //   UpdateExpression: 'SET linkedin = :val1',
  //   ExpressionAttributeValues: {
  //     ':val1': { S: 'www.linkedin.com' },
  //   },
  // };

  // ddb.updateItem(params, function (err, data) {
  //   if (err) {
  //     console.log('Error', err);
  //   } else {
  //     console.log('Success', data);
  //   }
  // });

  // const initialValues = {
  //   instagram: null,
  //   // twitter: null,
  //   // linkedin: null,
  //   // bio: null,
  //   // image: null,
  //   // hosting: false,
  // };

  const handleChange = (event) => {
    setInstagram(event.target.value);
    console.log(instagram);
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    // const keys = Object.keys(initialValues);
    // for (let i = 0; i < keys.length; i++) {
    //   console.log(keys[i]);
    // }

    if (instagram) {
      const params = {
        TableName: 'users',
        Key: {
          username: { S: user.username },
          school: { S: user.school },
        },
        UpdateExpression: 'SET instagram = :val1',
        ExpressionAttributeValues: {
          ':val1': { S: instagram },
        },
      };

      ddb.updateItem(params, function (err, data) {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('Success', data);
        }
      });
    }
  };

  return (
    <div>
      <Typography
        variant="h3"
        color="text.primary"
        align={'center'}
        marginBottom={4}
      >
        Welcome to the Surfa Circle (Beta)
      </Typography>
      <Typography
        marginTop={2}
        marginBottom={2}
        variant="h4"
        sx={{ fontWeight: 'bold' }}
      >
        Account Details
      </Typography>
      {user.verified ? (
        <Typography variant="body2" marginBottom={2}>
          Welcome to the Surfa Circle! Please note some features are still in
          development and may have bugs (email us at help@surfaclub.com if you
          spot anything). Hit the Save Changes button to submit any updates to
          your profile.{' '}
        </Typography>
      ) : (
        <Typography variant="body2" marginBottom={2}>
          Please verify your account to access the full features of the Surfa
          Circle. Upload a photo of your student ID and hit the Save Changes
          button to be verified.
        </Typography>
      )}
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography
            variant="h6"
            marginBottom={2}
            sx={{ color: 'grey' }}
          ></Typography>
          <Avatar
            marginTop={8}
            marginBottom={2}
            src={user.image}
            sx={{ width: '300px', height: '300px' }}
          ></Avatar>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Box marginBottom={4} style={{ boxShadow: 12, border: '1px grey' }}>
              <Grid container spacing={2} xs={12} marginTop={2}>
                <Grid item xs={4}>
                  <Typography
                    variant="body1"
                    marginBottom={1}
                    sx={{ fontWeight: 'bold', float: 'left' }}
                  >
                    Verified Status
                    {user.verified ? (
                      <Avatar
                        marginBottom={2}
                        marginLeft={2}
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Basic_green_dot.png"
                        sx={{
                          width: '20px',
                          height: '20px',
                          marginLeft: '2px',
                          float: 'right',
                        }}
                      ></Avatar>
                    ) : (
                      <Avatar
                        marginBottom={2}
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Basic_red_dot.png"
                        sx={{
                          width: '20px',
                          height: '20px',
                          marginLeft: '2px',
                          float: 'right',
                        }}
                      ></Avatar>
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="body1"
                    marginBottom={1}
                    sx={{ fontWeight: 'bold', color: 'grey', float: 'left' }}
                  >
                    Hosting Status{' '}
                  </Typography>
                  {user.hosting ? (
                    <Avatar
                      marginLeft={2}
                      marginBottom={2}
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Basic_green_dot.png"
                      sx={{
                        width: '20px',
                        height: '20px',
                      }}
                    ></Avatar>
                  ) : (
                    <Avatar
                      marginBottom={2}
                      src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Basic_red_dot.png"
                      sx={{
                        width: '20px',
                        height: '20px',
                        marginLeft: '2px',
                      }}
                    ></Avatar>
                  )}
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="body1"
                    marginBottom={1}
                    sx={{ fontWeight: 'bold', color: 'grey', float: 'left' }}
                  >
                    Student ID
                  </Typography>
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                    style={{
                      color: 'grey',
                      backgroundColor: 'white',
                      width: '20px',
                      height: '20px',
                      marginLeft: '2px',
                    }}
                  >
                    <input hidden accept="image/*" type="file" />
                    <PhotoCamera />
                  </IconButton>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="Change Instagram URL"
                    value={instagram}
                    onChange={handleChange}
                  ></TextField>
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
                  <Button
                    fullWidth
                    justifyContent="flex-right"
                    variant="outlined"
                    style={{ color: 'grey', backgroundColor: 'white' }}
                  >
                    Change Profile Picture
                  </Button>
                </Grid>
                <Grid
                  item
                  justifyContent="flex-right"
                  xs={4}
                  style={{ flex: 1 }}
                >
                  <Button
                    fullWidth
                    justifyContent="flex-right"
                    variant="outlined"
                    style={{ color: 'grey', backgroundColor: 'white' }}
                  >
                    Toggle Availability
                  </Button>
                </Grid>
                <Grid
                  item
                  justifyContent="flex-right"
                  xs={4}
                  style={{ flex: 1 }}
                >
                  <Button
                    fullWidth
                    justifyContent="flex-right"
                    onClick={handleSubmit}
                  >
                    Save Changes
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
