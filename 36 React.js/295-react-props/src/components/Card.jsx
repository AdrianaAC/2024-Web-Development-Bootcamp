import React from "react";

export default function Card(props) {
  return (
    <div className="card">
        <h2>{props.name}</h2>
        <img
          src={props.img}
          alt={props.name} />
        <p>{props.phone}</p>
        <p>{props.email}</p>
    </div>
        
  );
}
{/*  */}