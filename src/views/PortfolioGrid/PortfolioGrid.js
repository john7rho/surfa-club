import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Hero, Jobs } from './components';
import { getUser } from '../../utils/Utils.js';

const PortfolioGrid = () => {
  const pastUser = localStorage.getItem('username');
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchUser = async () => {
      if (pastUser) {
        const currUser = await getUser({ username: pastUser });
        setUser(currUser);
      } else {
        const currUser = await getUser({ username: user.username });
        setUser(currUser);
      }
    };
    fetchUser;
  }, []);

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
