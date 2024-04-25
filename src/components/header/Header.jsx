import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from './../../img/titles/logo.png';
import styles from './header.module.css';

const Header = () => {
    return (
        <Navbar expand="md" className="bg-black position-fixed w-100" style={{ top: 0, zIndex: 1000 }}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className={styles.header}>
                        <Nav.Link href="#home" className={`text-light ${styles.nav__link}`}>Кто и что</Nav.Link>
                        <Nav.Link href="#link" className={`text-light ${styles.nav__link}`}>первый IT-Corgi</Nav.Link>
                        <Navbar.Brand className='pl-2 pb-0' href="#home">
                            <Image src={logo} fluid />
                        </Navbar.Brand>
                        <Nav.Link href="#home" className={`text-light ${styles.nav__link}`}>Fresh Code</Nav.Link>
                        <Nav.Link href="#link" className={`text-light ${styles.nav__link}`}>Контакты</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
