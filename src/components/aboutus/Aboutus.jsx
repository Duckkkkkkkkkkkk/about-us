import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

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
            <h1 className="text-start display-1 pt-4" style={{ letterSpacing: '0.3em'}}>Кто же мы?</h1>

            <Image src={polina__sprite} fluid />
            <Image src={polina__photo} fluid />
            <p>Привет! Я - Блинова Полина. Мне 21 год. Учучь на 3 курсе Программной инженерии в ДГТУ. Эта специальность всеми называется “очень сложная”, однако я решила сделать себе вызов, поэтому поступила на неё. И могу сказать, что успешно справилась и продолжаю в том же духе! Программирование это, конечно, непросто, но здесь много-много креатива. Сейчас мне полюбился язык Java, и стал симпотизировать React.</p>
            <Image src={polina__hobby} fluid />
            <Image src={polina__sertificate} fluid />
            <p>Год назад мне открылся дизайн. Не дизайн одежды, а именно веб-дизайн. Я прошла большой практический онлайн-курс «Профессия-Дизайнер» от агентства «Время Первых». Было безумно интересно и полезно! Меня научили разработки дизайна для продающих сайтов, презентаций и PDF-материалов. После прохождения курса меня пригласили в Москву на «Ночь дизайна», где я и ребята с разных уголков нашей страны должны были за полтора часа разработать дизайн для главной страницы сайта. Это мероприятие дало огромный опыт! Мои хобби - йога, катание на вейвборде и ролликах, рисование (хоть это и картины по номерам).</p>

            <Image src={nastya__sprite} fluid />
            <Image src={nastya__photo} fluid />
            <p>Всем привет! Меня зовут Настя и мне 20 лет. Я - студент ДГТУ по специальности программная инженерия. Я горжусь тем, что выбрала этот путь. Для меня программирование не просто что-то сложное, а что-то катастрофически сложное и непонятное. Так и было до того, как я в это погрузилась. Сейчас спустя три года изучения кажется, что уже много всего знаешь, а по факту существует ещё огромное-преогромное количество всего, что необходимо изучить. И это очень круто, так как нет каких-либо границ в развитии самой себя как специалиста и личности, что является мотивацией и отличным "пинком" развиваться дальше.</p>
            <Image src={nastya__hobby} fluid />
            <Image src={nastya__fashion} fluid />
            <p>Мои хобби - моделинг (участие в показах и съёмках),  кастомизация одежды, вязание, игры и музыка (особенно рок и панк) - отражают мою творческую натуру. Очень люблю лицезреть и восхищаться тем, что я создаю, поэтому как раз таки и выбрала для себя направление Frontend. Мой путь к успеху только начинается, и я уверена, что смогу достичь его во всех своих целях и мечтаниях!</p>

            <Image src={win} fluid />
            <p>После многократного участия в Форуме программных разработчиков Ростова-на-дону «Хакатон» в качестве волонтеров мы решили попробовать себя как участники. В команде “ПЕРСИКИ” выполняли роли дизайнера и frontend-разработчика. Бесонные ночи, огромное количество правок и обсуждений принесли нам победу!</p>
            <Image src={diploms} fluid />
        </Container>
        </div>
     );
}
 
export default Aboutus;