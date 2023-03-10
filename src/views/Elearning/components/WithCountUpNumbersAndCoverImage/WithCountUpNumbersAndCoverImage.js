import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import Container from 'components/Container';

const mock = [
  {
    title: 100,
    subtitle: '100 + students (and growing) in the network.',
    suffix: '+',
  },
  {
    title: 6,
    subtitle: '6 schools across the country (and counting)',
    suffix: '+',
  },
  {
    title: 1,
    subtitle: '1 community of wide-eyed surfers',
    suffix: '%',
  },
];

const WithCountUpNumbersAndCoverImage = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6}>
          <Box marginBottom={4}>
            <Typography sx={{ fontWeight: 700 }} variant={'h4'} gutterBottom>
              Apply to be a Partner
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              Become a focal point of a growing community of changemakers at
              your school as one of the lead hosts. Plus, get access to our
              growing network of partners and mentors.
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {mock.map((item, i) => (
              <Grid key={i} item xs={12} md={4}>
                <Typography variant="h4" color={'primary'} gutterBottom>
                  {item.title}
                </Typography>
                <Typography color="text.secondary" component="p">
                  {item.subtitle}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Box marginTop={4}>
            <Button
              variant="contained"
              size="large"
              href="https://airtable.com/shrCDEmF6M6gDh7sk"
              target="blank"
              style={{
                background:
                  'linear-gradient(to right, rgba(128,0,0,1) 0%, rgba(181,0,19,1) 50%, rgba(252,103,0,1) 100%)',
                opacity: 0.9,
              }}
            >
              Apply to join!
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Box
            component={Card}
            boxShadow={4}
            height={1}
            width={1}
            borderRadius="20px"
          >
            <Box
              component={CardMedia}
              height={1}
              width={1}
              minHeight={500}
              image="https://drive.google.com/uc?export=view&id=1MWFgXj9XhvU8K8yn59JDEjUZqfa9ugUb"
              borderRadius="16px"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WithCountUpNumbersAndCoverImage;
