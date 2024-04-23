import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import sprites from './../../img/images/main-sprites.png'
import about__us from './../../img/titles/logo-about-us.png'
import bg from './../../img/images/bg-main-screen.png'

import styles from './intro.module.css'

const Intro = () => {
    const [isHover1, setIsHover1] = useState(false);

    return ( 
    <div class="position-relative" >
        <div className={styles.mainbg}>
            <Image src={bg} fluid />
        </div>
        <Container>
            <h1 className="text-center display-1 pt-5 mt-5" style={{ letterSpacing: '0.3em'}}>История</h1>

            <div class="row justify-content-center">
                <div class="col-4 d-flex justify-content-end">
                    <h3 className="text-start fs-5 mt-5 pt-4 text-wrap" style={{maxWidth: '179px'}}>Блинова Полина</h3>
                </div>
                <div class="col-4">
                    <Image className='z-n1 position-absolute mt-5 pt-4 top-0 translate-middle-x' src={sprites} fluid />
                </div>
                <div class="col-4 d-flex justify-content-start">
                    <p className="text-start fs-5 mt-5 pt-4 text-wrap" style={{maxWidth: '179px'}}>Ротина Анастасия</p>
                </div>
            </div>
            <Image className='mt-5 pt-5' src={about__us} fluid />

            <div class="row justify-content-center">
                <div class="col-4 d-flex justify-content-end">
                    <p className={`text-start text-wrap ${styles.notion}`}>
                        Дружим и работаем вместе уже
                        <span> более 2-х лет </span>
                    </p>
                </div>
                <div class="col-4"></div>
                <div class="col-4 d-flex justify-content-start">
                    <p className={`text-start text-wrap ${styles.notion}`}>
                        Выполнили вместе 
                        <span> более 15 проектов </span>
                        в разных сферах
                    </p>
                </div>
            </div>

            <div class="row justify-content-center">
    <div class="col-12 text-center">
        <Button
            className={`btn btn-lg mt-1 ml-5 mr-5 btn-circle ${styles.contactButton} ${isHover1 ? styles.dancing : ''} w-100`}
            onMouseEnter={() => setIsHover1(true)}
            onMouseLeave={() => setIsHover1(false)}
        >
            Связаться
        </Button>
    </div>
</div>



            {/* <div class="row justify-content-center">
                <div class="col-4 d-flex justify-content-end">
                    <p className={`text-start text-wrap ${styles.notion}`}>
                        Дружим и работаем вместе уже
                        <span> более 2-х лет </span>
                    </p>
                </div>
                <div class="col-4">
                    <Button
                        className={`contact-button btn btn-lg mt-1 btn-block ${styles.contactButton} ${isHover1 ? styles.dancing : ''}`}
                        onMouseEnter={() => setIsHover1(true)}
                        onMouseLeave={() => setIsHover1(false)}
                    >
                        Связаться
                    </Button>
                </div>
                <div class="col-4 d-flex justify-content-start">
                    <p className={`text-start text-wrap ${styles.notion}`}>
                        Выполнили вместе 
                        <span> более 15 проектов</span>
                        в разных сферах
                    </p>
                </div>
            </div> */}

        </Container>
    </div>
     );
}
 
export default Intro;