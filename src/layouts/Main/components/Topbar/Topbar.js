import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../contexts/UserContext.js';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { NavItem } from './components';
import { useNavigate } from 'react-router-dom';

const Topbar = ({ onSidebarOpen, colorInvert = false }) => {
  const [signin, setSignin] = useState(true);

  const theme = useTheme();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (user.username !== '' || window.localStorage.getItem('user') !== null) {
      setSignin(false);
    }
  }, []);
  const handleSignOut = () => {
    if (!signin) {
      setUser({ username: '' });
      window.localStorage.clear();
      setSignin(true);
    }
  };

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
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
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <NavItem title={'Home'} colorInvert={colorInvert} />
        </Box>

        <Box marginLeft={4} onClick={() => handleSignOut()}>
          <NavItem
            title={signin ? 'Sign In' : 'Sign Out'}
            colorInvert={colorInvert}
            route={signin ? '/signin' : '/'}
          />
        </Box>

        <Box marginLeft={4}>
          <NavItem title={'FAQ'} colorInvert={colorInvert} route="/faq" />
        </Box>

        <Box marginLeft={4}>
          <Button
            bgcolor="maroon"
            component="a"
            target="blank"
            href="https://airtable.com/shrCDEmF6M6gDh7sk"
            size="large"
            style={{
              background:
                'linear-gradient(45deg, rgba(128,0,0,1) 0%, rgba(181,0,19,1) 50%, rgba(252,103,0,1) 100%)',
              opacity: 0.9,
              fontWeight: 'bold',
            }}
          >
            Be a Partner
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
