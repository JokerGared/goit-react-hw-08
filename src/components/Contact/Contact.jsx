import { FaPhone, FaUser } from "react-icons/fa6";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modal/slice";

export const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleEditContact = (name, number, id) => {
    const contactInfo = {
      name,
      number,
    };
    dispatch(openModal({ id, contactInfo }));
  };

  const handleDeleteContact = (id) => {
    const isDeleting = true;
    dispatch(openModal({ id, isDeleting }));
  };
  return (
    <>
      <ul className={s.contactContainer}>
        <li className={s.userNameItem}>
          <FaUser />
          <h2 className={s.userName}>{name}</h2>
        </li>
        <li className={s.userPhoneItem}>
          <FaPhone />
          <p className={s.userPhone}>{number}</p>
        </li>
      </ul>
      <div className={s.buttons}>
        <button
          className={s.deleteBtn}
          onClick={() => handleDeleteContact(id)}
          type="button"
        >
          Delete
        </button>
        <button
          className={s.deleteBtn}
          onClick={() => handleEditContact(name, number, id)}
          type="button"
        >
          Edit
        </button>
      </div>
    </>
  );
};
