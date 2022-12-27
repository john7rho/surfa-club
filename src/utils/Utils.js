const AWS = require('aws-sdk');
const s3 = new AWS.S3({
  accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY,
});

/**
 * Gives the url of a object in s3
 * @param {string} path name of object
 */
export const getObjectUrl = async (path) => {
  s3.getSignedUrl(
    'getObject',
    {
      Bucket: 'surfaclub',
      Key: path,
    },
    (err, url) => {
      if (err) {
        throw Error;
      } else {
        return url;
      }
    },
  );
};

/**
 * uploads file object to s3
 * @param {File} file
 */
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

/**
 * Registers user and dumps into dynamodb
 * @param {string} username
 * @param {string} password
 * @param {string} school
 * @param {string} imageUrl
 */
export const register = async ({ username, password, school, imageUrl }) => {
  const endpoint =
    'https://70tigy27h2.execute-api.us-east-1.amazonaws.com/prod/register';

  const searchParams = new URLSearchParams();
  searchParams.set('username', username);
  searchParams.set('password', password);
  searchParams.set('school', school);
  searchParams.set('image', imageUrl);

  fetch(`${endpoint}?${searchParams}`)
    .then(() => console.log('do something when registration succeeds'))
    .catch(() => console.log('registration failed '));
};

export const store_email = async (email) => {
  const endpoint =
    'https://70tigy27h2.execute-api.us-east-1.amazonaws.com/prod/email';

  const searchParams = new URLSearchParams();
  searchParams.set('email', email);

  fetch(`${endpoint}?${searchParams}`)
    .then(() => console.log('successfully stored email'))
    .catch(() => console.log('registration failed '));
};
