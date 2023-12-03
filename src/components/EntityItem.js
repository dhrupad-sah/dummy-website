import React from 'react';
import './EntityItem.css';

const EntityItem = ({ entity }) => {
  return (
    <li className="entity-item">
      <div className="entity-info">
        <div>
          <strong>Name:</strong> {entity.name}
        </div>
        <div>
          <strong>ID:</strong> {entity.id}
        </div>
        <div>
          <strong>Count:</strong> {entity.count}
        </div>
      </div>
    </li>
  );
};

export default EntityItem;
