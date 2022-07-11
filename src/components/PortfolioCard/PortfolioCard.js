import Modal from "react-modal";
import "./PortfolioCard.css";
import { useState } from "react";
import { CustomModal } from "../CustomModal/CustomModal";
import { Tags } from "../Tags/Tags";

Modal.setAppElement("#root");

export const PortfolioCard = ({ project }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { title, type, image, tags } = project;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div
        style={{ cursor: "pointer" }}
        onClick={openModal}
        className="portfolio-card"
      >
        <div className="portfolio-card--thumb">
          <img src={image} alt="Représentation du projet" />
        </div>
        <div className="portfolio-card--content">
          <h2>{title}</h2>
          <h3 className="portfolio-card--type">{type}</h3>
          <Tags tags={tags} />
        </div>
        <div className="portfolio-card--overlay">
          <h4>
            Voir le détail{" "}
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </h4>
        </div>
      </div>

      <CustomModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        project={project}
      />
    </>
  );
};
