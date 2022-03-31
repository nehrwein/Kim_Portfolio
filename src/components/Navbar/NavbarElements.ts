import styled from 'styled-components'
import { Link } from 'react-scroll'

interface NavProps {
  scrollNav: boolean;
}

export const Nav = styled.nav<NavProps>`
  height: 80px;
  width: 100vw;
  background: ${({ scrollNav }) => scrollNav ? 'var(--blue)' : 'transparent'};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  z-index: 10;

  @media (max-width: 667px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 667px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: whitesmoke;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media (max-width: 667px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 40px;
`

export const NavLinks = styled(Link)`
  color: whitesmoke;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 29px;

  &.active {
    border-bottom: 3px solid var(--secondary);
  }
`