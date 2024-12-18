import React from "react";
import "../../public/styles.css";

export default function Avatar(props) {
  return <img className={props.style} src={props.imgSrc} alt={props.imgAlt} />;
}
