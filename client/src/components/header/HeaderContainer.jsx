import React from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';
import './header.scss';

const Wrapper = styled.div`
  border-bottom: 1px solid #dda0dd;
  padding: 1rem;
  margin-top: 1rem;
`;

const HeaderContainer = props => (
  <Wrapper>
    <Header className="header-title">
      Moment
      <Header.Subheader>Live in the moment</Header.Subheader>
    </Header>
    <Header as="h5">미래에 할 일을 Todo App에 맡기고 현재에 집중하세요.</Header>
  </Wrapper>
);

export default HeaderContainer;
