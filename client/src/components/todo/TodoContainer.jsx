import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import { default as Todo } from './Todo';

const Wrapper = styled.div`
  font-size: 1.2rem;
  color: black;
  padding: 1rem;
  margin-top: 1rem;
`;
class TodoContainer extends Component {
  render() {
    return (
      <Wrapper>
        <Todo isDone={true} />
        <Todo isDone={true} />
        <Todo isDone={true} />
        <Todo />
        <Todo />
      </Wrapper>
    );
  }
}

export default TodoContainer;
