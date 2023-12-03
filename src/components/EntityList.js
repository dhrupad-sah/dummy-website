import React from 'react';
import { connect } from 'react-redux';
import EntityItem from './EntityItem';
import './EntityList.css';

const EntityList = ({ entities }) => {
  return (
    <div className="entity-list-container">
      <h2>Entity List</h2>
      <ul>
        {entities.map((entity) => (
          <EntityItem key={entity.id} entity={entity} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    entities: state.entities,
  };
};

export default connect(mapStateToProps)(EntityList);
