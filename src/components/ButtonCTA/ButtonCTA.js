import './ButtonCTA.css';

export const ButtonCTA = ({button, text = 'Télécharger mon CV', ...props}) => {
    return button ? <button {...props} className="btn-cta">{text}</button> :
        <a {...props} className="btn-cta"
           href="https://drive.google.com/uc?export=download&id=1vEoySlgD6FtYI9rQs_DHdzLpJYPu_13d">Télécharger mon
            CV</a>;
};