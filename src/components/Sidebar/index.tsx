import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink } from './SidebarElements'

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar: React.FC<Props> = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
        <SidebarMenu>
          <SidebarLink 
            to='home'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            offset={0}
          >
            Home
          </SidebarLink>
          <SidebarLink 
            to='about' 
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            offset={-40}
          >
            About
          </SidebarLink>
          <SidebarLink 
            to='contact'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            offset={0}
          >
            Contact
          </SidebarLink>
        </SidebarMenu>
    </SidebarContainer>
  )
}

export default Sidebar