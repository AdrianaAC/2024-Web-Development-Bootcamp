import React from "react";
import Login from "./Login";

function App() {
  let isLoggedIn = false;

  function renderChoose() {
    // if (isLoggedIn) {
    //   return <h1>Hello User</h1>;
    // } else {
    //   return <Login />;
    // }
  }
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello User</h1> : <Login />}
      {isLoggedIn && <h1>Hello User, again </h1>}
    </div>
  );
}

export default App;
