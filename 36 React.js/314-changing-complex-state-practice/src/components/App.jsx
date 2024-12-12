import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    if (name == "fName") {
      setContact((prevValue) => {
        return {
          firstName: value,
          lastName: prevValue.lastName,
          email: prevValue.email,
        };
      });
    } else if (name == "lName") {
      setContact({...contact, lastName: value });
    } else {
      setContact({...contact, email: value });
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.firstName} {contact.lastName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={contact.firstName}
          onChange={handleChange}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={contact.lastName}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

//CHALLENGE: Make the code in App.jsx work.
//The final app should have a single contact
//with fName, lName and email.
