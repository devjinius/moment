import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import './todo.scss';
import { Accordion, Icon, Grid, GridColumn, Button } from 'semantic-ui-react';

import { getTime, getDiffFromNow } from '../../util';

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

  getPriorityIcon(priority, priorities) {
    const getIcon = priorityObj => {
      if (priorityObj.id === priority) {
        icon = <Icon name="star" color={priorityObj.color} />;
        return true;
      }
      return false;
    };

    let icon = <></>;
    priorities.some(getIcon);

    return icon;
  }

  getDeadlineItem(deadline, checked) {
    if (checked) {
      return '';
    }

    return this.isValidTime(deadline) ? (
      <div>
        <Icon name="calendar check outline" />
        {getTime(deadline)}
      </div>
    ) : (
      ''
    );
  }

  isValidTime(time) {
    return time !== null && time !== undefined;
  }

  getAlramStatus(deadline, checked) {
    if (checked) {
      return false;
    }

    if (!this.isValidTime(deadline)) {
      return false;
    }

    const diff = getDiffFromNow(deadline);
    return diff <= 0 ? true : false;
  }

  getAlramItem(deadline, checked) {
    return this.getAlramStatus(deadline, checked) ? <Icon name="warning" color="red" /> : <></>;
  }

  render() {
    const { activeIndex } = this.state;
    const {
      title,
      content,
      deadline,
      id,
      checked,
      priority,
      priorities,
      onToggle,
      onRemove
    } = this.props;

    return (
      <Grid className="todo-grid">
        <Grid.Row>
          <Grid.Column width={14}>
            <Accordion className="todo-accordion" styled>
              <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                {this.getPriorityIcon(priority, priorities)}
                {this.getAlramItem(deadline, checked)}
                <TodoHeader className={checked ? 'done' : 'todo'}>{title}</TodoHeader>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <Grid stackable>
                  <Grid.Column mobile={16} tablet={7} computer={10}>
                    <TodoContent className={checked ? 'done' : 'todo'}>{content}</TodoContent>
                    {this.getDeadlineItem(deadline, checked)}
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={3} computer={2}>
                    <Button
                      name="checked"
                      value={checked}
                      fluid
                      basic
                      icon={checked ? 'check circle outline' : 'circle outline'}
                      color={checked ? 'green' : 'black'}
                      onClick={e => onToggle(id)}
                    />
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={3} computer={2}>
                    <Link to={`/edit/${id}`}>
                      <Button basic fluid icon="pencil" color="brown" />
                    </Link>
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={3} computer={2}>
                    <Button basic icon="delete" color="red" fluid onClick={e => onRemove(id)} />
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
