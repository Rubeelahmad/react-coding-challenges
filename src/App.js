import React, { useState } from 'react';
import ContactForm from './components/ContactForm.tsx';
import ContactList from './components/ContactList.tsx';
import SearchBar from './components/SearchBar.tsx';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const addContact = (contact) => {
    if (editIndex !== -1) {
      const updatedContacts = [...contacts];
      updatedContacts[editIndex] = contact;
      setContacts(updatedContacts);
      setEditIndex(-1);
    } else {
      setContacts([...contacts, contact]);
    }
  };

  const deleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  const editContact = (index) => {
    setEditIndex(index);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Phone Book</h1>
      <ContactForm addContact={addContact} editIndex={editIndex} contacts={contacts} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ContactList
        contacts={filteredContacts}
        deleteContact={deleteContact}
        editContact={editContact}
      />
    </div>
  );
};

export default App;
