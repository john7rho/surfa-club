import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';



const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="theFront"
            width={80}
          >
            <Box
              component={'img'}
              src={
                mode === 'light'
                  ? 'https://drive.google.com/uc?export=view&id=1VdsJkcJIS-W_6efrGWLAj7lsYx3NPX16'
                  : 'https://drive.google.com/uc?export=view&id=1VdsJkcJIS-W_6efrGWLAj7lsYx3NPX16'
              }
              height={1}
              width={1}
            />
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            {/* <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/"
                color="text.primary"
                variant={'subtitle2'}
              >
                Home
              </Link>
            </Box> */}
            <Box marginTop={1} marginRight={2}>
              <Link
                component="a"
                href="/company-terms"
                //href="/docs/introduction" // TODO: Update this link, make ToS page
                color="text.primary"
                variant={'subtitle2'}
              >
                Terms of Service
              </Link>
            </Box>
            <Box marginTop={1}>
              <Button
                variant="outlined"
                color="primary"
                component="a"
                target="blank"
                href="https://airtable.com/shrCDEmF6M6gDh7sk" // TODO: Update this link
                size="small"
              >
                Apply now
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; ListenIn Inc. 2022. All rights reserved
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          Community is king.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
