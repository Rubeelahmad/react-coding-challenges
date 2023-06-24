import React, { useState, useEffect } from 'react';

const ContactForm = ({ addContact, editIndex, contacts }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ name, phone });
    setName('');
    setPhone('');
  };

  useEffect(() => {
    if (editIndex !== -1) {
      const selectedContact = contacts[editIndex];
      setName(selectedContact.name);
      setPhone(selectedContact.phone);
    }
  }, [editIndex, contacts]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit">{editIndex !== -1 ? 'Update Contact' : 'Add Contact'}</button>
    </form>
  );
};

export default ContactForm;
