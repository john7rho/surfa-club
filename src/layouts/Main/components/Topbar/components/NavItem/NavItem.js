import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const NavItem = ({ title, route = '/', colorInvert = false }) => {
  const linkColor = colorInvert ? 'common.white' : 'text.primary';
  const navigate = useNavigate();

  return (
    <Box onClick={() => navigate(route)}>
      <Box display={'flex'} alignItems={'center'} sx={{ cursor: 'pointer' }}>
        <Typography fontWeight={700} color={linkColor}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  colorInvert: PropTypes.bool,
  route: PropTypes.string,
};

export default NavItem;
