import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


const mock = [
  {
    title: 'Friends',
    subtitle:
      'Get plugged into new networks.',
    icon: 'https://cdn-icons-png.flaticon.com/512/3098/3098416.png',
  },
  {
    title: 'Adventures',
    subtitle:
      'Explore other colleges and cities.',
    icon: 'https://i.pinimg.com/736x/97/b6/52/97b6529fc223a727165330eb4a57326c.jpg',
  },
  {
    title: 'Events',
    subtitle:
      'Join hackathons and fireside chats.',
    icon: 'https://www.pngkey.com/png/detail/171-1711744_pin-campfire-clipart-png-anime-camp-fire-png.png',
  },
  {
    title: 'Resources',
    subtitle:
      'Access to mentors and funding.',
    icon: 'https://cdn-icons-png.flaticon.com/512/5764/5764072.png',
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
          Young founders are few and far between. 
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
          sx={{ color: 'common.blue' }}
        >
          Let's bridge this gap.
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
                width={{ xs: 60, md: 100 }}
                height={{ xs: 60, md: 100 }}
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