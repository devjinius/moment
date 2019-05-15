import React, { Component } from 'react';
import styled from 'styled-components';
import { Accordion, Icon, Grid, GridColumn, Button } from 'semantic-ui-react';

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
    const textStyle = {
      textDecoration: isDone ? 'line-through' : 'none'
    };
    return (
      <Grid style={{ marginTop: '0.3rem' }}>
        <Grid.Row>
          <Grid.Column width={14}>
            <Accordion styled style={{ width: '100%' }}>
              <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                <span style={textStyle}>집에가기</span>
                <Icon name="alarm" color="red" />
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <Grid>
                  <Grid.Column width={13}>
                    <p style={textStyle}>
                      오늘은 빠르게 집에 갈 수 있으면 하는 마음에 투두리스트에 추가를 해본다.
                    </p>
                    <p style={textStyle}>2019. 5. 10 12:00</p>
                  </Grid.Column>
                  <Grid.Column width={1} style={{ borderRadius: '0px' }}>
                    <Button
                      floated="right"
                      size="big"
                      basic
                      icon={isDone ? 'check circle outline' : 'circle outline'}
                      color={isDone ? 'green' : ''}
                    />
                  </Grid.Column>
                  <Grid.Column width={1} style={{ borderRadius: '0px' }}>
                    <Button
                      floated="right"
                      size="big"
                      basic
                      icon="star"
                      color={isDone ? 'yellow' : ''}
                    />
                  </Grid.Column>
                  <Grid.Column width={1} style={{ borderRadius: '0px' }}>
                    <Button
                      floated="right"
                      size="big"
                      basic
                      icon="pencil"
                      color={isDone ? 'brown' : ''}
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
