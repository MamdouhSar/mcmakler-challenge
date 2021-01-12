import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const StyledLayout = styled.div`
  @media (min-width: 720px) {
    padding: 0 50px;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;

  > a {
    font-size: 14;
    color: 14px;
    text-decoration: none;
    color: #4a4a4a;
    margin: 0 4px;
  }
`;

const Layout: React.FC = ({children}) => {
  return (
    <>
      <Header/>
      <StyledLayout>
        {children}
      </StyledLayout>
      <Footer>
        <a href="/#">AGB</a>
        <span>•</span>
        <a href="/#">Datenschutz</a>
        <span>•</span>
        <a href="/#">Impressum</a>
      </Footer>
    </>
  )
}

export default Layout;