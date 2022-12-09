import React, {Component} from 'react';
import writersBackground from '../accerts/f.jpg';
import 'react-vertical-timeline-component/style.min.css'
import './css/homePage.css'
import { useTranslation } from 'react-i18next';

function HomeCarousel() {
  const { t, i18n } = useTranslation();
        var mainImgWidth, mainImgHeight;
        if(window.innerWidth >= 1000){
            mainImgWidth = 40;
        }
        else{
            mainImgWidth = 75;
        }
        mainImgHeight = mainImgWidth / 100 * window.innerWidth / 1080 * 1015;

        return (
            <section style={{backgroundImage:'url(' + writersBackground + ')'}}>
                    <div className = 'writerMainI' >
                        <h1>{t('About')}</h1>
                        <h2>Данный портал содержит информацию о писателях Беларуси.</h2>
                        <h2>На главной странице содержится информация о портале, деятеле дня и команде разработчиков.</h2>
                        <h2>Также портал содержит персональную страницу каждого писателя.</h2>
                        <h2>Описание деятеля содержит: биографию, фотогалерею с фотографиями писателя и его работ,</h2>
                        <h2>видео на YouTube о деятеле и место его основной деятельности на карте.</h2>
                    </div>
            </section>
        )
}

export default HomeCarousel;