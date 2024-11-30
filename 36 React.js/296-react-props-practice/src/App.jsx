import React from "react";
import "../public/styles.css";
import Card from "./components/Card";
import contacts from "./contacts";

function App() {
  console.log(contacts);

  let contactsList = contacts.map((contact) => {
    return (
      <Card
        name={contact.name}
        imgURL={contact.imgURL}
        phone={contact.phone}
        email={contact.email}
      />
    );
  });

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contactsList}
    </div>
  );
}

export default App;
