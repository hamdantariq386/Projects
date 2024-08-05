import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("Please fill in the form");
      return;
    }

    props.AddContactHandler({ name, email });

    // Navigate back to the contact list after adding a contact
    navigate("/");

    // Reset the form fields
    setName("");
    setEmail("");
  };

  return (
    <div className="ui main" style={{marginTop: "60px"}}>
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
