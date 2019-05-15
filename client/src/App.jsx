import React from 'react';
import './App.scss';
import { HeaderContainer } from './components/header';
import { CreateContainer } from './components/create';
import { TodoContainer } from './components/todo';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Container>
      <HeaderContainer />
      <CreateContainer />
      <TodoContainer />
    </Container>
  );
}

export default App;
