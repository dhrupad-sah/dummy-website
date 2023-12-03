// src/NameViewer.js
import React from 'react';

const NameViewer = ({ names }) => {
  return (
    <div className="name-viewer">
      <h2>Names</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NameViewer;
