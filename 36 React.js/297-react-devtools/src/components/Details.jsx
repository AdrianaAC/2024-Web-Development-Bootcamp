import React from "react";
import "../../public/styles.css";

export default function Details(props) {
  let propsDetail = props.telDetail || props.emailDetail;
  return <p className={props.className}>{propsDetail}</p>;
}
