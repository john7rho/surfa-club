import React, { useState, useEffect } from 'react';
// import Box from '@mui/material/Box';
// import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  //   AboutTop,
  //   Advantages,
  //   Customers,
  //   Features,
  Hero,
  Jobs,
  //   Newsletter,
  //   Partners,
  //   Process,
  //   PromoNumbers,
  //   Questions,
  //   TrustedCompanies,
} from './components';
import { UserCardGrid } from 'blocks/userCards';
import { getUser } from '../../utils/Utils.js';

const PortfolioGrid = () => {
  const [user, setUser] = useState('');

  const email = localStorage.getItem('username');
  // console.log(email);
  // console.log(getUser(localStorage.getItem('username')));

  const returnUser = async () => {
    let temp = await getUser({ username: email });
    //console.log(temp);
    //console.log(temp.image);
    setUser(temp);
  };

  returnUser();
  return (
    <Main>
      <Container>
        <Hero />
      </Container>
      {/* <Container>
        <Partners />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Questions />
        </Container>
      </Box>
      <Container>
        <Process />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <AboutTop />
        </Container>
      </Box> */}
      <Container>{user.verified ? <Jobs /> : null}</Container>
      {/* <Box bgcolor={'alternate.main'}>
        <Container>
          <PromoNumbers />
        </Container>
      </Box>
      <Container>
        <Features />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Advantages />
        </Container>
      </Box>
      <Container>
        <TrustedCompanies />
      </Container>
      <Container paddingY={0}>
        <Divider />
      </Container>
      <Container>
        <Customers />
      </Container>
      <Container paddingTop={'0 !important'}>
        <Newsletter />
      </Container> */}
    </Main>
  );
};

export default PortfolioGrid;
