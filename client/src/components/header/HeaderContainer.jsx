import React from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

const Wrapper = styled.div`
  background-color: white;
  border-bottom: 1px solid #dda0dd;
  width: inherit;
  position: relative;
  color: black;
  padding: 1rem;
  margin-top: 1rem;
`;

const style = {
  h1: { fontSize: '4em' },
  h2: { fontSize: '0.4em' }
};

const HeaderContainer = ({ header, subHeader }) => (
  <Wrapper>
    <Header as="h1" style={style.h1}>
      Moment
      <Header.Subheader style={style.h2}>Live in the moment</Header.Subheader>
    </Header>
  </Wrapper>
);

export default HeaderContainer;
