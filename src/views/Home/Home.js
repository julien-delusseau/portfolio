import {ButtonCTA} from '../../components/ButtonCTA/ButtonCTA';
import hero from '../../assets/hero.jpg';
import './Home.css';

export const Home = () => {
    return (
        <section id="home">
            <img src={hero} alt=""/>
            <div className="content">
                <h1>Julien Delusseau.</h1>
                <h2>Développeur Web <br/>Formateur</h2>
                <p>
                    Je suis développeur web et formateur pour plusieurs centres de formation.
                    Je me suis initialement spécialisé dans le côté frontend avec ReactJS, mais au fur et à mesure de
                    mes expériences, je me suis également tourné vers le backend avec PHP et Symfony.<br/>
                    Être formateur est très important pour moi. Former de nouvelles personnes à ces technologies, les
                    voir évoluer et réussir, sont des expériences enrichissantes et passionnantes.
                </p>
                <ButtonCTA/>
            </div>
        </section>
    );
};