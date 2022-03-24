import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements'

interface Props {
  toggle: () => void;
}

const Navbar: React.FC<Props> = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='home'>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'>Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar