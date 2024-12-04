import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  let contactList = contacts.map((contact) => {
    return (
      <Card
        key={contact.id}
        name={contact.name}
        img={contact.imgURL}
        tel={contact.phone}
        email={contact.email}
      />
    );
  });
  console.log(contacts);
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contactList}
    </div>
  );
}

export default App;
