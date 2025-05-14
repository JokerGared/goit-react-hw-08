import { useDispatch, useSelector } from "react-redux";
import { ContactForm, ContactList, SearchBox } from "../../components";
import Loader from "../../components/Loader/Loader";
import { fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../../redux/contacts/selectors";
import s from "./ContactsPage.module.css";

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && <Loader />}
      {contacts.length < 1 && !error && !isLoading && (
        <p>There is no contacts yet</p>
      )}
      {error && <p>Server is dead...</p>}
    </div>
  );
};

export default ContactsPage;
