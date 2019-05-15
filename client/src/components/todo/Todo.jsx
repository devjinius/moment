import React, { Component } from 'react';
import styled from 'styled-components';
import { Accordion, Icon, Grid, GridColumn } from 'semantic-ui-react';

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
      textDecoration: !isDone ? 'line-through' : 'none'
    };
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={14}>
            <Accordion styled style={{ width: '100%' }}>
              <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                <span style={textStyle}>집에가기</span>
                <Icon name="alarm" color="red" />
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <p style={textStyle}>
                  오늘은 빠르게 집에 갈 수 있으면 하는 마음에 투두리스트에 추가를 해본다.
                </p>
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
