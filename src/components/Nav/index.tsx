import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {BiUserCircle} from 'react-icons/bi'
import './style.scss'

export function NavbarDefault() {
  return (
    <>
      <Navbar bg="ligth">
        <Container>
          <Navbar.Brand>
            RODFINANCE
          </Navbar.Brand>
          <BiUserCircle color='white' size={25}/>
        </Container>
      </Navbar>
    </>
  );
}