import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Hero, Jobs } from './components';
import { getUser } from '../../utils/Utils.js';

const PortfolioGrid = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const pastUser = localStorage.getItem('username');

    const fetchUser = async () => {
      if (pastUser) {
        const currUser = await getUser({ username: pastUser });
        setUser(currUser);
      } else {
        const currUser = await getUser({ username: user.username });
        setUser(currUser);
      }
    };

    fetchUser();
  }, []);

  return (
    <Main>
      <Container>
        <Hero />
      </Container>
      <Container>{user.verified ? <Jobs /> : null}</Container>
    </Main>
  );
};

export default PortfolioGrid;
