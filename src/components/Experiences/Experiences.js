import {ExperienceCard} from '../ExperienceCard/ExperienceCard';

export const Experiences = () => (
    <div className="experiences">
        <h3>Quelques <span className="yellow">expériences</span></h3>
        <ExperienceCard period="janvier 2022 - février 2022" title="CVThèque" company="Philiance">
            Création d'une application CVThèque.<br/>
            Les auditeurs peuvent s'inscrirent, compléter leur profil et télécharger un CV intéractif.
            Les entreprises peuvent voir les auditeurs selon des critères de recherche.
        </ExperienceCard>

        <ExperienceCard period="Août 2021 - Mars 2022" title="Tutorat stages" company="Philiance">
            Je dirige des stagiaires dans la création d'un projet de fin de formation.
        </ExperienceCard>

        <ExperienceCard period="Janvier 2021 - Maintenant" title="Formateur Web"
                        company="Multiples centres de formation">
            Je donne des formations en développement Web pour différents centres de formation:<br/>
            WebForce3, Philiance, Doranco, etc ...
            Mes cours se concentrent sur HTML CSS Javascript pour la partie front, et SQL PHP Symfony pour la
            partie back.
        </ExperienceCard>
    </div>
);