import React from 'react';
import { default as Todo } from './Todo';

const getTodoList = ({ todos, priorities, handleToggle, handleRemove }) =>
  todos.map(todo => (
    <Todo
      {...todo}
      priorities={priorities}
      onToggle={handleToggle}
      onRemove={handleRemove}
      key={todo.id}
    />
  ));

const TodoContainer = props => {
  return <>{getTodoList(props)}</>;
};

export default TodoContainer;
