import axios from 'axios';

// import axios from 'axios';
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
  region: 'us-east-1',
});

/**
 * gets object from s3 bucket at specified path
 */
export const getObjectUrl = async (path) => {
  return new Promise((resolve, reject) => {
    s3.getSignedUrl(
      'getObject',
      {
        Bucket: 'surfaclub',
        Key: path,
      },
      (err, url) => {
        if (err) {
          reject(err);
        }
        resolve(url);
      },
    );
  });
};

/**
 * uploads file object to s3
 */
export const fileUpload = async (file) => {
  console.log(process.env.REACT_APP_AWS_SECRET_KEY);

  s3.putObject(
    {
      Body: file,
      Bucket: 'surfaclub',
      Key: file.name,
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    },
  );
};

/**
 * creates a user object and adds to users table; returns false if user already exists
 */
export const register = async ({
  username,
  password,
  firstName,
  lastName,
  instagram,
  twitter,
  linkedin,
  image,
}) => {
  const endpoint =
    'https://70tigy27h2.execute-api.us-east-1.amazonaws.com/prod/register';
  const searchParams = new URLSearchParams();
  searchParams.set('username', username);
  searchParams.set('firstName', firstName);
  searchParams.set('lastName', lastName);
  searchParams.set('password', password);
  searchParams.set('instagram', instagram);
  searchParams.set('twitter', twitter);
  searchParams.set('linkedin', linkedin);
  searchParams.set('image', image);

  const success = await axios
    .post(`${endpoint}?${searchParams}`)
    .then((res) => res.status != 404)
    .catch(() => false);
  return success;
};

/**
 * returns whether a username and password is valid
 */
export const validate = async ({ username, password }) => {
  const endpoint =
    'https://70tigy27h2.execute-api.us-east-1.amazonaws.com/prod/validate';

  const searchParams = new URLSearchParams();
  searchParams.set('username', username);
  searchParams.set('password', password);

  const valid = await fetch(`${endpoint}?${searchParams}`)
    .then((res) => res.status != 404)
    .catch(() => false);

  return valid;
};

/**
 * gets user object with specified username in users table
 */
export const getUser = async ({ username }) => {
  const endpoint =
    'https://70tigy27h2.execute-api.us-east-1.amazonaws.com/prod/user';
  const searchParams = new URLSearchParams();
  searchParams.set('username', username);
  const user = await fetch(`${endpoint}?${searchParams}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch(() => null);
  return user;
};

export const updateUser = async ({ username, attribute, value }) => {
  const endpoint =
    'https://70tigy27h2.execute-api.us-east-1.amazonaws.com/prod/user';
  const searchParams = new URLSearchParams();
  searchParams.set('username', username);
  searchParams.set('attribute', attribute);
  searchParams.set('value', value);

  axios.post(`${endpoint}?${searchParams}`);
};

/**
 * stores email in email table
 */
export const store_email = async (email) => {
  const endpoint =
    'https://70tigy27h2.execute-api.us-east-1.amazonaws.com/prod/email';

  const searchParams = new URLSearchParams();
  searchParams.set('email', email);

  fetch(`${endpoint}?${searchParams}`)
    .then(() => console.log('successfully stored email'))
    .catch(() => console.log('registration failed '));
};

/**
 * sends email to specified email
 */
export const send_email = async (email) => {
  const endpoint =
    'https://70tigy27h2.execute-api.us-east-1.amazonaws.com/prod/email'; // change this to send email

  const searchParams = new URLSearchParams();
  searchParams.set('sender', 'help@surfaclub.com');
  searchParams.set('recipient', email);

  const success = await axios
    .post(`${endpoint}?${searchParams}`)
    .then((res) => res.status != 404)
    .catch(() => false);

  return success;
};
