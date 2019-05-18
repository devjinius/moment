import React from 'react';
import { default as Todo } from './Todo';

const getTodoList = ({ todos, handleToggle, handleRemove }) =>
  todos.map(todo => (
    <Todo {...todo} onToggle={handleToggle} onRemove={handleRemove} key={todo.id} />
  ));

const TodoContainer = props => {
  return <>{getTodoList(props)}</>;
};

export default TodoContainer;
