import React, {Component} from 'react';
import {VerticalTimeline} from 'react-vertical-timeline-component'
import Carousel from 'react-bootstrap/Carousel';
import { addMainVerticalElement, addVerticalElement, addCarouselImg } from '../writersFunctions';

import writersBackground from '../accerts/bg.jpg';
import writerImg from '../accerts/KolasMain.jpg'
import gallery1 from '../accerts/kolasGallery/1.jpg'
import gallery2 from '../accerts/kolasGallery/2.jpg'
import gallery3 from '../accerts/kolasGallery/3.jpg'
import gallery4 from '../accerts/kolasGallery/4.jpg'
import gallery5 from '../accerts/kolasGallery/5.jpg'

import 'react-vertical-timeline-component/style.min.css'
import './css/kupalaStyles.css'

const writerName = 'Якуб Колас (Константин Михайлович Мицкевич)';
const writerLife = '22.10.1882 - 13.08.1956';
const writerBirth = 'Родился 22 октября (3 ноября) 1882 года в деревне Акинчицы (теперь территория города Столбцы Столбцовского района Минской области Белоруссии), в православной семье лесника Михаила Казимировича (Михася) Мицкевича и домохозяйки Анны Юрьевны Лесик. Предки по отцовской линии — католики.';
const writerTeaching = 'В 1912—1914 годах учительствовал в Пинске. Здесь в 1914 году у него родился его старший сын Даниил, который впоследствии стал создателем и первым директором музея своего отца. В 1917 родился его средний сын — Юрий Константинович Мицкевич, а в 1926 младший сын — Михаил Константинович (Михась) Мицкевич. После демобилизации (1918) работал учителем в городе Обоянь.';
const writerMainPlace = 'В мае 1921 года переехал в Минск. В дальнейшем занимался творческой и научной деятельностью.';
const writerPublications = 'До Октябрьской революции вышли сборники стихов «Песни неволи» (1908), «Песни печали» (1910), отдельные главы эпической поэмы «Новая зямля», а также сборники прозы «Рассказы» (1912), «Родные образы» (1914).';
const writerDeath = 'В конце жизни часто болел, в частности, перенёс 26 воспалений лёгких. Скончался 13 августа 1956 года. Похоронен на Военном кладбище в Минске.';

const writerYTLink = 'https://www.youtube.com/embed/RoYHoXa5y8Y';
const writerPlaceLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94163.82319491048!2d27.523329171972176!3d53.8847207981807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6ad3%3A0xb61b853ddb570d9!2z0JzQuNC90YHQug!5e1!3m2!1sru!2sby!4v1669968064361!5m2!1sru!2sby';

class Kolas extends Component{
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
                        {addMainVerticalElement('22.10.1882', 'День рождения писателя', '', writerBirth)}
                        {addVerticalElement('1908 - 1914', 'Первое творчество', '', writerPublications)}
                        {addVerticalElement('1912 - 1918', 'Учительская деятельность', '', writerTeaching)}
                        {addVerticalElement('05.1921', 'Место деятельности', '', writerMainPlace)}
                        {addMainVerticalElement('13.08.1956', 'Смерть', '', writerDeath)}
                    </VerticalTimeline>
                </section>
        )
    }
}

export default Kolas;