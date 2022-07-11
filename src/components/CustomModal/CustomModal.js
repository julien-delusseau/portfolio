import "./CustomModal.css";
import Modal from "react-modal";
import { Tags } from "../Tags/Tags";

export const CustomModal = ({
  modalIsOpen,
  closeModal,
  project: { title, image, tags, link, github, description, view },
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="Modal-anchor">
        <div className="modal-top">
          <h2>{title}</h2>
          <button
            title="Fermer le modal"
            className="close-modal"
            onClick={closeModal}
          >
            <i className="fa-regular fa-circle-xmark"></i>
          </button>
        </div>
        <img src={image} alt="Représentation du projet" />
        <Tags tags={tags} />
        <p>{description}</p>

        <ul className="modal-links">
          <li>
            <a rel="noopener noreferrer" target="_blank" href={link}>
              <i className="fa-solid fa-link yellow"></i>
              <span>Lien</span>
            </a>
          </li>
          <li>
            {view === "public" && (
              <a rel="noopener noreferrer" target="_blank" href={github}>
                <i className="fa-brands fa-github yellow"></i>
                <span>Github</span>
              </a>
            )}
          </li>
        </ul>
      </div>
    </Modal>
  );
};
