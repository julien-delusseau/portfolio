import { Personnal } from "../../components/Personnal/Personnal";
import { Technos } from "../../components/Technos/Technos";
import { Experiences } from "../../components/Experiences/Experiences";
import { Helmet } from "react-helmet";
import "./About.css";

export const About = () => {
  return (
    <section id="about">
      <Helmet>
        <meta charSet="utf-8" />
        <title>À propos de moi | Julien Delusseau</title>
        <link rel="canonical" href="https://www.juliendelusseau.fr/about" />
      </Helmet>
      <h1>
        à propos <span>de moi</span>
      </h1>
      <Personnal />
      <hr />
      <Technos />
      <hr />
      <Experiences />
    </section>
  );
};
