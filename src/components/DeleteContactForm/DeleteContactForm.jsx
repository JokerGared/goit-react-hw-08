import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectModalId } from "../../redux/modal/selectors";
import { closeModal } from "../../redux/modal/slice";
import s from "./DeleteContactForm.module.css";

const DeleteContactForm = () => {
  const dispatch = useDispatch();
  const contactId = useSelector(selectModalId);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
    dispatch(closeModal());
  };

  const handleRejectDeleting = () => {
    dispatch(closeModal());
  };
  return (
    <div className={s.container}>
      <p className={s.text}>Confirm your contact deleting!</p>
      <div className={s.buttonContainer}>
        <button
          className={s.button}
          onClick={() => handleDeleteContact(contactId)}
          type="button"
        >
          Confirm
        </button>
        <button
          className={s.button}
          onClick={handleRejectDeleting}
          type="button"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default DeleteContactForm;
