// src/NameDisplay.js
import React, { useState } from 'react';
import axios from 'axios';
import NameViewer from './NameViewer';
import NameForm from './NameForm';
import './NameDisplay.css'

const NameDisplay = () => {
  const [names, setNames] = useState([]);

  const handleFetchName = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const randomIndex = Math.floor(Math.random() * response.data.length);
      const randomName = response.data[randomIndex].name;
      setNames([...names, randomName]);
    } catch (error) {
      console.error('Error fetching dummy name:', error);
    }
  };

  const handleNameAdded = (newName) => {
    setNames([...names, newName]);
  };

  return (
    <div className="NameDisplay-container">
      <NameForm onNameAdded={handleNameAdded} />
      <button onClick={handleFetchName}>Fetch Name</button>
      <NameViewer names={names} />
    </div>
  );
};

export default NameDisplay;
