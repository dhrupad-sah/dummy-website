// src/NameForm.js
import React, { useState } from 'react';

const NameForm = ({ onNameAdded }) => {
  const [inputName, setInputName] = useState('');

  const handleInputChange = (e) => {
    setInputName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNameAdded(inputName);
    setInputName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input type="text" value={inputName} onChange={handleInputChange} />
      </label>
      <button type="submit">Add Name</button>
    </form>
  );
};

export default NameForm;
