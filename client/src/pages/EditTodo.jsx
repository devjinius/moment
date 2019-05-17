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
  state = { id: -1, title: '', content: '', priority: 0, isDone: true, deadline: '' };

  componentDidMount() {
    const { id } = this.props.match.params;
    ApiCommon.get(`/api/todo/${id}`).then(res => {
      const { data } = res.data;
      this.setState(data);
    });
  }

  editHandleChange = (e, { name, value }) => this.setState({ [name]: value });

  onToggle = (e, { name, checked }) => this.setState({ [name]: checked });

  render() {
    return (
      <Wrapper>
        <Header as="h2">Edit Todo</Header>
        <TodoForm {...this.state} handleChange={this.editHandleChange} onToggle={this.onToggle} />
      </Wrapper>
    );
  }
}

export default EditTodo;
