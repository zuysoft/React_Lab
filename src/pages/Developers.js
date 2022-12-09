import React, {Component} from 'react';
import writersBackground from '../accerts/dev.jpg';
import 'react-vertical-timeline-component/style.min.css'
import './css/developersStyle.css'
import Dasha from '../accerts/d.jpg';
import Sasha from '../accerts/s.jpg';
import Sergey from '../accerts/sergey.jpg';

class homeCarousel extends Component{
    render() {
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
                    <div className = 'writerMainInformation' >
                        <h2>Наша команда</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={Dasha}/>
                            <h2 className="fw-normal">Зайцева Дарья</h2>
                            <p><a href="https://github.com/Murzik1234">Murzik1234</a></p>

                        </div>

                        <div className="col-lg-4">
                            <img src={Sasha}/>
                            <h2 className="fw-normal">Александр Струков</h2>
                            <p><a href="https://github.com/CinderAle">CinderAle</a></p>

                        </div>

                        <div className="col-lg-4">
                            <img src={Sergey}/>
                            <h2 className="fw-normal">Витушко Сергей</h2>
                            <p><a href="https://github.com/NotYM">NotYM</a></p>
                        </div>

                    </div>
                </section>
        )
    }
}
export default homeCarousel;