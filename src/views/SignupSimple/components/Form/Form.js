/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { register } from '../../../../utils/Utils.js';
import { useNavigate } from 'react-router-dom';
import { S3 } from 'aws-sdk';

// import UploadAWS from '../UploadAWS/UploadAWS.js';

const re =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;

const validationSchema = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your first name'),
  lastName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your last name'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  password: yup
    .string()
    .required('Please specify your password')
    .min(8, 'The password should have at minimum length of 8'),
  // instagram: yup.string().matches(re, 'Please enter a valid URL'),
  // twitter: yup.string().matches(re, 'Please enter a valid URL'),
  // linkedin: yup.string().matches(re, 'Please enter a valid URL'),
});

const Form = () => {
  const [error, setError] = useState('No photo uploaded');
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  // const [username, setUsername] = useState('');

  // useEffect(() => {
  //   const storedUsername = localStorage.getItem('username');
  //   if (storedUsername) {
  //     setUsername(storedUsername);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('username', username);
  // }, [username]);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    instagram: '',
    twitter: '',
    linkedin: '',
  };

  const onSubmit = async (values) => {
    const {
      firstName,
      lastName,
      email,
      password,
      instagram,
      twitter,
      linkedin,
    } = values;
    const body = {
      username: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      instagram: instagram,
      twitter: twitter,
      linkedin: linkedin,
      image:
        'https://surfaprofilepicture.s3.amazonaws.com/' +
        file?.name.replace(' ', '_'),
    };

    const success = await register(body);

    if (success === true) {
      setError(false);
      localStorage.setItem('username', email);
      navigate('/portfolio-grid');
    } else {
      setError(true);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    // handleSubmit(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file');
      return;
    }

    const fileName = file.name.replace(' ', '_');
    const fileType = file.type;

    const s3 = new S3({
      accessKeyId: 'AKIASYSAF2CE6ZODFN6N',
      secretAccessKey: 'IAp+KDt2rOmAL3Woz6lNKeB9sPsPz/gX0Hp8GpsB',
      region: 'us-east-1',
      //   TODO: hide these later
    });

    const params = {
      Bucket: 'surfaprofilepicture',
      Key: fileName,
      ContentType: fileType,
      ACL: 'public-read',
      Body: file,
    };

    s3.upload(params, (err, data) => {
      if (err) {
        // console.log(err);
        setError(err.message);
      } else {
        // console.log(data);
      }
    });

    setError('Uploaded!');
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
          Signup
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          Create an account
        </Typography>
        <Typography color="text.secondary">
          Fill out the form to get started.
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Enter your first name
            </Typography>
            <TextField
              label="First name *"
              variant="outlined"
              name={'firstName'}
              fullWidth
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Enter your last name
            </Typography>
            <TextField
              label="Last name *"
              variant="outlined"
              name={'lastName'}
              fullWidth
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Enter your college email (e.g., tigerwoods@college.edu)
            </Typography>
            <TextField
              label="Email *"
              variant="outlined"
              name={'email'}
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Enter your password (we strongly encourage you to use a strong,
              unique password!)
            </Typography>
            <TextField
              label="Password *"
              variant="outlined"
              name={'password'}
              type={'password'}
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Instagram link (optional)
            </Typography>
            <TextField
              label="Instagram Link"
              variant="outlined"
              name={'instagram'}
              type={'instagram'}
              fullWidth
              value={formik.values.instagram}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              Twitter link (optional)
            </Typography>
            <TextField
              label="Twitter Link"
              variant="outlined"
              name={'twitter'}
              type={'twitter'}
              fullWidth
              value={formik.values.twitter}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant={'subtitle2'} sx={{ marginBottom: 2 }}>
              LinkedIn link (optional)
            </Typography>
            <TextField
              label="LinkedIn link"
              variant="outlined"
              name={'linkedin'}
              type={'linkedin'}
              fullWidth
              value={formik.values.linkedin}
              onChange={formik.handleChange}
            />
            <Typography
              variant={'subtitle2'}
              sx={{ marginTop: 2, marginBottom: 2 }}
            >
              Upload a profile picture
            </Typography>
            {/* <UploadAWS label={formik.values.image}></UploadAWS> */}
            <div label={file?.name}>
              <Button variant="contained" component="label">
                Pick Photo
                <input
                  accept="image/*"
                  type="file"
                  hidden
                  onChange={handleChange}
                />
              </Button>
              {/* <Typography>{file?.name}</Typography> */}
              {/* <TextField value={formik.values.image}>{file?.name}</TextField> */}
              <Button
                onClick={handleSubmit}
                style={{ marginLeft: '4px', backgroundColor: 'black' }}
              >
                Click to upload
              </Button>
              <Typography variant={'body2'}>
                {error ? <p style={{ color: 'blue' }}>{error}</p> : null}
              </Typography>
            </div>
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
                <Typography variant={'subtitle2'}>
                  Already have an account?{' '}
                  <Link
                    component={'a'}
                    color={'primary'}
                    href={'/signin-simple'}
                    underline={'none'}
                  >
                    Login.
                  </Link>
                </Typography>
              </Box>
              <Button size={'large'} variant={'contained'} type={'submit'}>
                Sign up
              </Button>
            </Box>
            {error != 'No photo uploaded' ? (
              <Typography
                variant={'subtitle2'}
                sx={{ color: 'red', margin: 'auto', marginBottom: 2 }}
              >
                Something went wrong with your registration
              </Typography>
            ) : (
              ''
            )}
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Typography
              variant={'subtitle2'}
              color={'text.secondary'}
              align={'center'}
            >
              By clicking "Sign up" button you agree with our{' '}
              <Link
                component={'a'}
                color={'primary'}
                href={'/company-terms'}
                underline={'none'}
              >
                company terms and conditions.
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
