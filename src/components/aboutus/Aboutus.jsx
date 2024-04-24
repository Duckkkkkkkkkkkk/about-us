import { Container, Image, Button, Carousel, CarouselItem } from 'react-bootstrap';

import bg from './../../img/images/bg-about-us.png'
import polina__photo from './../../img/images/polina-photo.png'
import polina__sprite from './../../img/images/polina__sprite.png'
import nastya__photo from './../../img/images/nastya-photo.png'
import nastya__sprite from './../../img/images/nastya__sprite.png'
import polina__sertificate from './../../img/images/sertificate.png'
import nastya__fashion from './../../img/images/moda-nastya.png'
import diploms from './../../img/images/diplom.png'
import polina__hobby from './../../img/titles/design.png'
import nastya__hobby from './../../img/titles/modeling-frontend.png'
import win from './../../img/titles/win.png'

import slide11 from './../../img/images/slide11.png'
import slide12 from './../../img/images/slide12.png'
import slide21 from './../../img/images/slide21.png'
import slide22 from './../../img/images/slide22.png'
import slide31 from './../../img/images/slide31.png'
import slide32 from './../../img/images/slide32.png'


import styles from './aboutus.module.css'

const Aboutus = () => {
    return ( 
    <div className="position-relative" >
        {/* <div className={styles.mainbg}>
            <Image src={bg} fluid />
        </div> */}
        <Container>
            <h1 className="text-end col-8 display-1 pt-5" style={{ letterSpacing: '0.3em'}}>Кто же мы?</h1>

            <div className="row " style={{gap: '20px'}}>
                <div className="col-4">
                    <Image className='z-n1 position-relative mt-5 pt-4 top-0 translate-start-x' src={polina__sprite} fluid />
                </div>
                <div className="col-7"> 
                    <Container className="d-flex mt-4"> 
                        <div className={styles.about__card}>
                            <div className="row g-0"> 
                                <div className="col-md-3 d-flex align-items-center">
                                    <Image src={polina__photo} className="position-relative translate-end-x" alt="..." fluid style={{marginLeft: 'auto', marginRight: 'auto'}} />
                                </div>

                                <div className="col-md-9 mt-3 pr-3"> 
                                    <div className="card-body"> 
                                        <p className={`card-text ${styles.desc}`}> 
                                            Привет! Я - 
                                            <span> Блинова Полина</span>
                                            . Мне 21 год. Учучь на 3 курсе Программной инженерии в ДГТУ. Эта специальность всеми называется “очень сложная”, однако 
                                            <span> я решила сделать себе вызов</span>
                                            , поэтому поступила на неё. И могу сказать, что успешно справилась и продолжаю в том же духе! Программирование это, конечно, непросто, но здесь много-много креатива.
                                            <span> Сейчас мне полюбился язык Java, и стал симпотизировать React.</span> 
                                        </p> 
                                    </div> 
                                </div> 
                            </div> 
                        </div>
                    </Container>

                    <div style={{ height: '40px' }}></div>

                    <Container className="d-flex mt-4 p-4"> 
                        <div className={styles.about__card__big}>
                            <div className="row g-0"> 
                                <div className="col-md-3 d-flex flex-column align-items-center">
                                    <Image src={polina__hobby} className={`mb-3 ${styles.custom__margin}`} alt="polina's hobbies" style={{marginTop: '-30px'}} fluid />
                                    <Image src={polina__sertificate} className={`mb-3 ${styles.custom__margin}`} alt="polina's sertificate" fluid />
                                </div>

                                <div className="col-md-9 mt-3"> 
                                    <div className="card-body"> 
                                        <p className={`card-text ${styles.desc}`}> 
                                            Год назад мне открылся
                                            <span> дизайн.</span>
                                            Не дизайн одежды, а именно веб-дизайн. Я прошла большой практический онлайн-курс
                                            <span> «Профессия-Дизайнер» от агентства «Время Первых»</span>
                                            . Было безумно интересно и полезно! Меня научили разработки дизайна для продающих сайтов, презентаций и PDF-материалов. После прохождения курса                                 
                                            <span> меня пригласили в Москву на «Ночь дизайна»</span>
                                            , где я и ребята с разных уголков нашей страны должны были за полтора часа разработать дизайн для главной страницы сайта. Это мероприятие дало огромный опыт!
                                            <span> Мои хобби </span>
                                            - йога, катание на вейвборде и ролликах, рисование (хоть это и картины по номерам).
                                        </p> 
                                    </div> 
                                </div> 
                            </div> 
                        </div>
                    </Container>
                </div>
            </div>

            <div className="row " style={{gap: '10px'}}>
                <div className="col"> 
                    <Container className="d-flex justify-content-end mt-4 align-items-center"> 
                        <div className={styles.about__card}>
                            <div className=""> 
                                <div className="row g-0"> 
                                    <div className="col-md-3 d-flex align-items-center">
                                        <Image src={nastya__photo} className="position-relative translate-end-x" alt="..." fluid style={{marginLeft: 'auto', marginRight: 'auto'}} />
                                    </div>

                                    <div className="col-md-9 mt-3 pr-3"> 
                                        <div className="card-body"> 
                                            <p className={`card-text ${styles.desc}`}> 
                                                Всем привет!
                                                <span> Меня зовут Настя</span>
                                                и мне 20 лет. Я - студент ДГТУ по специальности программная инженерия. Я горжусь тем, что выбрала этот путь. Для меня программирование не просто что-то сложное, а что-то катастрофически сложное и непонятное. Так и было до того, как
                                                <span> я в это погрузилась. Сейчас, спустя три года изучения, кажется, что уже много всего знаешь</span>
                                                ,а по факту существует ещё огромное-преогромное количество всего, что необходимо изучить. И это очень круто, так как
                                                <span> нет каких-либо границ в развитии самой себя как специалиста </span> 
                                                и личности, что является мотивацией и отличным "пинком" развиваться дальше!
                                            </p> 
                                        </div> 
                                    </div> 
                                </div> 
                            </div>
                        </div>
                    </Container>

                    <div style={{ height: '40px' }}></div>

                    <Container className="d-flex justify-content-end mt-4 position-relative"> 
                        <div className={styles.about__card__big}>
                            <div className="mb-4"> 
                                <div className="row g-0"> 
                                <div className="col-md-3 d-flex flex-column align-items-center">
                                    <Image src={nastya__hobby} className={`mb-3 ${styles.custom__margin2}`} alt="nastya's hobbies" style={{marginTop: '-30px'}} fluid />
                                    <Image src={nastya__fashion} className={`mb-3 ${styles.custom__margin3}`} alt="nastya's fashion" fluid />
                                </div>

                                    <div className="col-md-9 mt-3"> 
                                        <div className="card-body"> 
                                            <p className={`card-text ${styles.desc}`}> 
                                                <span>Мои хобби</span>
                                                 - моделинг (участие в показах и съёмках),  кастомизация одежды, вязание, игры и музыка (особенно рок и панк) 
                                                <span>- отражают мою творческую натуру</span>
                                                . Очень люблю лицезреть и восхищаться тем, что я создаю, поэтому как раз таки и выбрала для себя 
                                                <span> направление Frontend. </span>
                                                Мой путь к успеху только начинается, и
                                                <span> я уверена, что смогу достичь успеха</span>
                                                 во всех своих целях и мечтаниях!
                                            </p> 
                                        </div> 
                                    </div> 
                                </div> 
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="col-4">
                    <Image className='z-n1 position-relative mt-5 pt-4 top-0 translate-start-x' src={nastya__sprite} fluid />
                </div>
            </div>

            <div style={{ height: '40px' }}></div>

            <div className="row " style={{gap: '20px'}}>
                <div className="col-5">
                    <Image className='position-relativetop-0 translate-start-x align-items-start' style={{marginTop: '-40px'}} src={diploms} fluid />
                </div>
                <div className="col-5"> 
                    <Container className="d-flex mt-4 p-4"> 
                        <div className={styles.about__card__big}>
                            <div className="col-md-3 d-flex flex-column align-items-end">
                                    <Image src={win} className={`mb-3 ${styles.custom__margin}`} alt="polina's hobbies" style={{marginTop: '-40px'}} fluid />
                                </div>
                            <div className="row g-0">
                                <div className="col-md-12 mt-3"> 
                                    <div className="card-body"> 
                                        <p className={`card-text ${styles.desc}`}> 
                                            После многократного участия в Форуме программных разработчиков Ростова-на-дону
                                            <span> «Хакатон» </span>
                                            в качестве волонтеров мы решили попробовать себя как участники. В команде
                                            <span> “ПЕРСИКИ” </span>
                                            выполняли роли дизайнера и frontend-разработчика. Бесонные ночи, огромное количество правок и обсуждений принесли
                                            <span> нам победу!</span>
                                        </p> 
                                    </div> 
                                </div> 
                            </div> 
                        </div>
                    </Container>
                </div>
            </div>

            <Carousel controls indicators className="carousel-sm mx-auto" style={{maxWidth: '70%'}}>
                <Carousel.Item>
                    <div className="row justify-content-center g-0">
                        <div className="col">
                            <Image className="d-block mx-auto mb-5" src={slide11} alt="slide 1" />
                        </div>
                        <div className="col">
                            <Image className="d-block mx-auto mb-5" src={slide12} alt="slide 1" />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row justify-content-center g-0">
                        <div className="col">
                            <Image className="d-block mx-auto mb-5" src={slide21} alt="slide 2" />
                        </div>
                        <div className="col">
                            <Image className="d-block mx-auto mb-5" src={slide22} alt="slide 2" />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row justify-content-center g-0">
                        <div className="col">
                            <Image className="d-block mx-auto mb-5" src={slide31} alt="slide 3" />
                        </div>
                        <div className="col">
                            <Image className="d-block mx-auto mb-5" src={slide32} alt="slide 3" />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </Container>
    </div>
     );
}
 
export default Aboutus;