
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'; 
// import SingupForm from '../../pages/SignupForm/singupForm'
import NewContact from '../../pages/CreateContact/newContact';
import Home from '../../pages/Home/Home';
import ErrorPage from '../../pages/ErrorPage/errorPage';
import FindContact from '../../pages/FindContact/FindContact';
import DeleteContacts from '../../pages/DeleteContacts/DeleteContacts';
import AllContacts from '../components/AllContacts';


function App() { 
    const [filter, setFilter] = useState('');
   const [contacts, setContacts] = useState(() => {
        const savedContacts = JSON.parse(window.localStorage.getItem('contacts'));
        return Array.isArray(savedContacts) ? savedContacts : [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
    });

    useEffect(() => {
        window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);
  
      const addContact = (name, number) => {
        const contact = {
            name,
            number,
            id: nanoid(),
        };

        if (contacts.find(existingContact => existingContact.name === name)) {
            alert(name + ' is already in contacts.');
        } else {
            setContacts(prevContacts => [contact, ...prevContacts]);
        }
      };
  
   const filteredContacts = () => {
    const normalisedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalisedFilter));
};



    const deleteContact = contactId => {
        setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
    };

    const deleteAllContacts = () => {
        setContacts([]);
        window.localStorage.removeItem('contacts');
    };

  const location = useLocation(); 
  return (
      <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/singup">SingupForm</Link>       
        <Link to="/newContact">NewContact</Link>
        <Link to="/findContact">FindContact</Link>
        <Link to="/deleteContacts">DeleteContacts</Link>
      </nav>
  
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/singup" element={<SignupForm />} /> */}
        <Route path="/newContact" element={<NewContact addContact={addContact} />} />
        <Route path="/findContact" element={<FindContact value={filter} onChange={e => setFilter(e.target.value)} />} />
        <Route path="/deleteContacts" element={<DeleteContacts contacts={contacts} onDelete={deleteContact} onDeleteAll={deleteAllContacts} />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
        <AllContacts contacts={filteredContacts()} showDeleteButton={location.pathname === '/deleteContacts'} />
  </>
  )
}

export default App
