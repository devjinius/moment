import React, { Component } from 'react';

import { NewContainer } from '../components/new';
import { TodoContainer } from '../components/todo';

import ApiCommon from '../lib/ApiCommon';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1rem;
  margin-top: 1rem;
`;

class Home extends Component {
  state = {
    newTodo: {
      title: '',
      content: '',
      error: false
    },
    todos: [
      {
        id: -1,
        title: '',
        content: '',
        deadline: '',
        checked: false
      }
    ],
    priorities: [{ color: '', id: -1, label: '' }]
  };

  componentDidMount() {
    Promise.all([ApiCommon.get('/api/todos'), ApiCommon.get('/api/priorities')]).then(results => {
      const { todos } = results.shift().data;
      const { priorities } = results.shift().data;
      this.setState({
        ...this.state,
        todos,
        priorities
      });
    });
  }

  handleChange = e => {
    const { newTodo } = this.state;
    const nextState = {
      ...this.state,
      newTodo: {
        ...newTodo,
        [e.target.name]: e.target.value,
        error: false
      }
    };

    this.setState(nextState);
  };

  isEmpty(text) {
    return text === '' ? true : false;
  }

  handleCreate = () => {
    const { newTodo, todos } = this.state;

    if (this.isEmpty(newTodo.title)) {
      this.setState({
        ...this.state,
        newTodo: { ...newTodo, error: true }
      });
      return;
    }

    ApiCommon.post('/api/todo', newTodo).then(res => {
      const { error, todo } = res.data;

      if (error) {
        return;
      }

      this.setState({
        ...this.todos,
        newTodo: {
          title: '',
          content: '',
          error: false
        },
        todos: todos.concat(todo)
      });
    });
  };

  handleRemove = id => {
    const { todos } = this.state;

    ApiCommon.remove('/api/todo/', id).then(res => {
      const { error } = res.data;

      if (error) {
        return;
      }

      this.setState({
        ...this.state,
        todos: todos.filter(todo => todo.id !== id)
      });
    });
  };

  handleToggle = id => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];
    const updateData = { checked: !selected.checked };

    ApiCommon.patch('/api/todo/', id, updateData).then(res => {
      const { data } = res.data;

      nextTodos[index].checked = data.checked;

      this.setState({
        ...this.state,
        todos: nextTodos
      });
    });
  };

  render() {
    const { newTodo, todos, priorities } = this.state;
    return (
      <>
        <NewContainer {...newTodo} onChange={this.handleChange} onCreate={this.handleCreate} />
        <Wrapper>
          <TodoContainer
            todos={todos}
            priorities={priorities}
            handleToggle={this.handleToggle}
            handleRemove={this.handleRemove}
          />
        </Wrapper>
      </>
    );
  }
}

export default Home;
