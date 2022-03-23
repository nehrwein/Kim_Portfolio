import MuiDrawer from './MuiDrawer';
import styled from 'styled-components';

const Navbar = () => {

  return (
    <NavBar>
      <NavList>
        <ListElement>Home</ListElement>
        <ListElement>About</ListElement>
        <ListElement>Contact</ListElement>
        {window.innerWidth < 767 && <MuiDrawer />}
      </NavList>
    </NavBar>
  )
}

export default Navbar

const NavBar = styled.nav`
  width: 100vw;
`

const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style-type: none;
`

const ListElement = styled.li`
  padding: 0 60px;
  
  @media (max-width: 767px) {
    display: none;
    font-size: 100px;
  }
` 
