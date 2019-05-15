import React from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';
import './header.scss';

const Wrapper = styled.div`
  border-bottom: 1px solid #dda0dd;
  padding: 1rem;
  margin-top: 1rem;
`;

const HeaderContainer = ({ header, subHeader }) => (
  <Wrapper>
    <Header className="header-title">
      Moment
      <Header.Subheader>Live in the moment</Header.Subheader>
    </Header>
  </Wrapper>
);

export default HeaderContainer;
