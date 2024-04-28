import { Container, Image, Carousel } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive';

import freshcode__code from './../../img/images/freshcode-code.png';
import freshcode__pic from './../../img/images/freshcode-pic.png'
import freshcode__slide01 from './../../img/images/freshcode-slide01.png';
import freshcode__slide02 from './../../img/images/freshcode-slide02.png';
import freshcode__slide03 from './../../img/images/freshcode-slide03.png';
import freshcode__slide04 from './../../img/images/freshcode-slide04.png';
import freshcode__slide05 from './../../img/images/freshcode-slide05.png';
import for__user from './../../img/titles/for-user.png';
import for__admin from './../../img/titles/for-admin.png';

import styles from './freshcode.module.css';

const Freshcode = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 767 });

    return ( 
        <div className="position-relative" id="freshcode">
            <Container>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <div className={`row d-flex justify-content-center ${isSmallScreen ? 'flex-column-reverse' : ''}`}>
                        <div className={`col-5 offset-1 ${isSmallScreen ? 'col-10 offset-1 mb-4' : ''}`}>
                            <h1 className={`text-${isSmallScreen ? 'center' : 'end'} display-2 pt-5 mb-0`} style={{ letterSpacing: '0.08em'}}>
                                FRESH CODE
                            </h1>      
                            <p className={`text-${isSmallScreen ? 'center' : 'end'} m-0`} style={{ color: 'white'}}>Хакатон и всё? нет!</p>
                            <p className={`text-start mt-5 ${styles.desc}`}>
                                ПЕРСИКИ настолько вдохновились командой VK Mini Apps, что решили подать заявку на
                                <span> ежегодную грантовую программу Fresh Code 2023. </span>
                                Мы принялись далее развивать «УЧАСТВУЙ». 
                                <span> «УЧАСТВУЙ» </span>
                                - это наше VK Mini Apps с интегрированной системой баллов для организации и привлечения внимания к внутренним мероприятиям учебного заведения.
                            </p>
                            <Image src={freshcode__code} className={`justify-content-end mt-5 ${styles.freshcode__code}`} alt="..." fluid />
                        </div>
                        {!isSmallScreen && (
                            <div className="col-6 position-relative">
                                <Image className={`z-n1 position-absolute translate-middle-x ${styles.phone}`} src={freshcode__pic} fluid />
                            </div>
                        )}
                    </div>
                    {isSmallScreen && (
                        <div className="col-6 position-relative">
                            <Image className={`z-n1 position-absolute translate-middle-x ${styles.phone}`} src={freshcode__pic} fluid />
                        </div>
                    )}
                </div>

                <Carousel controls indicators className="carousel-sm mx-auto" style={{maxWidth: '80%'}}>
                    <Carousel.Item>
                        <div className="justify-content-center mb-2">
                            <Image className="d-block mx-auto mb-5" src={for__user} alt="slide 0" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="justify-content-center mb-2">
                            <Image className="d-block mx-auto mb-5" src={freshcode__slide01} alt="slide 1" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="justify-content-center mb-2">
                            <Image className="d-block mx-auto mb-5" src={freshcode__slide02} alt="slide 2" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="justify-content-center mb-2">
                            <Image className="d-block mx-auto mb-5" src={freshcode__slide03} alt="slide 3" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="justify-content-center mb-2">
                            <Image className="d-block mx-auto mb-5" src={for__admin} alt="slide 4" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="justify-content-center mb-2">
                            <Image className="d-block mx-auto mb-5" src={freshcode__slide04} alt="slide 5" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="justify-content-center mb-2">
                            <Image className="d-block mx-auto mb-5" src={freshcode__slide05} alt="slide 6" />
                        </div>
                    </Carousel.Item>
                </Carousel>

            </Container>
        </div>
     );
}
 
export default Freshcode;
