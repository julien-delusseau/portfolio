import './ExperienceCard.css';

export const ExperienceCard = ({period, title, company, children}) => {
    return (
        <div className="experience">
            <div className="experience-left">
                <div className="experience-icon">
                    <i className="fa-solid fa-briefcase"></i>
                </div>
            </div>
            <div className="experience-right">
                        <span className=" times text-uppercase">
                            {period}
                        </span>
                <h3 className="text-uppercase">
                    <span className="yellow">{title}</span> - <span>{company}</span>
                </h3>
                <p>
                    {children}
                </p>
            </div>
        </div>
    );
};