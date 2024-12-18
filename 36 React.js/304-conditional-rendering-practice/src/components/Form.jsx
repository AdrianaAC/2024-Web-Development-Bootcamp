import React from "react";

function Form(props) {

  let buttonText = props.registered ? "Login" : "Register";
  
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.registered && <input type="password" placeholder="Confirm Password" />}
      <button type="submit">{buttonText}</button>
    </form>
  );
}

export default Form;
