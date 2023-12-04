import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, updateFilter } from './actions';
import ContactForm from '#components/ContactForm/ContactForm';
import ContactList from '#components/ContactList/ContactList';
import Filter from '#components/Filter/Filter';
import styles from "#components/App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    try {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } catch (error) {
      console.error('Error saving to local storage:', error);
    }
  }, [contacts]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm addContact={(contact) => dispatch(addContact(contact))} />
      <h2 className={styles.title}>Contacts</h2>
      <Filter value={filter} onChange={(event) => dispatch(updateFilter(event?.target?.value || ''))} />
      <ContactList contacts={contacts} onDelete={(id) => dispatch(deleteContact(id))} />
    </div>
  );
};

export default App;