import { useState } from 'react';
import { S3 } from 'aws-sdk';
import Button from '@material-ui/core/Button';
// import axios from 'axios';
import Typography from '@material-ui/core/Typography';

const UploadAWS = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  //   const register = async ({ image }) => {
  //     const endpoint =
  //       'https://70tigy27h2.execute-api.us-east-1.amazonaws.com/prod/register';
  //     const searchParams = new URLSearchParams();
  //     searchParams.set('image', image);
  //     console.log(image);

  //     const success = await axios
  //       .post(`${endpoint}?${searchParams}`)
  //       .then((res) => res.status != 404)
  //       .catch(() => false);
  //     return success;
  //   };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
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
        console.log(err);
        setError(err.message);
      } else {
        console.log(data);
      }
    });
  };

  return (
    <div label={file?.name}>
      <Button variant="contained" component="label">
        Pick Photo
        <input accept="image/*" type="file" hidden onChange={handleChange} />
        {error ? <p>{error}</p> : null}
      </Button>
      <Typography>{file?.name}</Typography>
      <Button onClick={handleSubmit}>Click to Upload</Button>
    </div>
  );
};

export default UploadAWS;
