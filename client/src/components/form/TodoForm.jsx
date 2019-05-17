import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
  render() {
    const { title, content, priority, isDone, deadline, handleChange, onToggle } = this.props;

    return (
      <Grid>
        <Grid.Column>
          <Form size="large">
            <Segment stacked clearing>
              <Form.Field>
                <Input name="title" placeholder="Title" value={title} onChange={handleChange} />
              </Form.Field>
              <Form.Field>
                <TextArea
                  name="content"
                  placeholder="Description"
                  value={content}
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="중요"
                  name="priority"
                  value={2}
                  checked={priority === 2}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="보통"
                  name="priority"
                  value={3}
                  checked={priority === 3}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="중요하지 않음"
                  name="priority"
                  value={4}
                  checked={priority === 4}
                  onChange={handleChange}
                  color="red"
                />
              </Form.Field>
              <Divider section />
              <Grid columns={2}>
                <Grid.Column>
                  <Header as="h3">마감기한</Header>
                  <DateTimeInput
                    name="deadline"
                    placeholder="Deadline"
                    value={deadline}
                    iconPosition="left"
                    clearable
                    closable
                    dateFormat="YYYY-MM-DD"
                    onChange={handleChange}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Header as="h3">완료</Header>
                  <Form.Field>
                    <Checkbox name="isDone" slider checked={isDone} onChange={onToggle} />
                  </Form.Field>
                </Grid.Column>
              </Grid>
            </Segment>
            <Button.Group floated="right">
              <Link to="/">
                <Button>취소</Button>
              </Link>
              <Button.Or />
              <Button positive>수정하기</Button>
            </Button.Group>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default TodoForm;
