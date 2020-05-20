import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Firebase from './firebase'
import 'firebase/database';

function App() {
  const [info, setInfo] = useState({Course: [], Student: []})
  const [professor, setProfessor] = useState({Name: "", Courses: []})
  const db = Firebase.database().ref();

  /*
    sets state for info (holds everything in db) and current professor logged in
  */
  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) {
        let sList = [];
        let cList = [];
        for (const student in snap.val()["Student"]){
          sList.push(snap.val()["Student"][student]);
        }
        for (const course in snap.val()["Course"]){
          cList.push(snap.val()["Course"][course]);
        }
        setInfo({Course: cList, Student: sList})
        setProfessor({Name: "Chris Riesbeck", Courses: [cList[0]]})
      }
    }
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);

  /*
    gets temperature (trust me, this is the best way to do it rn b/c it gets the most recent temp)
    in the future, we can just look for temperatures who's datetime matches today's date instead of the most recent date
  */
  const getTemp = s => { 
    for (const student in info.Student){
      if (s === info.Student[student]["Name"]){
          let entries = Object.keys(info.Student[student]["record"])
          if (entries.length !== 0){
          let max = 0;
          let dT = "";
          for (const entry in entries){
            if (Date.parse(entries[entry]) > max){
              max = Date.parse(entries[entry]);
              dT = entries[entry]
            }
          }
          
          return [info.Student[student]["record"][dT], dT];
        }
        else{
          return (0, "");
        }
      }
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>{professor.Name}</h1>
          {professor.Courses.map((c) => 
          <div id="table-container">
            <h2><u>{c["Name"]}</u></h2>
            <table className="course-table">
              <thead>
                <th>Student Name</th>
                <th>Latest Temperature</th>
                <th>Date of Temperature</th>
              </thead> 
              <tbody>
                {professor.Courses.map((c) => c["Roster"].map((s) => 
                  <tr>
                    <td>{s}</td>
                    <td>{getTemp(s)[0]["temp"]}</td>
                    <td>{getTemp(s)[1]}</td> 
                  </tr>
                ))}
              </tbody>
            </table>
          </div>)}   
      </header>
    </div>
  );
}

export default App;
