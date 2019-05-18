import React, { Component } from 'react';

import { NewContainer } from '../components/new';
import { TodoContainer } from '../components/todo';

import ApiCommon from '../lib/ApiCommon';

class Home extends Component {
  state = {
    newTodo: {
      value: '',
      error: false
    },
    todos: []
  };

  componentDidMount() {
    const { newTodo } = this.state;
    ApiCommon.get('/api/todos').then(res => {
      const { data } = res.data;
      this.setState({
        newTodo,
        todos: data
      });
    });
  }

  handleChange = e => {
    const nextState = {
      ...this.state,
      newTodo: {
        value: e.target.value,
        error: false
      }
    };

    this.setState(nextState);
  };

  isEmpty(text) {
    return text === '' ? true : false;
  }

  onCreate = () => {
    const { newTodo, todos } = this.state;
    if (this.isEmpty(newTodo.value)) {
      this.setState({
        newTodo: { value: '', error: true },
        todos
      });
      return;
    }

    const submitData = { title: newTodo.value };

    ApiCommon.post('/api/todo', submitData).then(res => {
      const { error, data } = res.data;

      if (error) {
        return;
      }

      this.setState({
        newTodo: {
          value: '',
          error: false
        },
        todos: todos.concat(data)
      });
    });
  };

  onRemove = id => {
    const { todos } = this.state;

    ApiCommon.remove('/api/todo/', id).then(res => {
      const { error, data } = res.data;

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
        newInput: '',
        todos: nextTodos
      });
    });
  };

  render() {
    const { newTodo, todos } = this.state;

    return (
      <>
        <NewContainer {...newTodo} onChange={this.handleChange} onCreate={this.onCreate} />
        <TodoContainer todos={todos} handleToggle={this.handleToggle} onRemove={this.onRemove} />
      </>
    );
  }
}

export default Home;
