const fs = require('fs');
const AWS = require('aws-sdk');
require('dotenv').config();

const s3 = new AWS.S3({
  accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY,
});

export const fileUpload = async (file) => {
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

export const register = async ({ username, password, school }) => {
  const endpoint =
    'https://70tigy27h2.execute-api.us-east-1.amazonaws.com/prod/register';

  const searchParams = new URLSearchParams();
  searchParams.set('username', username);
  searchParams.set('password', password);
  searchParams.set('school', school);

  fetch(`${endpoint}?${searchParams}`)
    .then(() => console.log('do something when registration succeeds'))
    .catch(() => console.log('registration failed '));
};
