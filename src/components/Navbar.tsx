import type { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const HeaderLink = styled(Link)`
  color: white;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    background-color: inherit;
    color: inherit;
  }
`;

interface NavbarProps {
  noProjects?: boolean;
}

const Navbar: FC<NavbarProps> = ({ noProjects = false }) => (
  <header>
    <nav
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        paddingTop: 12,
        height: 36,
      }}
    >
      <HeaderLink to="/">Daniel Moore</HeaderLink>
      <div style={{ flex: 1 }} />
      <HeaderLink to="/about">About</HeaderLink>
      {!noProjects && (
        <HeaderLink style={{ marginLeft: 24 }} to="/#projects">Projects</HeaderLink>
      )}
    </nav>
  </header>
);

export default Navbar;
