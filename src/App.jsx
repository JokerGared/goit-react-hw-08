import { useEffect, useState } from "react";
import "./App.css";
import { ContactForm, SearchBox, ContactList } from "./components";
import { useDispatch, useSelector } from "react-redux";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "./redux/contactsSlice";
import { fetchContacts } from "./redux/contactsOps";
import Loader from "./components/Loader/Loader";

function App() {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && <Loader />}
      {contacts.length < 1 && !error && !isLoading && (
        <p>There is no contacts yet</p>
      )}
      {error && <p>Server is dead...</p>}
    </>
  );
}

export default App;
