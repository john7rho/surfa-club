import React, { useState, useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Page from './components/Page';
import { UserContext } from './contexts/UserContext';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

const App = () => {
  const [user, setUser] = useState({
    username: '',
    credits: 0,
  });

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Page>
      <UserContext.Provider value={providerValue}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </UserContext.Provider>
    </Page>
  );
};

export default App;
