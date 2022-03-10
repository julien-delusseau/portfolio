import {Personnal} from '../../components/Personnal/Personnal';
import {Technos} from '../../components/Technos/Technos';
import {Experiences} from '../../components/Experiences/Experiences';
import './About.css';

export const About = () => {
    return (
        <section id="about">
            <h1>à propos <span>de moi</span></h1>
            <Personnal/>
            <hr/>
            <Technos/>
            <hr/>
            <Experiences/>
        </section>
    );
};