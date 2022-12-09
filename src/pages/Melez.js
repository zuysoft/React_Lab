import React, {Component} from 'react';
import {VerticalTimeline} from 'react-vertical-timeline-component'
import Carousel from 'react-bootstrap/Carousel';
import { addMainVerticalElement, addVerticalElement, addCarouselImg } from '../writersFunctions';

import writersBackground from '../accerts/bgdayD.jpg';
import writerImg from '../accerts/MelezMain.jpg'
import gallery1 from '../accerts/melezGallery/1.jpg'
import gallery2 from '../accerts/melezGallery/2.jpg'
import gallery3 from '../accerts/melezGallery/3.jpg'
import gallery4 from '../accerts/melezGallery/4.jpg'
import gallery5 from '../accerts/melezGallery/5.jpg'

import 'react-vertical-timeline-component/style.min.css'
import './css/kupalaStyles.css'

const writerName = 'Иван Павлович Мележ';
const writerLife = '08.02.1921 - 09.08.1976';
const writerBirth = 'Родился в крестьянской семье, земле было мало. Отец — Павел Федорович, делал гонта, деже, цабэркі. Мать — Мария Денисовна, родом из Каранёўкі, знала много народных песен и любила петь. Дети сызмальства втягивались в работу. У Ивана было обычное деревенское детство и юность, с пяти лет пас свиней, после овец, телят, корову, позднее водил в ночное коня.';
const writerTeaching = 'В 1938 году окончил среднюю школу в местечке Хойники. Во время учебы Мележ много рисует и в будущем хочет стать художником.С ноября 1942 года преподавал военную подготовку и заочно учился на литературном факультете Молдавского пединститута. В 1943-1944 годах преподавал военную подготовку в Белорусском государственном университете, который находился в то время под Москвой.\n' +
    '\n' +
    'В 1945 заочно заканчивает философский факультет БГУ. Одновременно с учебой работает в журнале “Полымя”. Закончил аспирантуру и устроился работать в БГУ преподавателем беларусской литературы.';
const writerMainPlace = 'В 1944 году переехал в Минск.';
const writerPublications = 'Дебютировал в печати стихотворением «Родине» в газете «Красная смена» в 1939 году, прозой на русском языке — рассказом «Последняя операция» — в газете «Бугурусланская правда» в 1943 году, прозой на белорусском языке — рассказом «Встреча в больнице» — в газете «Звезда» за 25 ноября 1944 года.';
const writerDeath = 'Умер 9 августа 1976 года в 55 лет и похоронен на Восточном кладбище в Минске.';

const writerYTLink = 'https://www.youtube.com/embed/NwV8EoU_14M';
const writerPlaceLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2459.9681273179276!2d29.661072334618883!3d51.93453491480222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x88cecd7b6c3df812!2zNTHCsDU2JzA0LjMiTiAyOcKwMzknNTYuMCJF!5e0!3m2!1sru!2sby!4v1670265588423!5m2!1sru!2sby" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';



class Melez extends Component{
    render() {
        var mainImgWidth, mainImgHeight, componentsWidth, componentsHeight, itemHeight, itemWidth;
        if(window.innerWidth >= 1000){
            mainImgWidth = 40;
            componentsWidth = 80;
            itemHeight = 700;
            itemWidth = '';
        }
        else{
            mainImgWidth = 75;
            componentsWidth = 100;
            itemHeight = window.innerWidth * 1.4;
            itemWidth = 90;
        }
        mainImgHeight = mainImgWidth / 100 * window.innerWidth / 1080 * 1015;
        if(window.innerWidth < 1645 && window.innerWidth > 1000)
            componentsHeight = 0.25 * mainImgHeight;
        else if(window.innerWidth >= 1645)
            componentsHeight = 0.35 * mainImgHeight;
        else
            componentsHeight = 0.85 * mainImgHeight;
        return (
            <section style={{backgroundImage:'url(' + writersBackground + ')'}}>
                <div className = 'writerMainInfoBlock'>
                    <img src = {writerImg} style = {{width: mainImgWidth + '%', height: mainImgHeight + 'px'}}/>
                    <div className = 'writerMainInfo' style={{width: mainImgWidth + '%'}}>
                        <h1>Деятель дня</h1>
                        <h2>{writerName}</h2>
                        <p>{writerLife}</p>
                        <div className='googleContainer'>
                            <h3>Видео о писателе</h3>
                            <iframe
                                allowFullScreen = {true}
                                allow = 'accelerator'
                                loading = 'lazy'
                                className='ytEmbed'
                                style={{width: componentsWidth + '%',height: componentsHeight + 'px'}}
                                src = {'' + writerYTLink}/>
                            <h3>Место деятельности писателя</h3>
                            <div className='mapContainer' style={{width: componentsWidth + '%',height: componentsHeight + 'px'}}>
                                <iframe src = {writerPlaceLink} frameborder="0" style={{border: 0, borderRadius:'5px', width:'100%', height:'100%'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='carouselTitle'>Жизнь и творчество</h2>
                <Carousel>
                    {addCarouselImg(gallery1, itemHeight, itemWidth)}
                    {addCarouselImg(gallery2, itemHeight, itemWidth)}
                    {addCarouselImg(gallery3, itemHeight, itemWidth)}
                    {addCarouselImg(gallery4, itemHeight, itemWidth)}
                    {addCarouselImg(gallery5, itemHeight, itemWidth)}
                </Carousel>
                <VerticalTimeline lineColor='#fff'>
                    {addMainVerticalElement('08.02.1921', 'День рождения писателя', '', writerBirth)}
                    {addVerticalElement('1939 - 1944', 'Первое творчество', '', writerPublications)}
                    {addVerticalElement('1938 - 1945', 'Учительская деятельность', '', writerTeaching)}
                    {addVerticalElement('1944', 'Место деятельности', '', writerMainPlace)}
                    {addMainVerticalElement('09.08.1976', 'Смерть', '', writerDeath)}
                </VerticalTimeline>
            </section>
        )
    }
}

export default Melez;