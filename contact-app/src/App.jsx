import React from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import ContactDetail from './components/ContactDetail';
import { useState } from 'react'
import { useEffect } from 'react'


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(()=>{
    return (
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  )}
)

const AddContactHandler = (contact) => {
  //console.log(contact)
  setContacts([...contacts, {id: uuidv4(), ...contact}])
}
  

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
      })
      setContacts(newContactList);
  }

  // Retrieve contacts from local storage on initial render
  
  // useEffect(() => {
  //   const retriveContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    
  //   if (retriveContacts) { 
  //     const parsedContacts = JSON.parse(retriveContacts);
  //     console.log("Retrieved contacts:", parsedContacts);
  //     setContacts(parsedContacts);   
  //   }
  // }, []);


  // Save contacts to local storage whenever the contacts state changes
  
  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>

          <Route path="/" element={<ContactList contacts={contacts} 
          getContactId={removeContactHandler} />}
           /> 

          <Route path="/add" element={<AddContact AddContactHandler={AddContactHandler} />} />
          
          <Route path="/contact/:id" element={<ContactDetail contacts={contacts} />} />

         

        </Routes>
      </Router>
         {/* <AddContact AddContactHandler={AddContactHandler} />
         <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      
    </div>
  )
}

export default App
