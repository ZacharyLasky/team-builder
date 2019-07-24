import React, { useState } from 'react';
import './App.css';

import Form from './Form';

function App() {

  const [teamData, setTeamData] = useState("");
  return (
    <div className="App">
     <Form></Form>
    </div>
  );
}

export default App;
