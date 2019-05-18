import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import './todo.scss';
import { Accordion, Icon, Grid, GridColumn, Button } from 'semantic-ui-react';

import { getTime } from '../../util';

const TodoContent = styled.p``;

const TodoHeader = styled.span``;

class Todo extends Component {
  state = { activeIndex: -1 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render(props) {
    const { activeIndex } = this.state;
    const { title, content, deadline, id, checked, onToggle, onRemove } = this.props;

    const isValidTime = time => time !== null && time !== undefined;

    return (
      <Grid className="todo-grid">
        <Grid.Row>
          <Grid.Column width={14}>
            <Accordion className="todo-accordion" styled>
              <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                <Icon name="star" color="yellow" />
                {checked ? <Icon name="alarm" color="red" /> : <></>}
                <TodoHeader className={checked ? 'done' : 'todo'}>{title}</TodoHeader>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <Grid>
                  <Grid.Column width={13}>
                    <TodoContent className={checked ? 'done' : 'todo'}>{content}</TodoContent>
                    <TodoContent className={checked ? 'done' : 'todo'}>
                      {isValidTime(deadline) ? getTime(deadline) : ''}
                    </TodoContent>
                  </Grid.Column>
                  <Grid.Column width={1}>
                    <Button
                      name="checked"
                      size="large"
                      floated="right"
                      value={checked}
                      basic
                      icon={checked ? 'check circle outline' : 'circle outline'}
                      color={checked ? 'green' : 'black'}
                      onClick={e => onToggle(id)}
                    />
                  </Grid.Column>
                  <Grid.Column width={1}>
                    <Link to={`/edit/${id}`}>
                      <Button floated="right" size="large" basic icon="pencil" color="brown" />
                    </Link>
                  </Grid.Column>
                  <Grid.Column width={1}>
                    <Button
                      floated="right"
                      size="large"
                      basic
                      icon="delete"
                      color="red"
                      onClick={e => onRemove(id)}
                    />
                  </Grid.Column>
                </Grid>
              </Accordion.Content>
            </Accordion>
          </Grid.Column>
          <GridColumn width={2} />
        </Grid.Row>
      </Grid>
    );
  }
}

export default Todo;
