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
          <SidebarLink to='home' onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to='about'  onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to='contact' onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
    </SidebarContainer>
  )
}

export default Sidebar