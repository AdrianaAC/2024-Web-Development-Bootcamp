import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";

function App() {

  let notesList = notes.map(note => {
    return <Note title={note.title} content={note.content}/>
  });
  
  return (
    <div>
      <Header />
      {notesList} 
      <Footer />
    </div>
  );
}

export default App;
