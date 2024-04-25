import React, { useState, useEffect, useRef } from 'react';
import { Container, Image, Carousel } from "react-bootstrap";

import video from './../../img/video/video.mp4';

import steps from './../../img/designElements/steps.png';
import step01 from './../../img/images/step01.png';
import step02 from './../../img/images/step02.png';
import step03 from './../../img/images/step03.png';
import step04 from './../../img/images/step04.png';
import step05 from './../../img/images/step05.png';

import pic__step01 from './../../img/images/pic-step01.png';
import pic__step02 from './../../img/images/pic-step02.png';
import pic__step03 from './../../img/images/pic-step03.png';
import pic__step04 from './../../img/images/pic-step04.png';


import styles from './itcorgi.module.css';

const ITcorgi = () => {
    const videoRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handlePlayVideo = () => {
        if (videoRef.current && videoRef.current.readyState === 4) {
            videoRef.current.play();
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return ( 
        <div className="position-relative">
            <Container fluid>
                <h1 className={`text-center display-2 pt-5 ${styles.title}`}>ПЕРВЫЙ IT-Corgi</h1>
                <div className="d-flex justify-content-center">
                    <p className={styles.desc}>
                    По производственной практике необходимо было разработать мобильное приложение. Мы выбрали 
                    <span> приложение для приобретения онлайн-курсов</span>
                    . Название IT-Corgi связано с космической любовью Полины к породе собак Корги. 
                    <span> Это наш первый совместный IT-проект!</span>
                    </p>
                </div>
                {windowWidth >= 768 ? (
                    <>
                        <div className="col-md-10 offset-md-0 align-items-end mb-0">
                            <Image src={steps} className='ml-md-5' alt="..." fluid style={{marginLeft: 'auto', marginRight: 'auto'}} />
                        </div>
                        <div className="row justify-content-center align-items-start mt-0">
                            <div className="col-md-8 offset-md-2 text-center">
                                <div className="embed-responsive embed-responsive-1by1">
                                    <video 
                                        ref={videoRef} 
                                        className="embed-responsive-item" 
                                        src={video} 
                                        controls
                                        style={{maxHeight: '550px'}}
                                    >
                                    </video>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <Carousel controls indicators className="carousel-sm mx-auto" style={{maxWidth: '80%', maxHeight: '300px'}}>
                        <Carousel.Item>
                            <div className="row justify-content-center g-0">
                                <div className="col">
                                    <Image className="d-block mx-auto mb-5" src={step01} alt="slide 1" />
                                </div>
                                <div className="col">
                                    <Image className="d-block mx-auto mb-5" src={pic__step01} alt="slide 1" style={{maxHeight: '300px'}}/>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="row justify-content-center g-0">
                                <div className="col">
                                    <Image className="d-block mx-auto mb-5" src={step02} alt="slide 2" />
                                </div>
                                <div className="col">
                                    <Image className="d-block mx-auto mb-5" src={pic__step02} alt="slide 2" style={{maxHeight: '300px'}}/>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="row justify-content-center g-0">
                                <div className="col">
                                    <Image className="d-block mx-auto mb-5" src={step03} alt="slide 3" />
                                </div>
                                <div className="col">
                                    <Image className="d-block mx-auto mb-5" src={pic__step03} alt="slide 3" style={{maxHeight: '200px'}}/>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="row justify-content-center g-0">
                                <div className="col">
                                    <Image className="d-block mx-auto mb-5" src={step04} alt="slide 4" />
                                </div>
                                <div className="col">
                                    <Image className="d-block mx-auto mb-5" src={pic__step04} alt="slide 4" style={{maxHeight: '200px'}}/>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="row justify-content-center g-0">
                                <div className="col">
                                    <Image className="d-block mx-auto mb-5" src={step05} alt="slide 5" />
                                </div>
                                <div className="col">
                                <div className="embed-responsive embed-responsive-1by1">
                                    <video 
                                        ref={videoRef} 
                                        className="embed-responsive-item" 
                                        src={video} 
                                        controls
                                        style={{maxHeight: '200px'}}
                                    >
                                    </video>
                                </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                )}
            </Container>
        </div>
    );
}
 
export default ITcorgi;
