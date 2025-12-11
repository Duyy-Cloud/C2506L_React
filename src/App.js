import React from 'react';
import './App.css';

function App() {
  const personalInfo = {
    name: "Duc Duy",
    age: `24`,
    profession: 'Student',
    hobbies: ['Coding'],
  }; 

  return (
    <div className="App">
      <div className="info-container">
        <h2>Name: {personalInfo.name}</h2>
        <p>Age: {personalInfo.age}</p>
        <p>Profession: {personalInfo.profession}</p>
        <p>Hobbies: {personalInfo.hobbies}</p>
      </div>
    </div>
  );
}

export default App;
