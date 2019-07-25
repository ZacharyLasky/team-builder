import React, { useState } from 'react';

export default function Form() {
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: ""
  })

  function handleChange(event) {
    const updatedForm = { ...form, [event.target.name]: event.target.value };
    console.log(
      "handleChange",
      event.target.name,
      event.target.value,
      updatedForm
    );
     setForm(updatedForm);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form.name);
    console.log(form.email);
    console.log(form.role);
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
            value={form.name}
          />
        </label>
        <label>
          email:
          <input
            type="text" onChange={handleChange}
            className="form-info"
            name="email"
            placeholder="enter email"
            value={form.email}
          />
        </label>
        <label>
          role:
          <input
            type="text" onChange={handleChange}
            className="form-info"
            name="role"
            placeholder="enter role"
            value={form.role}
          />
        </label>
        <button type="submit">Submit!</button>
      </form>
      
      
    </div>
  )
}