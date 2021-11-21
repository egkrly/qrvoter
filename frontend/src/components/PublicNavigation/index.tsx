import { useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
    display: flex;
    padding: 18px;
    flex-direction: row;
    align-items: space-between;
`;

const NavItem = styled.button`
    display: flex;
    color: #444;
    padding: 8px 12px;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: 0.2s ease background-color;

    &:hover {
        background-color: #eee;
    }
`

const linkStyles = {
    textDecoration: 'none',
    marginRight: '8px',
}

const PublicNavigation = () => {
    return (
        <NavContainer>
            <Link to="/" style={linkStyles}><NavItem>Home</NavItem></Link>
            <Link to="/about" style={linkStyles}><NavItem>About</NavItem></Link>
            <Link to="/poll/nfi4ciapo9dcy9rj" style={linkStyles}><NavItem>Random poll</NavItem></Link>
        </NavContainer>
    )
}

export default PublicNavigation;
