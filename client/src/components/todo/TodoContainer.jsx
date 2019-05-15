import React, { Component } from 'react';
import styled from 'styled-components';
import { default as Todo } from './Todo';

const Wrapper = styled.div`
  padding: 1rem;
  margin-top: 1rem;
`;

class TodoContainer extends Component {
  render() {
    return (
      <Wrapper>
        <Todo isDone={true} />
        <Todo isDone={true} />
        <Todo />
        <Todo />
        <Todo />
      </Wrapper>
    );
  }
}

export default TodoContainer;
