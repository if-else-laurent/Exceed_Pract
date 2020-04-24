import {
  AXIOS_USERS,
  DELETE_USER,
  ADD_USER,
  BEGIN_LOAD_FETCH_USERS,
  ERROR_LOAD_FETCH_USERS,
} from './types'
import axios from 'axios';

// export function fetchUsers() {
//   return dispatch => {
//     dispatch({ type: BEGIN_LOAD_FETCH_USERS });
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//       .then(res => res.json())
//       .then(res =>
//         dispatch({
//           type: FETCH_USERS,
//           payload: res
//         })
//       )
//       .catch(error => {
//         dispatch({ type: ERROR_LOAD_FETCH_USERS, payload: error })  //?????????????
//       }
//       )
//   }
// };

export function axiosUsers() {
  return async dispatch => {
    try {
      dispatch({ type: BEGIN_LOAD_FETCH_USERS });
      const response = await getData('http://localhost:5000/');
      console.log(response)
      dispatch({
        type: AXIOS_USERS,
        payload: response.data.reverse(),
      });
    }
    catch (err) {
      dispatch({ type: ERROR_LOAD_FETCH_USERS, payload: err });
    }
  }
};

async function getData(url) {
  const res = await axios.get(url);
  return res;
}

// https://jsonplaceholder.typicode.com/users
// http://localhost:5000/




// export const deleteUser = (id) => {
//   return {
//     type: DELETE_USER,
//     payload: id,
//   }
// }

export const deleteUser = (id) => {
  return async dispatch => {
    try {
      await axios.delete('http://localhost:5000/' + id)
      dispatch({
        type: DELETE_USER,
        payload: id
      })
    }
    catch (err) {
    }
  }
}

// export const addUser = (newUser) => {
//   console.log(newUser)
//   return {
//     type: ADD_USER,
//     payload: newUser,
//   }
// }

export const addUser = (newUser) => {
  console.log(newUser)
  return async dispatch => {
    try {
      await axios.post('http://localhost:5000/add', newUser)
      dispatch({
        type: ADD_USER,
        payload: newUser
      })
    }
    catch (err) {
    }

  }
}
