import {PortfolioCard} from '../../components/PortfolioCard/PortfolioCard';
import {works} from '../../data/data';
import './Portfolio.css';

export const Portfolio = () => (
    <section id="portfolio">
        <h1>mon <span className="yellow">portfolio</span></h1>
        <h3 className="subtitle">
            Liste de mes derniers projets
        </h3>

        <div className="cards-container">
            {
                works.map(project => (
                    <PortfolioCard
                        key={project.id}
                        project={project}
                    />
                ))
            }
        </div>
    </section>
);