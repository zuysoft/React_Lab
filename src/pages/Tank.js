import React, {Component} from 'react';
import {VerticalTimeline} from 'react-vertical-timeline-component'
import Carousel from 'react-bootstrap/Carousel';
import { addMainVerticalElement, addVerticalElement, addCarouselImg } from '../writersFunctions';

import writersBackground from '../accerts/bg.jpg';
import writerImg from '../accerts/TankMain.jpg'
import gallery1 from '../accerts/tankGallery/1.jpg'
import gallery2 from '../accerts/tankGallery/2.jpg'
import gallery3 from '../accerts/tankGallery/3.jpg'
import gallery4 from '../accerts/tankGallery/4.jpg'
import gallery5 from '../accerts/tankGallery/5.jpg'

import 'react-vertical-timeline-component/style.min.css'
import './css/kupalaStyles.css'

const writerName = 'Максим Танк (Евгений Иванович Скурко)';
const writerLife = '04.09.1912 - 07.08.1995';
const writerBirth = 'Родился  (17) сентября 1912 года в селе Пильковщина (ныне Мядельского района Минской области Беларуси) в крестьянской семье.';
const writerSchool = 'В 1929 году поступил в Виленскую гимназию имени А. Пушкина.';
const writerPublications = 'Первый поэтический сборник — «На этапах» (Вильно) — вышел в 1936 году. В ранних книгах поэт выступает певцом борьбы белорусского народа за национальное освобождение.';
const writerActivity = 'После воссоединения Западной Беларуси и Белорусской ССР Максим Танк являлся корреспондентом в газете «Вилейская правда». В 1940 году принят в СП СССР. В годы Великой Отечественной войны продолжал работать во фронтовой печати. В 1945—1948 годы Максим Танк являлся редактором в юмористическом журнале «Вожык». В 1948—1966 годы — главный редактор белорусского литературного журнала «Полымя».';
const writerPolitics = 'Председатель ВС БССР (1965—1971). Депутат Верховного Совета СССР с 1969 года. Академик АН Белорусской ССР с 1972 года.';
const writerDeath = 'Максим Танк умер в Минске 7 августа 1995 года. Похоронен в родном селе.';

const writerYTLink = 'https://www.youtube.com/embed/3Rt8eu_sdN0';
const writerPlaceLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184632.2278305333!2d25.1129524375164!3d54.700802087264194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd93fb5c6408f5%3A0x400d18c70e9dc40!2z0JLQuNC70YzQvdGO0YEsINCS0LjQu9GM0L3RjtGB0YHQutC-0LUg0LPQvtGA0L7QtNGB0LrQvtC1INGB0LDQvNC-0YPQv9GA0LDQstC70LXQvdC40LUsINCb0LjRgtCy0LA!5e1!3m2!1sru!2sby!4v1669970896912!5m2!1sru!2sby';

class Tank extends Component{
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
                        {addMainVerticalElement('04.09.1912', 'День рождения писателя', '', writerBirth)}
                        {addVerticalElement('1929', 'Учёба', '', writerSchool)}
                        {addVerticalElement('1936', 'Первое творчество', '', writerPublications)}
                        {addVerticalElement('1940 - 1966', 'Авторская деятельность', '', writerActivity)}
                        {addVerticalElement('1965 - 1972', 'Политическая деятельность', '', writerPolitics)}
                        {addMainVerticalElement('07.08.1995', 'Смерть', '', writerDeath)}
                    </VerticalTimeline>
                </section>
        )
    }
}

export default Tank;