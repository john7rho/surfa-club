import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';
import Typed from 'react-typed';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const LeftSide = () => (
    <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
      <Box marginBottom={2}>
        <Typography
          color={'grey.800'}
          component={'span'}
          variant="h3"
          fontWeight={700}
          sx={{
            backgroundColor: 'primary',
            backgroundSize: '100%',
            backgroundRepeat: 'repeat',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: 20,
            backgroundImage:
              'linear-gradient(45deg, rgba(128,0,0,1) 0%, rgba(181,0,19,1) 50%, rgba(252,0,0,1) 100%)',
          }}
        >
          Couchsurf with us.
        </Typography>
        {/* <Typography color="text.primary" sx={{ fontWeight: 700 }}>
          Today, I'm a{' '}
          <Typed
            strings={[' Stanford', ' UC Berkeley', ' Harvard', ' MIT']}
            typeSpeed={50}
            backSpeed={100}
            loop
          ></Typed>
          {''}
          student.
        </Typography> */}
        <div
          style={{
            fontSize: '24px',
          }}
        >
          This weekend, I'm a{' '}
          <div
            style={{
              display: 'inline',
              fontWeight: 'bold',
            }}
          >
            <Typed
              strings={[
                ' Stanford',
                ' UC Berkeley',
                ' Harvard',
                ' MIT',
                ' UCLA',
                ' Yale',
                ' Cornell',
                ' Columbia',
              ]}
              typeSpeed={75}
              backSpeed={100}
              loop
            ></Typed>
          </div>
          {''}
          student.
        </div>
      </Box>
      <Box marginBottom={3}>
        <Typography variant="h6" component="p" color="text.secondary">
          Find a place to crash for conferences, hackathons, events, and more.
        </Typography>
      </Box>
      <Box display="flex" flexDirection={'column'} justifyContent={'center'}>
        {/* <Box marginBottom={2}>
          <Typography variant="body1" component="p">
            Join a growing community of builders and explorers
          </Typography>
        </Box> */}
        <Box
          component={'form'}
          noValidate
          autoComplete="off"
          sx={{
            '& .MuiInputBase-input.MuiOutlinedInput-input': {
              bgcolor: 'background.paper',
            },
          }}
        >
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          >
            <Box
              component={Button}
              variant="contained"
              color="primary"
              size="large"
              bgcolor="maroon"
              height={60}
              width={{ xl: 500 }}
              marginTop={{ xs: 2, sm: 0 }}
              href="/signup"
              style={{
                background:
                  'linear-gradient(45deg, rgba(128,0,0,1) 0%, rgba(181,0,19,1) 50%, rgba(252,103,0,1) 100%)',
                opacity: 0.9,
              }}
            >
              <Typography variant="h6" fontWeight={700}>
                Browse hosts
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box marginTop={{ xs: 4, sm: 6, md: 8 }} textAlign={'left'}>
        <Typography
          variant="body1"
          component="p"
          color="text.primary"
          sx={{ textTransform: 'uppercase' }}
        >
          Join a growing community of students at
        </Typography>
        <Box display="flex" flexWrap="wrap" justifyContent={'flex-start'}>
          {[
            'https://logos-world.net/wp-content/uploads/2021/01/Harvard-Logo.png',
            'https://logos-world.net/wp-content/uploads/2021/10/Stanford-Emblem.png',
            'https://logos-world.net/wp-content/uploads/2022/02/University-of-Texas-at-Austin-Logo.png',
            'https://logos-world.net/wp-content/uploads/2022/01/Cornell-University-Logo.png',
            'https://logos-world.net/wp-content/uploads/2021/09/MIT-Massachusetts-Institute-of-Technology-Logo.png',
            'https://logos-world.net/wp-content/uploads/2022/02/UC-Berkeley-Symbol.png',
          ].map((item, i) => (
            <Box maxWidth={120} marginTop={2} marginRight={4} key={i}>
              <Box
                component="img"
                height={1}
                width={1}
                src={item}
                alt="..."
                sx={{
                  filter:
                    theme.palette.mode === 'dark'
                      ? 'brightness(0) invert(0.7)'
                      : 'none',
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );

  const RightSide = () => {
    return (
      <Box
        sx={{
          height: { xs: 'auto', md: 1 },
          '& img': {
            objectFit: 'cover',
          },
        }}
      >
        <Box
          component={'img'}
          loading="lazy"
          src={
            'https://drive.google.com/uc?export=view&id=1U9Onaz_LY0zG95IdsKBoVDpOQaDNNUyM'
          }
          height={{ xs: 'auto', md: 1 }}
          maxHeight={{ xs: 300, md: 1 }}
          width={1}
          maxWidth={1}
        />
      </Box>
    );
  };

  return (
    <Box
      sx={{
        bgcolor: 'alternate.main',
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          position={'relative'}
        >
          <Box width={1} order={{ xs: 2, md: 1 }}>
            <Container>
              <LeftSide />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '50vw' },
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    left: '0%',
                    width: 1,
                    height: 1,
                    position: { xs: 'relative', md: 'absolute' },
                    clipPath: {
                      xs: 'none',
                      md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                    },
                    shapeOutside: {
                      xs: 'none',
                      md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                    },
                  }}
                >
                  <RightSide />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider />
    </Box>
  );
};

export default Hero;
