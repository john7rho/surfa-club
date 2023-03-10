import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const mock = [
  {
    title: 'Friends',
    subtitle: 'Get plugged into new networks.',
    icon: 'https://drive.google.com/uc?export=view&id=14c8kpMIH83HS0L4elRx893nd4RmykwaJ',
  },
  {
    title: 'Adventures',
    subtitle: 'Explore other colleges and cities.',
    icon: 'https://drive.google.com/uc?export=view&id=1N1c6ydD5WwEcIVyowKXRPP6HhBGhWFot',
  },
  {
    title: 'Events',
    subtitle: 'Join hackathons and fireside chats.',
    icon: 'https://drive.google.com/uc?export=view&id=1gjK4CTAdNGGrayuGmzOKWSf8EDLIjRTr',
  },
  {
    title: 'Resources',
    subtitle: 'Access to mentors and funding.',
    icon: 'https://drive.google.com/uc?export=view&id=14ucxNJ4XtkZNG-zKqIs7wczZBtC5uhv6',
  },
];

const Benefits = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h4'}
          gutterBottom
          align={'center'}
          sx={{ fontWeight: 700, color: 'common.blue' }}
        >
          Find a host in under 5 minutes.
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
          sx={{ color: 'common.blue' }}
        >
          Surfa's pay-it-forward system makes traveling easy.
        </Typography>
      </Box>

      <Grid container spacing={12}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={3} key={i}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                component={Avatar}
                width={{ xs: 100, md: 200 }}
                height={{ xs: 100, md: 200 }}
                marginBottom={2}
                src={item.icon}
              />
              <Typography
                variant={'h6'}
                gutterBottom
                align={'center'}
                sx={{ fontWeight: 600, color: 'common.blue' }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ color: 'common.blue' }} align={'center'}>
                {item.subtitle}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Benefits;
