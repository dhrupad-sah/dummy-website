import React, { useState } from 'react';
import './Form.css';

const Form = ({ addEntity }) => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [count, setCount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntity({ name, id, count });
    setName('');
    setId('');
    setCount('');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        ID:
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <label>
        Count:
        <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
