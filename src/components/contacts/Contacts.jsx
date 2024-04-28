import React, { useState } from 'react';

import { Container, Image } from "react-bootstrap";

import sprites from './../../img/images/contact-sprites.png';
import chat__button from './../../img/designElements/chat-button.png';
import nastya__button from './../../img/designElements/nastya-button.png';
import polina__button from './../../img/designElements/polina-button.png';

import styles from './contacts.module.css';

const Contacts = () => {
    const [isHover1, setIsHover1] = useState(false);
    const [isHover2, setIsHover2] = useState(false);
    const [isHover3, setIsHover3] = useState(false);

    return ( 
        <div className="position-relative" id="contacts">
            <Container>
                <h1 className={`text-center pt-5 ${styles.title}`}>Заинтересовали?</h1>
                <h1 className={`text-center ${styles.title2}`}>Ждем фидбек в чатике</h1>
                <Image className='z-n1 position-absolute translate-middle-x' src={sprites} fluid />
                <div className="text-center">
                    <div className="d-flex align-items-center justify-content-center flex-column">
                        <div className="d-flex align-items-center justify-content-center">
                            <a href="https://t.me/+M3fMYyWScvk5MmQy" target="_blank" rel="noopener noreferrer">
                                <Image src={chat__button} 
                                className={`${styles.button} ${isHover1 ? styles.dancing : ''}`} 
                                alt="Chat button" 
                                onMouseEnter={() => setIsHover1(true)}
                                onMouseLeave={() => setIsHover1(false)}
                                />
                            </a>
                        </div>
                        <div>
                            <p className={`pt-2 ${styles.hint}`}>*нажми для перехода в Telegram-чат</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <a href="https://t.me/Duckkkkkkk" target="_blank" rel="noopener noreferrer">
                            <Image src={nastya__button} 
                                className={`${styles.button} ${isHover2 ? styles.dancing : ''}`} 
                                alt="Nastya button" 
                                onMouseEnter={() => setIsHover2(true)}
                                onMouseLeave={() => setIsHover2(false)}
                            />
                        </a>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <a href="https://t.me/Po_l_ik" target="_blank" rel="noopener noreferrer">
                            <Image src={polina__button} 
                                className={`${styles.button} ${isHover3 ? styles.dancing : ''}`} 
                                alt="Polina button" 
                                onMouseEnter={() => setIsHover3(true)}
                                onMouseLeave={() => setIsHover3(false)}
                            />
                        </a>
                    </div>
                </div>
            </Container>
            <div className={styles.padding}></div>
        </div>
     );
}
 
export default Contacts;

