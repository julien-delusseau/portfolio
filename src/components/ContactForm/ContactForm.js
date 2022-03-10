import {useRef, useState} from 'react';
import {ButtonCTA} from '../ButtonCTA/ButtonCTA';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

export const ContactForm = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isFilled, setIsFilled] = useState(true);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (!fullname || !email || !subject || !message) {
            setIsFilled(false);
            return;
        }

        setLoading(true);
        emailjs.sendForm('service_8uxecgj', 'template_lo1qiqo', form.current, 'user_sMJvomBQ1UHWxDATIfPHh')
            .then((result) => {
                setLoading(false);
                console.log(result);
                setSuccess(true);
            }, (error) => {
                setLoading(false);
                console.error(error);
                setError(true);
            });
    };
    return (
        <form onSubmit={sendEmail} ref={form} id="contact-form">
            <input value={fullname} onChange={e => setFullname(e.target.value)} type="text" name="fullname"
                   id="fullname" placeholder="Votre nom*"/>
            {!isFilled && !fullname && <p className="text-danger contact-warning">Merci de remplir ce champ</p>}
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="email"
                   placeholder="Votre email*"/>
            {!isFilled && !email && <p className="text-danger contact-warning">Merci de remplir ce champ</p>}
            <input value={subject} onChange={e => setSubject(e.target.value)} type="text" name="subject" id="subject"
                   placeholder="Le sujet*"/>
            {!isFilled && !subject && <p className="text-danger contact-warning">Merci de remplir ce champ</p>}
            <textarea value={message} onChange={e => setMessage(e.target.value)} name="message" id="message" rows="10"
                      placeholder="Votre message*"></textarea>
            {!isFilled && !message && <p className="text-danger contact-warning">Merci de remplir ce champ</p>}
            <ButtonCTA button text="Envoyer" style={{marginTop: '1rem'}}/>
            {
                loading && (
                    <div className="contact-alert">
                        <p>... Envoi en cours ...</p>
                    </div>
                )
            }
            {
                success && (
                    <div className="contact-alert-success">
                        <p>Message envoyé avec succès.</p>
                    </div>
                )
            }
            {
                error && (
                    <div className="contact-alert-error">
                        <p>Problème lors de l'envoi du message.</p>
                    </div>
                )
            }
        </form>

    );
};