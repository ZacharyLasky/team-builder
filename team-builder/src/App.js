import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import Form from './Form';

function App() {

  const [people, setPeople] = useState([
    {name: "zach", email: "zach@gmail.com", role: "developer"},
    {name: "dan", email: "dan@gmail.com", role: "tl"}
  ]);
  return (
    <div className="App">
    
    <Form setPeople={setPeople}/>
     
    {people.map(person => <Card person={person}/>)}
    
    </div>
    
  );
}

export default App;
