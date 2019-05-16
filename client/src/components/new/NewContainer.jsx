import React from 'react';
import styled from 'styled-components';
import { Grid, Input, Button } from 'semantic-ui-react';

const Wrapper = styled.div`
  padding: 1rem;
  margin-top: 1rem;
`;

const NewContainer = props => (
  <Wrapper>
    <Grid>
      <Grid.Row>
        <Grid.Column floated="left" width={14}>
          <Input style={{ width: '100%' }} size="large" placeholder="할 일을 입력해주세요." />
        </Grid.Column>
        <Grid.Column floated="right" width={2}>
          <Button circular icon="plus" size="large" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Wrapper>
);

export default NewContainer;
