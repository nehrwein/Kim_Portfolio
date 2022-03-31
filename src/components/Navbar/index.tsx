import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements'

interface Props {
  toggle: () => void;
}

const Navbar: React.FC<Props> = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  useEffect(() => {
    const changeNav = () => {
      if (window.scrollY >= 80) {
        setScrollNav(true)
      } else {
        setScrollNav(false)
      }
    }

    window.addEventListener('scroll', changeNav)
  
    return () => {
      window.removeEventListener('scroll', changeNav)
    }
  }, [])
  

  return (
    <>
      <Nav scrollNav={scrollNav}>
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
                offset={-40}
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
                offset={-80}
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