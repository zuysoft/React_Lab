import React, {Component} from 'react';
import {VerticalTimeline} from 'react-vertical-timeline-component'
import Carousel from 'react-bootstrap/Carousel';
import { addMainVerticalElement, addVerticalElement, addCarouselImg } from '../writersFunctions';

import writersBackground from '../accerts/bg.jpg';
import writerImg from '../accerts/KorotkevichMain.jpg'
import gallery1 from '../accerts/korotkevichGallery/1.jpg'
import gallery2 from '../accerts/korotkevichGallery/2.jpg'
import gallery3 from '../accerts/korotkevichGallery/3.jpeg'
import gallery4 from '../accerts/korotkevichGallery/4.jpg'
import gallery5 from '../accerts/korotkevichGallery/5.jpg'

import 'react-vertical-timeline-component/style.min.css'
import './css/kupalaStyles.css'

const writerName = 'Владимир Семёнович Короткевич';
const writerLife = '26.11.1930 - 25.07.1984';
const writerBirth = 'Родился Владимир 26 ноября 1930 года в городе Орше (ныне в Витебская область, Белоруссия) в семье интеллигентов. Отец, Семён Тимофеевич, работал инспектором по бюджету в Оршанском районном финансовом отделе. Мать, Надежда Васильевна, окончила могилёвскую Мариинскую гимназию, некоторое время работала учительницей в сельской школе под Рогачёвом, после замужества занялась домашним хозяйством.';
const writerEvacuation = 'Во время Великой Отечественной войны находился с семьёй в эвакуации в Москве, на Рязанщине, в окрестностях Кунгура на Урале, позже в Оренбурге и Киеве. В 1944 году вернулся в Оршу, где получил среднее образование.';
const writerDebute = 'Как поэт дебютировал в 1951 году — опубликовал в оршанской районной газете «Ленинский призыв» два стихотворения: «Тут будет канал» (на русском языке) и «Якубу Коласу» (на белорусском языке).';
const writerJob = 'В 1954—1956 годах работал школьным учителем русского языка и литературы в деревне Лесовичи (Таращанский район Киевской области Украины), а в 1956—1958 годах — в родном городе, Орше.';
const writerDeath = 'Скончался Владимир Короткевич 25 июля 1984 года. Похоронен на Восточном кладбище в Минске.';

const writerYTLink = 'https://www.youtube.com/embed/SWRk1_Y6m5w';
const writerPlaceLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1726.1680843709175!2d30.43633443725889!3d54.51451144350051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46cfe17e6225f789%3A0x157a89110f221bea!2z0JPQvtGA0L7QtNGB0LrQvtC5INGA0L7QtNC40LvRjNC90YvQuSDQtNC-0Lw!5e1!3m2!1sru!2sby!4v1669974801968!5m2!1sru!2sby';

class Korot extends Component{
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
                        {addMainVerticalElement('26.11.1930', 'День рождения писателя', '', writerBirth)}
                        {addVerticalElement('1941 - 1944', 'Период ВОВ', '', writerEvacuation)}
                        {addVerticalElement('1951', 'Творческий дебют', '', writerDebute)}
                        {addVerticalElement('1954 - 1958', 'Трудовая деятельность', '', writerJob)}
                        {addMainVerticalElement('25.07.1984', 'Смерть', '', writerDeath)}
                    </VerticalTimeline>
                </section>
        )
    }
}

export default Korot;