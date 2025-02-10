import React from "react";
import Navbar from "./Navbar";
import "./global.css";
import NoteForm from "./NoteForm";
import Display from "./Display";
import NoteProvider from "./NoteProvider";


const App = () => {
  return (
    <>
      <Navbar />

      <NoteProvider>
        <main className="mainContainer">
          <NoteForm />
          <Display />
        </main>
      </NoteProvider>
    </>
  );
};

export default App;
