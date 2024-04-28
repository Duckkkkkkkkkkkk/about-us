import { Container, Image, Navbar, Nav } from 'react-bootstrap';
import AnchorLink from "react-anchor-link-smooth-scroll";

import logo from './../../img/titles/logo.png';
import email__icon from './../../img/designElements/mail-icon.png';
import phone__icon from './../../img/designElements/phone-icon.png';
import telegram__icon from './../../img/designElements/telegram-icon.png';
import heart__icon from './../../img/designElements/heart-icon.png';

import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className="bg-black text-light text-center">
            <Container>
                <div className="d-flex justify-content-center align-items-center pt-2">
                    <Image src={logo} alt="logo" fluid />
                </div>
                <div className="d-flex justify-content-center align-items-center mt-2">
                    <Navbar>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: 'white !important' }} />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                            <Nav className={`${styles.navbar} flex-column flex-md-row justify-content-center align-items-center`}>
                                <AnchorLink href="#about-us" className={`text-light ${styles.nav__link}`}>Кто и что</AnchorLink>
                                <span className={styles.separator}>|</span>
                                <div className={styles.separator2}></div>
                                <AnchorLink href="#it-corgi" className={`text-light ${styles.nav__link}`}>первый IT-Corgi</AnchorLink>
                                <span className={styles.separator}>|</span>
                                <div className={styles.separator2}></div>
                                <AnchorLink href="#freshcode" className={`text-light ${styles.nav__link}`}>Fresh Code</AnchorLink>
                                <span className={styles.separator}>|</span>
                                <div className={styles.separator2}></div>
                                <AnchorLink href="#contacts" className={`text-light ${styles.nav__link}`}>Контакты</AnchorLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div className="col-md-10 offset-md-2 pt-3">
                    <div className="row">
                    <div className="col-lg-4 col-sm-12 col-xs-12 text-md-start text-center">
                        <p className={styles.footer__title}>Ротина Анастасия</p>
                        <p className={styles.text}><Image className={styles.icon} src={email__icon} fluid/>alkim345@mail.ru</p>
                        <p className={styles.text}><Image className={styles.icon} src={telegram__icon} fluid/>@Duckkkkkkk</p>
                        <p className={styles.text}><Image className={styles.icon} src={phone__icon} fluid/>8 (900) 127 72 62</p>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-xs-12 text-md-start text-center">
                        <p className={styles.footer__title}>Блинова Полина</p>
                        <p className={styles.text}><Image className={styles.icon} src={email__icon} fluid/>polina.krut.573@gmail.com</p>
                        <p className={styles.text}><Image className={styles.icon} src={telegram__icon} fluid/>@Po_l_ik</p>
                        <p className={styles.text}><Image className={styles.icon} src={phone__icon} fluid/>8 (952) 564 12 86</p>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-xs-12 text-md-start text-center">
                        <p className={styles.footer__title}>2024</p>
                        <p className={styles.text}><Image className={styles.icon} src={heart__icon} fluid/>Мы старались!</p>
                    </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Footer;
