import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '_constants';

const StyledNavbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  margin-bottom: 100px;
  background-color: ${colors.brand};
  height: 75px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 36px;
`;

const LogoText = styled.div`
  font-size: 24px;
  margin-left: 10px;
`;

const NavbarLinks = styled.div``;

const NavbarLink = styled(Link)`
  margin: 0 5px;
`;

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo>
        ♫<LogoText>Song Database</LogoText>
      </Logo>
      <NavbarLinks>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/song">Song</NavbarLink>
        <NavbarLink to="/songs">Songs</NavbarLink>
      </NavbarLinks>
    </StyledNavbar>
  );
};
