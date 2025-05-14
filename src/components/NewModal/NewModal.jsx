import Modal from "react-modal";
import s from "./NewModal.module.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    borderRadius: "20px",
    border: "none",
    overflow: "hidden",
    backgroundColor: "#242424",
    borderRadius: "10px",
  },
};
Modal.setAppElement("#root");

export const NewModal = ({ modalIsOpen, children }) => {
  return (
    <Modal className={s.modal} isOpen={modalIsOpen} style={customStyles}>
      {children}
    </Modal>
  );
};
