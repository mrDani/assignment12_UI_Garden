import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 80px;
  background-color: #0d1a2b;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled(Link)`
  color: #00bfff;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 40px;
`;

const NavLink = styled(Link)`
  color: #00bfff;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s;

  &:hover {
    color: #1e90ff;
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo to="/">Daniel</Logo>
      <NavLinks>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/resources">Resources</NavLink>
        <NavLink to="/developer-setup">Developer Setup</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
