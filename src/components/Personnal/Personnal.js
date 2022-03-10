import {ButtonCTA} from '../ButtonCTA/ButtonCTA';
import profil from '../../assets/profil.jpg';

export const Personnal = () => (
    <div className="personnal">
        <h3> Mes <span className="yellow">informations</span> personnelles</h3>

        <div className="personnal-wrapper">
            <div>
                <img className="avatar" src={profil} alt="Représentation du profil"/>
                <ButtonCTA/>
            </div>

            <div className="content">
                <div className="content-block">
                    <p>Prénom:</p>
                    <p className="content-block--infos">Julien</p>
                </div>

                <div className="content-block">
                    <p>Nom:</p>
                    <p className="content-block--infos">Delusseau</p>
                </div>

                <div className="content-block">
                    <p>âge:</p>
                    <p className="content-block--infos">37 ans</p>
                </div>

                <div className="content-block">
                    <p>Email:</p>
                    <p className="content-block--infos">julien.delusseau<br/>@gmail.com</p>
                </div>

                <div className="content-block">
                    <p>Téléphone:</p>
                    <p className="content-block--infos">0769018447</p>
                </div>

                <div className="content-block">
                    <p>Localisation:</p>
                    <p className="content-block--infos">33000 Bordeaux</p>
                </div>
            </div>
        </div>
    </div>
);