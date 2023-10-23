import React from 'react';

const Contact = ({ contact, onDelete }) => {
  return (
    <div>
      {contact.name}: {contact.number} <button onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;