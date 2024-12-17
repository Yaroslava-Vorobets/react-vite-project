import { useState, useEffect } from 'react';
import './App.css';
import { nanoid } from 'nanoid'
// import SingupForm from './components/singupForm.jsx'
import NewContact from './components/newContact';



function App() { 
 const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? '');
//  const [contacts, setContacts] = useState(() => {
//     const savedContacts = JSON.parse(window.localStorage.getItem('contacts'));
//     return Array.isArray(savedContacts) ? savedContacts : [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ];
//    const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? '');
  useEffect(() => {
  console.log('useEffect', contacts);
    window.localStorage.setItem('contacts', JSON.stringify(contacts)) 
  }, [contacts])
  
  const addContact = (name, number) => {
    const contact = {
      name,
      number, 
      id: nanoid()
    }
     console.log(contacts)
    contacts.find(contact => contact.name === name)
      ? alert(name + ' is already in contacts.')
      :setContacts([contact, ...contacts])
  }

  return (
    <>
      {/* <SingupForm/> */}
      <NewContact onSubmit={addContact} /> 
      <ul>
        <li className='item'>create contact</li>
        <li className='item'>find contact</li>
        <li className='item'>delete contact</li>       
      </ul>    
    
    </>
  )
}

export default App
