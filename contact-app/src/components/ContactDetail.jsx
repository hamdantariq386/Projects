import React from "react";
import {Link} from "react-router-dom"
import { useParams } from "react-router-dom";
import user from "../images/images.png"

    
const ContactDetail = ({ contacts }) => {
    const { id } = useParams();
  
    // Find the contact by ID from the contacts list
    const contact = contacts.find((contact) => contact.id === id);
  
    if (!contact) {
        return <div>Contact not found</div>;
      }
  
    const { name, email } = contact;
  
    return (
        <div className="main" style={{marginTop: "60px"}}>
            <div className="ui card centered" >
                <div className="image" >
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">
                        {name}
                    </div>
                    <div className="description">
                        {email}
                    </div>
                </div>
            </div>
            <Link to={"/"}> 
                 <button className="ui button blue center back-btn">Back to Contact List</button>
            </Link>
        </div>
        
    )
}

export default ContactDetail;