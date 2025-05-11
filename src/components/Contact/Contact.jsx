import { FaPhone, FaUser } from "react-icons/fa6";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
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
      <button
        className={s.deleteBtn}
        onClick={() => handleDeleteContact(id)}
        type="button"
      >
        Delete
      </button>
    </>
  );
};
