import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getTime, getNow } from '../../util';

import { DateTimeInput } from 'semantic-ui-calendar-react';
import { Grid, Form, Button, Segment, Divider, Message } from 'semantic-ui-react';

class TodoForm extends Component {
  render() {
    const {
      id,
      title,
      content,
      priority,
      checked,
      deadline,
      handleChange,
      onToggle,
      onSubmit,
      success,
      error
    } = this.props;

    const isLoding = id => (id === -1 ? true : false);

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Form size="large" loading={isLoding(id)} success={success} error={error}>
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
                    error={!title}
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
                  />
                  <Form.Radio
                    label="지정하지 않음"
                    name="priority"
                    value={5}
                    checked={priority === 5}
                    onChange={handleChange}
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
                      value={getTime(deadline)}
                      iconPosition="left"
                      clearable
                      closable
                      dateTimeFormat={'YYYY.MM.DD HH:mm'}
                      onChange={handleChange}
                      minDate={getNow()}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Checkbox
                      label={<label>완료</label>}
                      name="checked"
                      slider
                      checked={checked}
                      onChange={onToggle}
                    />
                  </Form.Field>
                </Form.Group>
              </Segment>
            </Form>
            {success ? (
              <Message success header="수정완료" content="변경하신 사항이 모두 수정되었습니다." />
            ) : (
              <></>
            )}
            {error ? (
              <Message
                error
                header="실패"
                content="변경하신 사항이 수정되지 않았습니다. 관리자에게 문의해주세요(123번)"
              />
            ) : (
              <></>
            )}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Button.Group floated="right">
              <Link to="/">
                <Button>돌아가기</Button>
              </Link>
              <Button.Or />
              <Button positive onClick={onSubmit}>
                수정하기
              </Button>
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default TodoForm;
