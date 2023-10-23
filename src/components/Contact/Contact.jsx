import React from 'react';
import styles from './Contact.module.css'

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={styles.contact}>
      {contact.name}: {contact.number} <button className={styles.deleteButton} onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;