import React, { Component } from 'react';
import styled from 'styled-components';
import { TodoForm } from '../form';

const Wrapper = styled.div`
  padding: 1rem;
  margin-top: 1rem;
`;

class EditContainer extends Component {
  render() {
    return (
      <Wrapper>
        <TodoForm />
      </Wrapper>
    );
  }
}

export default EditContainer;
