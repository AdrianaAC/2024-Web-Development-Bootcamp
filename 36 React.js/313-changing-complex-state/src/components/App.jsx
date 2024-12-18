import { useState } from "react";
import React from "react";

function App() {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "fName") {
      setFullName({ ...fullName, firstName: value });
    } else {
      setFullName({ ...fullName, lastName: value });
    }
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.firstName} {fullName.lastName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={fullName.firstName}
          onChange={handleChange}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={fullName.lastName}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
