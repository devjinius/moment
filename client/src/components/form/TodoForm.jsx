import React, { Component } from 'react';
import styled from 'styled-components';
import './TodoForm.scss';

import { DateTimeInput } from 'semantic-ui-calendar-react';
import {
  Grid,
  Form,
  Button,
  Segment,
  Radio,
  Input,
  Divider,
  Checkbox,
  Header,
  TextArea
} from 'semantic-ui-react';

class TodoForm extends Component {
  state = { title: '', desc: '', priority: 0, isDone: true, deadline: '' };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  checkboxHandleChange = (e, { name, checked }) => this.setState({ [name]: checked });

  render() {
    const { title, desc, priority, isDone, deadline } = this.state;

    return (
      <Grid>
        <Grid.Column style={{ width: '100%' }}>
          <Form size="large">
            <Segment>
              <Form.Field>
                <Input
                  name="title"
                  placeholder="Title"
                  value={title}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <TextArea
                  name="desc"
                  placeholder="Description"
                  value={desc}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Divider section />
              <Header as="h3">중요도</Header>
              <Form.Field>
                <Radio
                  label="매우 중요"
                  name="priority"
                  value={1}
                  checked={priority === 1}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="중요"
                  name="priority"
                  value={2}
                  checked={priority === 2}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="보통"
                  name="priority"
                  value={3}
                  checked={priority === 3}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="중요하지 않음"
                  name="priority"
                  value={4}
                  checked={priority === 4}
                  onChange={this.handleChange}
                  color="red"
                />
              </Form.Field>
              <Divider section />
              <Header as="h3">마감기한</Header>
              <DateTimeInput
                name="deadline"
                placeholder="Deadline"
                value={deadline}
                iconPosition="left"
                clearable
                closable
                dateFormat="YYYY-MM-DD"
                onChange={this.handleChange}
              />
              <Divider section />
              <Header as="h3">완료</Header>
              <Form.Field>
                <Checkbox
                  name="isDone"
                  slider
                  checked={isDone}
                  onChange={this.checkboxHandleChange}
                />
              </Form.Field>
              <Button.Group>
                <Button>취소</Button>
                <Button.Or />
                <Button positive>수정하기</Button>
              </Button.Group>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default TodoForm;
