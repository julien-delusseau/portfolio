import './Contact.css';
import {ContactForm} from '../../components/ContactForm/ContactForm';

export const Contact = () => {
    return (
        <section id="contact">
            <h1>restons en <span className="yellow">contact</span></h1>

            <p className="contact-subtitle">
                N'hésitez pas à entrer en contact avec moi.<br/>Je suis toujours ouvert pour discuter de nouveaux
                projets.
            </p>

            <div className="contact-container">
                <ul>
                    <li>
                        <i className="fa-solid fa-at fa-2x yellow"></i>
                        <div>
                            <h2>email:</h2>
                            <p>
                                <a href="mailto:julien.delusseau@gmail.com">julien.delusseau@gmail.com</a>
                            </p>
                        </div>
                    </li>
                    <li>
                        <i className="fa-solid fa-mobile-screen-button fa-2x yellow"></i>
                        <div>
                            <h2>téléphone:</h2>
                            <p>
                                0769018447
                            </p>
                        </div>
                    </li>
                    <li>
                        <i className="fa-solid fa-location-dot fa-2x yellow"></i>
                        <div>
                            <h2>localisation:</h2>
                            <p>
                                33000 Bordeaux
                            </p>
                        </div>
                    </li>
                </ul>

                <ContactForm/>
            </div>
        </section>
    );
};