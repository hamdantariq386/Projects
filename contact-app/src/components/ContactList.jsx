import React from "react";
import {Link} from "react-router-dom"
import ContactCard from "./ContactCard";
import { FaAngleLeft } from "react-icons/fa";

const ContactList = (props) => {
    const deleteContactHandler = (id) => {
        props.getContactId(id);
  }
  
  const renderContactList = props.contacts.map((contact)=> (
           <ContactCard 
              contact={contact}
              clickHandler={deleteContactHandler} key={contact.id}
          /> 
  ));
    return (
        <div className="main">
            <h2 style={{marginTop: "60px"}}>
                Contact List
                <Link to="/add">
                
                   <button className="ui button blue add-button"><FaAngleLeft className="icon"/>Add Contact
                   </button>
                </Link>
            </h2>

            <div className="ui celled list" style={{fontSize: "20px"}}>
                {renderContactList}
            </div>
            
        </div>
        
    )
}

export default ContactList;