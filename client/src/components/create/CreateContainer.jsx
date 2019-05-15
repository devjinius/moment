import React from 'react';
import styled from 'styled-components';
import { Grid, Segment, Input, Button } from 'semantic-ui-react';

const Wrapper = styled.div`
  background-color: white;
  width: inherit;
  position: relative;
  color: black;
  padding: 1rem;
  margin-top: 1rem;
`;

const CreateContainer = props => (
  <Wrapper>
    <Grid>
      <Grid.Row>
        <Grid.Column floated="left" width={14}>
          <Input style={{ width: '100%' }} size="big" placeholder="할 일을 입력해주세요." />
        </Grid.Column>
        <Grid.Column floated="right" width={2}>
          <Button circular icon="plus" size="big" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Wrapper>
);

export default CreateContainer;
