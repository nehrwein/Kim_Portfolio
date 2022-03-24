import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Nav = styled.nav`
  background: red;
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  background: green;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
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
  text-align: center;
  /* might not be needed in my design */
  /* margin-right: -22px; */

  @media (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
`

export const NavLinks = styled(Link)`
  color: whitesmoke;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid blue;
  }
`