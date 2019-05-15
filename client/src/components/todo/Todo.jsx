import React, { Component } from 'react';
import styled from 'styled-components';
import './todo.scss';
import { Accordion, Icon, Grid, GridColumn, Button } from 'semantic-ui-react';

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
    const { isDone } = this.props;

    return (
      <Grid className="todo-grid">
        <Grid.Row>
          <Grid.Column width={14}>
            <Accordion className="todo-accordion" styled>
              <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                <TodoHeader className={isDone ? 'done' : 'todo'}>집에가기</TodoHeader>
                <Icon name="alarm" color="red" />
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <Grid>
                  <Grid.Column width={13}>
                    <TodoContent className={isDone ? 'done' : 'todo'}>
                      오늘은 빠르게 집에 갈 수 있으면 하는 마음에 투두리스트에 추가를 해본다.
                    </TodoContent>
                    <TodoContent className={isDone ? 'done' : 'todo'}>
                      2019. 5. 10 12:00
                    </TodoContent>
                  </Grid.Column>
                  <Grid.Column width={1}>
                    <Button
                      floated="right"
                      size="large"
                      basic
                      icon={isDone ? 'check circle outline' : 'circle outline'}
                      color={isDone ? 'green' : 'black'}
                    />
                  </Grid.Column>
                  <Grid.Column width={1}>
                    <Button floated="right" size="large" basic icon="star" color="yellow" />
                  </Grid.Column>
                  <Grid.Column width={1}>
                    <Button floated="right" size="large" basic icon="pencil" color="brown" />
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
