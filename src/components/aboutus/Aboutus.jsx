import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

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


import styles from './aboutus.module.css'

const Aboutus = () => {
    return ( 
    <div class="position-relative" >
        {/* <div className={styles.mainbg}>
            <Image src={bg} fluid />
        </div> */}
        <Container>
            <h1 className="text-end col-8 display-1 pt-4" style={{ letterSpacing: '0.3em'}}>Кто же мы?</h1>

            <div className="row" style={{gap: '20px'}}>
                <div className="col-4">
                    <Image className='position-relative mt-5 pt-4 top-0 translate-end-x' style={{ maxWidth: '445px'}} src={polina__sprite} fluid />
                </div>
                <div className="col">
                    <Container className="d-flex mt-4 p-4"> 
                        <div className={styles.about__card}>
                            <div className="mb-4"> 
                                <div className="row g-0"> 
                                    <div className="col-md-3 d-flex align-items-center">
                                        <Image src={polina__photo} className="position-relative translate-end-x" alt="..." fluid />
                                    </div>

                                    <div className="col-md-8 mt-3 pr-3"> 
                                        <div className="card-body"> 
                                            <p className={`card-text ${styles.desc}`}> 
                                                Привет! Я - 
                                                <span>Блинова Полина</span>
                                                . Мне 21 год. Учучь на 3 курсе Программной инженерии в ДГТУ. Эта специальность всеми называется “очень сложная”, однако 
                                                <span>я решила сделать себе вызов</span>
                                                , поэтому поступила на неё. И могу сказать, что успешно справилась и продолжаю в том же духе! Программирование это, конечно, непросто, но здесь много-много креатива.
                                                <span>Сейчас мне полюбился язык Java, и стал симпотизировать React.</span> 
                                            </p> 
                                        </div> 
                                    </div> 
                                </div> 
                            </div>
                        </div>
                    </Container>

                    <Container className="d-flex mt-4 p-4"> 
                        <div className={styles.about__card__big}>
                            <div className="mb-4"> 
                                <div className="row g-0"> 
                                    <div className="col-md-3 d-flex align-items-center">
                                        <Image src={polina__sertificate} className="position-relative translate-end-x" alt="..." style={{ marginLeft: '-70px' }} fluid />
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
                                                <span> Мои хобби</span>
                                                - йога, катание на вейвборде и ролликах, рисование (хоть это и картины по номерам).
                                            </p> 
                                        </div> 
                                    </div> 
                                </div> 
                            </div>
                        </div>
                    </Container>
                </div>
            </div>

            <Image classname='' src={nastya__sprite} fluid />

            <div className="container d-flex mt-4 p-4"> 
                <div className="card mb-3" style={{maxWidth:'772px'}}> 
                    <div className="row g-0"> 
                        <div className="col-md-6"> 
                            <img src={nastya__photo}
                                className="img-fluid rounded-start" alt="..."> 
                            </img>
                        </div> 
                        <div className="col-md-6"> 
                            <div className="card-body"> 
                                <p className={`card-text ${styles.desc}`}> 
                                Всем привет!
                                    <span> Меня зовут Настя</span>
                                    и мне 20 лет. Я - студент ДГТУ по специальности программная инженерия. Я горжусь тем, что выбрала этот путь. Для меня программирование не просто что-то сложное, а что-то катастрофически сложное и непонятное. Так и было до того, как
                                    <span> я в это погрузилась. Сейчас спустя три года изучения кажется, что уже много всего знаешь</span>
                                    , а по факту существует ещё огромное-преогромное количество всего, что необходимо изучить. И это очень круто, так как
                                    <span> нет каких-либо границ в развитии самой себя как специалиста</span> 
                                    и личности, что является мотивацией и отличным "пинком" развиваться дальше!
                                </p> 
                                {/* <p className="card-text"> 
                                    <small className="text-muted"> 
                                        Last updated now 
                                    </small> 
                                </p>  */}
                            </div> 
                        </div> 
                    </div> 
                </div>
            </div>

            <div className="container d-flex mt-4 p-4"> 
                <div className="card mb-3" style={{maxWidth:'772px'}}> 
                    <div className="row g-0"> 
                        <div className="col-md-6"> 
                            <img src={nastya__fashion}
                                className="img-fluid rounded-start" alt="..."> 
                            </img>
                        </div> 
                        <div className="col-md-6"> 
                            <div className="card-body"> 
                                <p className={`card-text ${styles.desc}`}> 
                                    <span>Мои хобби</span>
                                     - моделинг (участие в показах и съёмках),  кастомизация одежды, вязание, игры и музыка (особенно рок и панк) 
                                    <span>- отражают мою творческую натуру</span>
                                    . Очень люблю лицезреть и восхищаться тем, что я создаю, поэтому как раз таки и выбрала для себя 
                                    <span> направление Frontend</span>
                                    Мой путь к успеху только начинается, и
                                    <span> я уверена, что смогу достичь успеха</span>
                                     во всех своих целях и мечтаниях!
                                </p> 
                            </div> 
                        </div> 
                    </div> 
                </div>
            </div>
            
            <Image src={polina__hobby} fluid />
            <Image src={nastya__hobby} fluid />

            <Image src={win} fluid />
            <p>После многократного участия в Форуме программных разработчиков Ростова-на-дону «Хакатон» в качестве волонтеров мы решили попробовать себя как участники. В команде “ПЕРСИКИ” выполняли роли дизайнера и frontend-разработчика. Бесонные ночи, огромное количество правок и обсуждений принесли нам победу!</p>
            <Image src={diploms} fluid />
        </Container>
        </div>
     );
}
 
export default Aboutus;