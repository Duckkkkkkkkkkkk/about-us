import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from './../../img/titles/logo.png'

const Header = () => {
    return ( 
        <Navbar expand="md" className="bg-transparent" fixed="top">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="header" style={{ gap: '30px' }}>
                        <Nav.Link href="#home" className="text-light" style={{ fontSize: '16px', fontWeight: 'normal' }}>Кто и что</Nav.Link>
                        <Nav.Link href="#link" className="text-light" style={{ fontSize: '16px', fontWeight: 'normal' }}>IT-Corgi</Nav.Link>
                        <Navbar.Brand href="#home" style={{ paddingLeft: '15px' }}>
                            <Image src={logo} fluid />
                        </Navbar.Brand>
                        <Nav.Link href="#home" className="text-light" style={{ fontSize: '16px', fontWeight: 'normal' }}>FreshCode</Nav.Link>
                        <Nav.Link href="#link" className="text-light" style={{ fontSize: '16px', fontWeight: 'normal' }}>Почему мы</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
 
export default Header;
