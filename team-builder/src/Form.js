import React, { useState } from 'react';


export default function Form(props) {
  const { setPeople } = props;
  const [person, setPerson] = useState({
    name: "",
    email: "",
    role: ""
  })

  function handleChange(event) {
    setPerson({...person, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(person);
    setPeople(people => [...people, person])
  }
  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          name:
          <input
            type="text" onChange={handleChange}
            className="form-info"
            name="name"
            placeholder="enter name"
            value={person.name}
          />
        </label>
        <label>
          email:
          <input
            type="text" onChange={handleChange}
            className="form-info"
            name="email"
            placeholder="enter email"
            value={person.email}
          />
        </label>
        <label>
          role:
          <input
            type="text" onChange={handleChange}
            className="form-info"
            name="role"
            placeholder="enter role"
            value={person.role}
          />
        </label>
        <button type="submit">Add Person</button>
      </form>

    </div>
  )
}