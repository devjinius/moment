import React, { Component } from 'react';
import styled from 'styled-components';

import { TodoForm } from '../components/form';
import { Header } from 'semantic-ui-react';

import ApiCommon from '../lib/ApiCommon';

const Wrapper = styled.div`
  padding: 1rem;
  margin-top: 1rem;
`;

class EditTodo extends Component {
  state = {
    todo: {
      id: -1,
      title: '',
      content: '',
      priority: -1,
      checked: true,
      deadline: null,
      success: false,
      error: false,
      errorMessage: ''
    },
    priorities: [{ color: '', id: -1, label: '' }]
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    Promise.all([ApiCommon.get(`/api/todo/${id}`), ApiCommon.get('/api/priorities')]).then(
      results => {
        const todoData = results.shift().data;
        const priorityData = results.shift().data;

        if (todoData.error) {
          alert(todoData.errorMessage);
          return;
        }
        if (priorityData.error) {
          alert(priorityData.errorMessage);
          return;
        }

        this.setState({
          ...this.state,
          todo: todoData.todo,
          priorities: priorityData.priorities
        });
      }
    );
  }

  editHandleChange = (e, { name, value }) => {
    const { todo } = this.state;
    this.setState({ ...this.state, todo: { ...todo, [name]: value } });
  };

  handleToggle = (e, { name, checked }) => {
    const { todo } = this.state;
    this.setState({ ...this.state, todo: { ...todo, [name]: checked } });
  };

  handleSubmit = e => {
    const { todo } = this.state;

    this.setState({ ...this.state, todo: { ...todo, success: false } });

    if (todo.title === '') {
      return;
    }

    if (todo.deadline === '') {
      todo.deadline = null;
    }

    if (todo.priority === -1) {
      todo.priority = null;
    }

    ApiCommon.patch('/api/todo/', todo.id, todo).then(res => {
      const { todo, error, errorMessage } = res.data;

      if (error) {
        const errorState = { ...this.state, todo: { ...todo, error, errorMessage } };
        this.setState(errorState);

        return;
      }

      todo.success = true;
      this.setState({ ...this.state, todo });
    });
  };

  render() {
    return (
      <Wrapper>
        <Header as="h2">Edit Todo</Header>
        <TodoForm
          {...this.state.todo}
          priorities={this.state.priorities}
          handleChange={this.editHandleChange}
          onToggle={this.handleToggle}
          onSubmit={this.handleSubmit}
        />
      </Wrapper>
    );
  }
}

export default EditTodo;
