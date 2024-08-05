import React from "react";
import {Link} from "react-router-dom"
import user from "../images/user.png"


const ContactCard = ( props ) => {
    
    const {id, name, email} = props.contact;

    return (
        <div className="item" style={{ position: 'relative' }}>
            
            <img src={user} alt="" className="ui avatar image" style={{ float: 'left', marginRight: '10px' }} />

            <div className="content" >
                <Link to={{pathname: `/contact/${id}`, state: {contact: props.contact}}}>
                    <div className="header">
                        {name}
                    </div>
                    <div className="">{email}</div>
                </Link>
            </div>

            
            <i className="trash alternate outline      icon" style={{color: 'red', marginTop: '10px', float: 'right', cursor: 'pointer', fontSize: '20px' }}

                onClick={()=> {
                    alert("you want to delete")
                     props.clickHandler(id)
                    } }
                ></i>
           
                     
            
        </div>
        
    )
}

export default ContactCard;