import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar style="circle-img" imgSrc={props.img} imgAlt={props.name} />
      </div>
      <div className="bottom">
        <Details className="info" telDetail={props.tel} />
        <Details className="info" emailDetail={props.email} />
      </div>
    </div>
  );
}

export default Card;
