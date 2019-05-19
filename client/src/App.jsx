import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Home, EditTodo } from './pages';

import { HeaderContainer } from './components/header';
import { FooterContainer } from './components/footer';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Container>
      <Helmet>
        <title>Moment</title>
      </Helmet>
      <HeaderContainer />
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/edit/:id" component={EditTodo} />
      </BrowserRouter>
      <FooterContainer />
    </Container>
  );
}

export default App;
