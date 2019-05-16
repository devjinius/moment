import React from 'react';
import styled from 'styled-components';
import { Grid, Form, Button, Segment } from 'semantic-ui-react';

const Wrapper = styled.div`
  padding: 1rem;
  margin-top: 1rem;
`;

const EditContainer = props => (
  <Wrapper>
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form size="large">
          <Segment stacked>
            <Form.Input fluid icon="user" iconPosition="left" placeholder="E-mail address" />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </Wrapper>
);

export default EditContainer;
