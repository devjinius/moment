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
    id: -1,
    title: '',
    content: '',
    priority: 0,
    checked: true,
    deadline: null,
    success: false,
    error: false
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    ApiCommon.get(`/api/todo/${id}`).then(res => {
      const { data } = res.data;
      this.setState(data);
    });
  }

  editHandleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleToggle = (e, { name, checked }) => this.setState({ [name]: checked });

  handleSubmit = e => {
    const data = this.state;

    if (data.deadline === '') {
      data.deadline = null;
    }

    ApiCommon.patch('/api/todo/', data.id, data).then(res => {
      const { error, data } = res.data;

      if (error) {
        const errorState = { ...this.state, error: true };
        this.setState(errorState);

        return;
      }

      data.success = true;
      this.setState(data);
    });
  };

  render() {
    return (
      <Wrapper>
        <Header as="h2">Edit Todo</Header>
        <TodoForm
          {...this.state}
          handleChange={this.editHandleChange}
          onToggle={this.handleToggle}
          onSubmit={this.handleSubmit}
        />
      </Wrapper>
    );
  }
}

export default EditTodo;
