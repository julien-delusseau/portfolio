import { useState } from "react";
import { Helmet } from "react-helmet";
import { PortfolioCard } from "../../components/PortfolioCard/PortfolioCard";
import { works } from "../../data/data";
import "./Portfolio.css";

export const Portfolio = () => {
  const [javascript, setJavascript] = useState(true);
  const [php, setPhp] = useState(false);
  const [mobile, setMobile] = useState(false);

  const switchToJavascript = () => {
    setJavascript(true);
    setPhp(false);
    setMobile(false);
  };

  const switchToPhp = () => {
    setJavascript(false);
    setPhp(true);
    setMobile(false);
  };

  const switchToMobile = () => {
    setJavascript(false);
    setPhp(false);
    setMobile(true);
  };

  return (
    <section id="portfolio">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mon Portfolio | Julien Delusseau</title>
        <link rel="canonical" href="https://www.juliendelusseau.fr/portfolio" />
      </Helmet>
      <h1>
        mon <span className="yellow">portfolio</span>
      </h1>
      <h3 className="subtitle">Liste de mes derniers projets</h3>

      <div className="switches-container">
        <button
          onClick={switchToJavascript}
          className={javascript ? "switches active" : "switches"}
        >
          javascript
        </button>
        <button
          onClick={switchToPhp}
          className={php ? "switches active" : "switches"}
        >
          php
        </button>
        <button
          onClick={switchToMobile}
          className={mobile ? "switches active" : "switches"}
        >
          Mobile
        </button>
      </div>

      <div className="cards-container">
        {works
          .filter((project) =>
            javascript
              ? project.programmation === "javascript"
              : php
              ? project.programmation === "php"
              : project.programmation === "mobile"
          )
          .map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
      </div>
    </section>
  );
};
