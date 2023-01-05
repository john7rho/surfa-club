import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

// TIP: this is the main one to edit
const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              'https://drive.google.com/uc?export=view&id=1UmlHWiaUh9i07xEY57jASQCXmbL7ntzH'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <Link style={{ color: 'maroon', textDecoration: 'none' }} href="/">
            Home
          </Link>
        </Box>
        <Box>
          <Link
            style={{ color: 'maroon', textDecoration: 'none' }}
            href="/signin-simple"
          >
            Sign In
          </Link>
        </Box>
        <Box>
          <Link style={{ color: 'maroon', textDecoration: 'none' }} href="/faq">
            FAQ
          </Link>
        </Box>
        {/* <Box>
          <NavItem title={'Company'} items={companyPages} />
        </Box>
        <Box>
          <NavItem title={'Pages'} items={secondaryPages} />
        </Box>
        <Box>
          <NavItem title={'Account'} items={accountPages} />
        </Box>
        <Box>
          <NavItem title={'Blog'} items={blogPages} />
        </Box>
        <Box>
          <NavItem title={'Portfolio'} items={portfolioPages} />
        </Box> */}
        <Box marginTop={2}>
          <Button
            size={'large'}
            variant="outlined"
            fullWidth
            component="a"
            href="https://airtable.com/shrCDEmF6M6gDh7sk"
          >
            Apply to be a Partner
          </Button>
        </Box>
        {/* <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="blank"
            href="https://mui.com/store/items/the-front-landing-page/"
          >
            Purchase now
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
