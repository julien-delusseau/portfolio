import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import javascript from '../../assets/javascript.png';
import react from '../../assets/react.png';
import php from '../../assets/php.png';
import sql from '../../assets/sql.png';
import github from '../../assets/github.png';
import symfony from '../../assets/symfony.png';
import './Technos.css';

export const Technos = () => (
    <div className="technos">
        <h3>Les <span className="yellow">technos</span> que j'utilise au quotidien</h3>

        <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showIndicators={false} showThumbs={false}>
            <div>
                <img src={html} alt="Logo HTML"/>
            </div>
            <div>
                <img src={css} alt="Logo CSS"/>
            </div>
            <div>
                <img src={javascript} alt="Logo JAVASCRIPT"/>
            </div>
            <div>
                <img src={react} alt="Logo REACT"/>
            </div>
            <div>
                <img src={php} alt="Logo PHP"/>
            </div>
            <div>
                <img src={sql} alt="Logo MYSQL"/>
            </div>
            <div>
                <img src={github} alt="Logo GITHUB"/>
            </div>
            <div>
                <img src={symfony} alt="Logo SYMFONY"/>
            </div>
        </Carousel>
    </div>
);