import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { DateTimeInput } from 'semantic-ui-calendar-react';
import { Grid, Form, Button, Segment, Divider } from 'semantic-ui-react';

class TodoForm extends Component {
  render() {
    const { title, content, priority, isDone, deadline, handleChange, onToggle } = this.props;

    return (
      <Grid>
        <Grid.Column>
          <Form size="large">
            <Segment stacked clearing>
              <Form.Field>
                <Form.Input
                  label="Title"
                  name="title"
                  id="form-input-control-title"
                  placeholder="Todo를 만드세요."
                  value={title}
                  onChange={handleChange}
                  required
                />
              </Form.Field>
              <Form.Field>
                <Form.TextArea
                  label="Description"
                  name="content"
                  id="form-input-control-content"
                  placeholder="설명을 적어주세요..."
                  value={content}
                  onChange={handleChange}
                />
              </Form.Field>
              <Divider section />
              <Form.Group grouped>
                <label>Priority</label>
                <Form.Radio
                  label="매우 중요"
                  name="priority"
                  value={1}
                  checked={priority === 1}
                  onChange={handleChange}
                />
                <Form.Radio
                  label="중요"
                  name="priority"
                  value={2}
                  checked={priority === 2}
                  onChange={handleChange}
                />
                <Form.Radio
                  label="보통"
                  name="priority"
                  value={3}
                  checked={priority === 3}
                  onChange={handleChange}
                />
                <Form.Radio
                  label="중요하지 않음"
                  name="priority"
                  value={4}
                  checked={priority === 4}
                  onChange={handleChange}
                  color="red"
                />
              </Form.Group>
              <Divider section />
              <Form.Group widths="equal">
                <Form.Field>
                  <DateTimeInput
                    label="마감기한"
                    inlineLabel
                    name="deadline"
                    placeholder="Deadline"
                    value={deadline}
                    iconPosition="left"
                    clearable
                    closable
                    dateFormat="YYYY-MM-DD"
                    onChange={handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Form.Checkbox
                    label={<label>완료</label>}
                    name="isDone"
                    slider
                    checked={isDone}
                    onChange={onToggle}
                  />
                </Form.Field>
              </Form.Group>
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
