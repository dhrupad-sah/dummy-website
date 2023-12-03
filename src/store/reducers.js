const initialState = {
    entities: [],
  };
  
  const entityReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ENTITY':
        return {
          entities: [...state.entities, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default entityReducer;
  