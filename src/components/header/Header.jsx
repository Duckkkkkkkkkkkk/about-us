import React, { useState } from 'react';

import { Container, Image, Nav, Navbar } from 'react-bootstrap';

import burger__icon from './../../img/designElements/burger_icon.png';
import logo from './../../img/titles/logo.png';
import AnchorLink from "react-anchor-link-smooth-scroll";
import styles from './header.module.css';

const Header = () => {
    const [isHover1, setIsHover1] = useState(false);

    return (
        <Navbar className="bg-black position-fixed w-100" style={{ top: 0, zIndex: 1000 }} expand="md">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
                    <Image src={burger__icon} 
                    className={`${styles.button} ${isHover1 ? styles.dancing : ''}`} 
                    style={{maxWidth: '30px'}} 
                    onMouseEnter={() => setIsHover1(true)}
                    onMouseLeave={() => setIsHover1(false)}
                    fluid />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className={styles.header}>
                        <AnchorLink href="#about-us" className={`text-light ${styles.nav__link}`}>Кто и что</AnchorLink>
                        <AnchorLink href="#it-corgi" className={`text-light ${styles.nav__link}`}>первый IT-Corgi</AnchorLink>
                        <Navbar.Brand href="#main-screen">
                            <Image src={logo} fluid />
                        </Navbar.Brand>
                        <AnchorLink href="#freshcode" className={`text-light ${styles.nav__link}`}>Fresh Code</AnchorLink>
                        <AnchorLink href="#contacts" className={`text-light ${styles.nav__link}`}>Контакты</AnchorLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
