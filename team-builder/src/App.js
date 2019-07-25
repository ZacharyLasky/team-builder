import React, { useState } from 'react';
import './App.css';
import { Data } from './Data';
import Form from './Form';

function App() {

  const [teamData, setTeamData] = useState(Data);
  return (
    <div className="App">
     <Form></Form>
      {teamData.map((vals, index) => (
        <div key={index}>
        <h1>{vals.name}</h1>
        <h1>{vals.email}</h1>
        <h1>{vals.role}</h1>
      </div>
      )
        
      )}
    </div>
  );
}

export default App;
