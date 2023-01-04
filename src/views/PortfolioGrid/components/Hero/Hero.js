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
import {
  fileUpload,
  getObjectUrl,
  updateUser,
} from '../../../../utils/Utils.js';

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
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
  region: 'us-east-1',
});

console.log(process.env.REACT_APP_AWS_ACCESS_KEY);
console.log(process.env.REACT_APP_AWS_SECRET_KEY);

const Hero = () => {
  const { user } = useContext(UserContext);

  const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

  const [instagram, setInstagram] = useState(null);
  const [twitter, setTwitter] = useState(null);
  const [linkedin, setLinkedin] = useState(null);
  const [bio, setBio] = useState(null);
  const [image, setImage] = useState(null);
  const [hosting, setHosting] = useState(null); // this is just a flag, find a better way to do this
  const [file, setFile] = useState(null); // student id

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleChangeInstagram = (event) => {
    setInstagram(event.target.value);
  };

  const handleChangeTwitter = (event) => {
    setTwitter(event.target.value);
  };

  const handleChangeLinkedin = (event) => {
    setLinkedin(event.target.value);
  };

  const handleChangeBio = (event) => {
    setBio(event.target.value);
  };

  const handleChangeHosting = async () => {
    if (hosting == null) {
      const params = {
        TableName: 'users',
        Key: {
          username: { S: user.username },
          school: { S: user.school },
        },
        UpdateExpression: 'SET hosting = :val1',
        ExpressionAttributeValues: {
          ':val1': { BOOL: !user.hosting },
        },
      };

      await ddb.updateItem(params, function (err, data) {
        if (err) {
          // console.log('Error', err);
        } else {
          // console.log('Success', data);
          setHosting(!user.hosting);
          // console.log('truth ' + !user.hosting);
          // console.log('flag ' + hosting);
        }
      });
    } else {
      const params = {
        TableName: 'users',
        Key: {
          username: { S: user.username },
          school: { S: user.school },
        },
        UpdateExpression: 'SET hosting = :val1',
        ExpressionAttributeValues: {
          ':val1': { BOOL: !hosting },
        },
      };

      await ddb.updateItem(params, function (err, data) {
        if (err) {
          // console.log('Error', err);
        } else {
          // console.log('Success', data);
          setHosting(!hosting);
          // console.log('truth ' + user.hosting);
          // console.log('flag ' + hosting);
        }
      });
    }
  };

  const handleSubmit = async (event) => {
    // event.preventDefault();
    let params = [];

    // instagram
    if (instagram) {
      params = {
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
          // console.log('Error', err);
        } else {
          // console.log('Success', data);
        }
      });
    }

    // twitter
    if (twitter) {
      params = {
        TableName: 'users',
        Key: {
          username: { S: user.username },
          school: { S: user.school },
        },
        UpdateExpression: 'SET twitter = :val1',
        ExpressionAttributeValues: {
          ':val1': { S: twitter },
        },
      };

      ddb.updateItem(params, function (err, data) {
        if (err) {
          // console.log('Error', err);
        } else {
          // console.log('Success', data);
        }
      });
    }

    // linkedin
    if (linkedin) {
      params = {
        TableName: 'users',
        Key: {
          username: { S: user.username },
          school: { S: user.school },
        },
        UpdateExpression: 'SET linkedin = :val1',
        ExpressionAttributeValues: {
          ':val1': { S: linkedin },
        },
      };

      ddb.updateItem(params, function (err, data) {
        if (err) {
          // console.log('Error', err);
        } else {
          // console.log('Success', data);
        }
      });
    }

    // bio
    if (bio) {
      params = {
        TableName: 'users',
        Key: {
          username: { S: user.username },
          school: { S: user.school },
        },
        UpdateExpression: 'SET bio = :val1',
        ExpressionAttributeValues: {
          ':val1': { S: bio },
        },
      };

      ddb.updateItem(params, function (err, data) {
        if (err) {
          // console.log('Error', err);
        } else {
          // console.log('Success', data);
        }
      });
    }

    // image
    if (file) {
      await fileUpload(file);
      const imageUrl = await getObjectUrl(file.name);
      updateUser({
        username: user.username,
        attribute: 'studentId',
        value: imageUrl,
      });
    }
    // hosting
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
        <>
          <Typography variant="body1" color={'text.secondary'} marginBottom={2}>
            Welcome to the Surfa Circle! Please note some features are still in
            development and may have bugs (email us at help@surfaclub.com if you
            spot anything). Hit the Save Changes button to submit any updates to
            your profile.{' '}
          </Typography>
          <Typography
            variant="body1"
            color={'text.secondary'}
            marginBottom={2}
            fontWeight={'bold'}
          >
            For link updates, please input the full URL with the HTTPS in the
            beginning.{' '}
          </Typography>
        </>
      ) : (
        <Typography variant="body1" color={'text.secondary'} marginBottom={2}>
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
                  {hosting == true ? (
                    <Avatar
                      marginLeft={2}
                      marginBottom={2}
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Basic_green_dot.png"
                      sx={{
                        width: '20px',
                        height: '20px',
                      }}
                    ></Avatar>
                  ) : hosting == false ? (
                    <Avatar
                      marginBottom={2}
                      src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Basic_red_dot.png"
                      sx={{
                        width: '20px',
                        height: '20px',
                        marginLeft: '2px',
                      }}
                    ></Avatar>
                  ) : hosting == null ? (
                    <>
                      {user.hosting == true ? (
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
                    </>
                  ) : null}
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="body1"
                    marginBottom={1}
                    sx={{ fontWeight: 'bold', color: 'grey', float: 'left' }}
                  >
                    Student ID <br /> {file ? file.name : ''}
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
                  <TextField
                    fullWidth
                    label="Change Instagram URL"
                    value={instagram}
                    onChange={handleChangeInstagram}
                  ></TextField>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="Change Twitter URL"
                    value={twitter}
                    onChange={handleChangeTwitter}
                  ></TextField>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    label="Change LinkedIn URL"
                    value={linkedin}
                    onChange={handleChangeLinkedin}
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Change bio"
                    value={bio}
                    onChange={handleChangeBio}
                  ></TextField>
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
                    onClick={handleChangeHosting}
                  >
                    Toggle Hosting
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
