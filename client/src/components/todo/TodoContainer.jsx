import React from 'react';
import { default as Todo } from './Todo';
import { default as ControlTab } from './ControlTab';

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
  return (
    <>
      <ControlTab order={props.order} onClick={props.onOrderClick} />
      {getTodoList(props)}
    </>
  );
};

export default TodoContainer;
