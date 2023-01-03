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
import { fileUpload } from '../../../../utils/Utils.js';

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

const Hero = () => {
  const { user } = useContext(UserContext);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const handleFileUpload = () => {
    console.log('uploading file');
    fileUpload(file);
  };

  return (
    <div>
      <Typography
        variant="h3"
        color="text.primary"
        align={'center'}
        marginBottom={4}
      >
        Welcome to the Surfa Circle
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
          Welcome to the Surfa Circle! Hit the Save Changes button to submit any
          updates to your profile.{' '}
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
                        src="https://www.citypng.com/public/uploads/preview/png-red-round-close-x-icon-31631915146jpppmdzihs.png"
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
                      src="https://www.citypng.com/public/uploads/preview/png-red-round-close-x-icon-31631915146jpppmdzihs.png"
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
                    onClick={handleFileUpload}
                  >
                    <input
                      hidden
                      accept="image/*"
                      type="file"
                      onChange={(event) => handleFileChange(event)}
                    />
                    <PhotoCamera />
                  </IconButton>
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
                  <Button fullWidth justifyContent="flex-right">
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
