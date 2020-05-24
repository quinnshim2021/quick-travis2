import React from 'react';
import './App.css';
// import Firebase from './firebase'
import 'firebase/database';
import Table from "./components/Table/Table";
import data from './components/data.json';

function App() {
  const info = {Course: data["Course"], Students: data["Student"]};
  const professor = {Name: "Chris Riesbeck", Courses: ["Agile Methodology"]};
  
  return (
    <div className="App">
      <h1>Health Passport</h1>
      <header className="App-header">
        <h1>{professor.Name}</h1>
          <Table course={info.Course["EECS394"]} students={info.Students}/>
      </header>
    </div>
  );
}

export default App;
