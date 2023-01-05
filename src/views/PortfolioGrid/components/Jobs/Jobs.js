import React, { useState, useEffect, useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import { UserContext } from '../../../../contexts/UserContext';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import { LinkedIn, Instagram, Twitter} from '@mui/icons-material';
import { SocialIcon } from 'react-social-icons';
import { Stack } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
  region: 'us-east-1',
});

const dynamoDb = new AWS.DynamoDB();

let mock = [];

// Call the scan method to retrieve all items from the table
dynamoDb.scan({ TableName: 'users' }, (err, data) => {
  if (err) {
    console.error(err);
    // console.log('unable to scan table. Error JSON');
  } else {
    mock = data.Items;
    // You can now use the 'items' variable to access the table data.
    // console.log(data.Items);
  }
});

const Jobs = () => {
  const theme = useTheme();
  const { user } = useContext(UserContext);
  // console.log(user.hosting);

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
          Host Listing
        </Typography>
        <Box>
          <Typography variant={'body1'} color={'text.secondary'}>
            Here are a list of active hosts. Hosts who toggle their availability
            are shown here. Coming Soon: Filter by school and reach out to them
            via email, Instagram, Twitter, or LinkedIn!{' '}
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item) => (
          <>
            {/* {console.log(item.firstName.S)} */}
            {/* {console.log(item.hosting.BOOL)} */}
            {item.hosting.BOOL ? (
              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                key={item.firstName.S + item.lastName.S}
              >
                <Box
                  display={'block'}
                  width={1}
                  height={1}
                  sx={{
                    textDecoration: 'none',
                    transition: 'all .2s ease-in-out',
                    '&:hover': {
                      transform: `translateY(-${theme.spacing(1 / 2)})`,
                    },
                  }}
                >
                  <Box
                    component={Card}
                    width={1}
                    height={1}
                    // data-aos={'fade-up'}
                    // data-aos-delay={i * 100}
                    // data-aos-offset={100}
                    // data-aos-duration={600}
                    flexDirection={'column'}
                    display={'flex'}
                  >
                    <CardContent
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <Avatar
                        marginBottom={4}
                        variant={'dot'}
                        sx={{
                          borderRadius: '50%',
                          width: 80,
                          height: 80,
                        }}
                        src={item.image.S}
                      />
                      <Typography
                        marginTop={2}
                        variant={'h6'}
                        gutterBottom
                        sx={{ fontWeight: 500 }}
                      >
                        {item.firstName.S} {item.lastName.S}
                      </Typography>
                      <Box display={'flex'} alignItems={'center'}>
                        <Box
                          component={'svg'}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          width={16}
                          height={16}
                          marginRight={1}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </Box>
                        <Typography
                          variant={'subtitle1'}
                          color="text.secondary"
                        >
                          {item.school.S}
                        </Typography>
                      </Box>
                      <Box marginTop={2}>
                        <Typography
                          variant={'subtitle2'}
                          color="text.secondary"
                        >
                          {item.bio.S}
                        </Typography>
                      </Box>
                      <br />
                      <Stack direction="row" spacing={2}>
                        <Button
                          target="_blank"
                          href={'mailto:' + item.username.S}
                        >
                          Email
                        </Button>
                        {item.linkedin.S ? (
                          <a href={item.linkedin.S} target="_blank">
                            <SocialIcon
                              style={{ height: 40, width: 40 }}
                              url={item.linkedin.S}
                            />
                          </a>
                        ) : (
                          ''
                        )}
                        {item.twitter.S ? (
                          <a href={item.twitter.S} target="_blank">
                            <SocialIcon
                              style={{ height: 40, width: 40 }}
                              url={item.twitter.S}
                            />
                          </a>
                        ) : (
                          ''
                        )}
                        {item.instagram.S ? (
                          <a href={item.instagram.S} target="_blank">
                            <SocialIcon
                              style={{ height: 40, width: 40 }}
                              url={item.instagram.S}
                            />
                          </a>
                        ) : (
                          ''
                        )}
                      </Stack>
                    </CardContent>
                  </Box>
                </Box>
              </Grid>
            ) : null}
          </>
        ))}
        {/* <Grid item container justifyContent={'center'} xs={12}>
          <Button
            variant={'contained'}
            size={'large'}
            endIcon={
              <Box
                component={'svg'}
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </Box>
            }
          >
            View all
          </Button>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default Jobs;
