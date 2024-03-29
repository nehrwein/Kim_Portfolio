import styled from 'styled-components'
import { Link } from 'react-scroll'
import { FaTimes } from 'react-icons/fa'

interface SidebarProps {
  isOpen: boolean;
}

export const SidebarContainer = styled.nav<SidebarProps>`
  position: fixed;
  z-index: 999;
  width: 60%;
  height: 100vh;
  background: var(--blue);
  display: grid;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  right: 0;
  transition: 0.3s ease-in-out;
`

export const CloseIcon = styled(FaTimes)`
  color: var(--white);
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SidebarMenu = styled.ul`
  display: grid;
  height: 70vh;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;

  @media (max-width: 480px) {
    grid-template-rows: repeat(3, 60px)
  }
`

export const SidebarLink = styled(Link)`
  font-family: 'Open Sans';
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: whitesmoke;
  cursor: pointer;

  &:hover {
    color: var(--secondary);
    transition: 0.2s ease-in-out;
  }
`