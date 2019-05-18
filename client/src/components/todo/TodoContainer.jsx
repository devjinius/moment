import React, { Component } from 'react';
import styled from 'styled-components';
import { default as Todo } from './Todo';

const Wrapper = styled.div`
  padding: 1rem;
  margin-top: 1rem;
`;

class TodoContainer extends Component {
  render() {
    const { todos, handleToggle, onRemove } = this.props;
    const todoList = todos.map(todo => (
      <Todo {...todo} onToggle={handleToggle} onRemove={onRemove} key={todo.id} />
    ));
    return <Wrapper>{todoList}</Wrapper>;
  }
}

export default TodoContainer;
