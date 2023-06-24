import React from 'react';

const ContactList = ({ contacts, deleteContact, editContact }) => {
  const handleDelete = (index) => {
    deleteContact(index);
  };

  const handleEdit = (index) => {
    editContact(index);
  };

  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          {contact.name} - {contact.phone}
          <button onClick={() => handleDelete(index)}>Delete</button>
          <button onClick={() => handleEdit(index)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

