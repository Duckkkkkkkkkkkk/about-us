import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import sprites from './../../img/images/main-sprites.png'
import polina__role from './../../img/titles/polina__role.png'
import nastya__role from './../../img/titles/nastya__role.png'
import about__us from './../../img/titles/logo-about-us.png'
import bg from './../../img/images/bg-main-screen.png'

import styles from './intro.module.css'

const Intro = () => {
    const [isHover1, setIsHover1] = useState(false);

    return ( 
    <div className="position-relative" >
        <div className={styles.mainbg}>
            <Image src={bg} fluid />
        </div>
        <Container>
            <h1 className="text-center display-1 pt-5 mt-5" style={{ letterSpacing: '0.3em'}}>История</h1>

            <div className="row justify-content-center">
                <div className="col-4 d-flex justify-content-end">
                    <h3 className="text-end fs-5 mt-5 pt-4 text-wrap" style={{maxWidth: '179px'}}>Блинова Полина</h3>
                    <Image className='position-absolute pb-5 top-50 translate-middle-y' src={polina__role} style={{transform: 'translateX(-50%)'}}/>
                </div>
                <div className="col-4">
                    <Image className='z-n1 position-absolute mt-5 pt-4 top-0 translate-middle-x' src={sprites} fluid />
                </div>
                <div className="col-4 d-flex justify-content-start">
                    <p className="text-start fs-5 mt-5 pt-4 text-wrap" style={{maxWidth: '179px'}}>Ротина Анастасия</p>
                    <Image className='position-absolute pb-5 top-50 translate-middle-y' src={nastya__role} style={{ transform: 'translateX(-50%)'}}/>
                </div>
            </div>
            <Image className='mt-5 pt-5' src={about__us} fluid />

            <div className="row justify-content-center">
                <div className="col-4 d-flex justify-content-end">
                    <p className={`text-start text-wrap ${styles.notion}`}>
                        Дружим и работаем вместе уже
                        <span> более 2-х лет </span>
                    </p>
                </div>
                <div className="col-4"></div>
                <div className="col-4 d-flex justify-content-start">
                    <p className={`text-start text-wrap ${styles.notion}`}>
                        Выполнили вместе 
                        <span> более 15 проектов </span>
                        в разных сферах
                    </p>
                </div>
            </div>

            <div className="row justify-content-center">
    <div className="col-12 col-md-auto text-center">
        <Button
            className={`btn btn-lg mt-1 btn-circle ${styles.contactButton} ${isHover1 ? styles.dancing : ''}`}
            onMouseEnter={() => setIsHover1(true)}
            onMouseLeave={() => setIsHover1(false)}
        >
            Связаться
        </Button>
    </div>
</div>




            {/* <div className="row justify-content-center">
                <div className="col-4 d-flex justify-content-end">
                    <p className={`text-start text-wrap ${styles.notion}`}>
                        Дружим и работаем вместе уже
                        <span> более 2-х лет </span>
                    </p>
                </div>
                <div className="col-4">
                    <Button
                        className={`contact-button btn btn-lg mt-1 btn-block ${styles.contactButton} ${isHover1 ? styles.dancing : ''}`}
                        onMouseEnter={() => setIsHover1(true)}
                        onMouseLeave={() => setIsHover1(false)}
                    >
                        Связаться
                    </Button>
                </div>
                <div className="col-4 d-flex justify-content-start">
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