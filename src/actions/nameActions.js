// src/actions/nameActions.js
import axios from 'axios';

export const setName = (name) => ({
  type: 'SET_NAME',
  payload: name,
});

export const fetchDummyName = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const randomIndex = Math.floor(Math.random() * response.data.length);
      const randomName = response.data[randomIndex].name;
      dispatch(setName(randomName));
    } catch (error) {
      console.error('Error fetching dummy name:', error);
    }
  };
};
