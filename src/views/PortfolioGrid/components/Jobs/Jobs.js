import React from 'react';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import { LinkedIn, Instagram, Twitter} from '@mui/icons-material';
import { SocialIcon } from 'react-social-icons';
import { Stack } from '@mui/system';

const mock = [
  {
    imageUrl:
      'https://shreyjoshi.com/resources/me.png',
    title: 'Harvard University',
    name: 'Shrey Joshi',
    type: 'Full time',
    location: 'Harvard University',
    bio: 'Hey y\'all! Excited to host people for any hackathons or conferences and meet new people.',
    linkedin: 'https://www.linkedin.com/in/sjoshi1729/',
    instagram: 'https://www.instagram.com/shreyj1729/',
    twitter: 'https://twitter.com/ShreyJ1729',
  },
  {
    imageUrl:
      'https://shreyjoshi.com/resources/me.png',
    title: 'Harvard University',
    name: 'Shrey Joshi',
    type: 'Full time',
    location: 'Harvard University',
    bio: 'Hey y\'all! Excited to host people for any hackathons or conferences and meet new people.',
    linkedin: 'https://www.linkedin.com/in/sjoshi1729/',
    instagram: 'https://www.instagram.com/shreyj1729/',
    twitter: 'https://twitter.com/ShreyJ1729',
  },
  {
    imageUrl:
      'https://shreyjoshi.com/resources/me.png',
    title: 'Harvard University',
    name: 'Shrey Joshi',
    type: 'Full time',
    location: 'Harvard University',
    bio: 'Hey y\'all! Excited to host people for any hackathons or conferences and meet new people.',
    linkedin: 'https://www.linkedin.com/in/sjoshi1729/',
    instagram: 'https://www.instagram.com/shreyj1729/',
    twitter: 'https://twitter.com/ShreyJ1729',
  },
  {
    imageUrl:
      'https://shreyjoshi.com/resources/me.png',
    title: 'Harvard University',
    name: 'Shrey Joshi',
    type: 'Full time',
    location: 'Harvard University',
    bio: 'Hey y\'all! Excited to host people for any hackathons or conferences and meet new people.',
    linkedin: 'https://www.linkedin.com/in/sjoshi1729/',
    instagram: 'https://www.instagram.com/shreyj1729/',
    twitter: 'https://twitter.com/ShreyJ1729',
  },
];
const Jobs = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
          Host Listing
        </Typography>
        <Box>
          <Typography variant={'h6'} color={'text.secondary'}>
            We get thousands of job postings weekly, but only accept the
            openings at the top companies.{' '}
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={4} md={3} key={i}>
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
                sx={
                  {
                    // '&:hover': {
                    // borderRight: `${theme.spacing(1 / 2)} solid ${item.color}`,
                    // },
                  }
                }
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  {/* <Box
                    padding={1 / 2}
                    marginBottom={2}
                    bgcolor={item.color}
                    borderRadius={2}
                  >
                    <Typography
                      variant={'caption'}
                      align={'center'}
                      sx={{ color: theme.palette.common.white }}
                    >
                      {item.title}
                    </Typography>
                  </Box> */}
                  <Box
                    component="img"
                    sx={{
                      width: '50%',
                      borderRadius: '50%'
                    }}
                    src={item.imageUrl}
                  />
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                  >
                    {item.name}
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
                    <Typography variant={'subtitle1'} color="text.secondary">
                      {item.location}
                    </Typography>
                  </Box>
                  <Box marginTop={2}>
                  <Typography variant={'subtitle2'} color="text.secondary">
                      {item.bio}
                    </Typography>
                    </Box>
                  {/* <Box display={'flex'} alignItems={'center'}>
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </Box> */}
                  {/* <Typography variant={'subtitle2'} color="text.secondary">
                      {item.type}
                    </Typography> */}
                  {/* </Box> */}
                  <br />
                  <Stack direction="row" spacing={2}>
                    <a href={item.linkedin} target="_blank">
                      <SocialIcon
                      style={{ height: 40, width: 40 }}
                      url={item.linkedin}
                      />
                    </a>
                    <a href={item.twitter} target="_blank">
                      <SocialIcon
                      style={{ height: 40, width: 40 }}
                      url={item.twitter}
                      />
                    </a>
                    <a href={item.instagram} target="_blank">
                      <SocialIcon
                      style={{ height: 40, width: 40 }}
                      url={item.instagram}
                      />
                    </a>
                  </Stack>
                </CardContent>
              </Box>
            </Box>
          </Grid>
        ))}
        <Grid item container justifyContent={'center'} xs={12}>
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Jobs;
