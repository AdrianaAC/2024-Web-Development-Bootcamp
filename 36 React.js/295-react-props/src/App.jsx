import React from "react";
import Card from "./components/Card";

export default function App() {
  return (
    <div>
      <h1>My Contacts</h1>
      <Card
        name="Beyonce"
        phone="+123 456 789"
        email="b@beyonce.com"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      />
      <Card
        name="Jack Bauer"
        img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        phone="+987 654 321"
        email="jack@nowhere.com"
      />
      <Card
        name="Chuck Norris"
        img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        email="gmail@chucknorris.com"
        phone="+918 372 574"
      />
    </div>
  );
}
