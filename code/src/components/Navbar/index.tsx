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
              <NavLinks 
                to='home'
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Home
            </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to='about' 
                smooth={true}
                duration={500}
                spy={true}
                offset={0}
              >
                About
            </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to='contact'
                smooth={true}
                duration={500}
                spy={true}
                offset={80}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar