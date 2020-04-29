import {
  AXIOS_USERS,
  DELETE_USER,
  ADD_USER,
  BEGIN_LOAD_FETCH_USERS,
  ERROR_LOAD_FETCH_USERS,
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
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


export function axiosUsers(token) {
  return async dispatch => {
    try {
      const headers = { authToken: token }
      const method = 'GET'
      const body = null
      dispatch({ type: BEGIN_LOAD_FETCH_USERS });
      const response = await axios.get('http://localhost:5000/', { method, body, headers });
      console.log('data', response)
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
      const res = await axios.delete('http://localhost:5000/' + id)
      dispatch({
        type: DELETE_USER,
        payload: res.data.reverse()
      })
    }
    catch (err) {
      dispatch({ type: ERROR_LOAD_FETCH_USERS, payload: err })
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
  return async dispatch => {
    try {
      const res = await axios.post('http://localhost:5000/add', newUser)
      dispatch({
        type: ADD_USER,
        payload: res.data.reverse()
      })
    }
    catch (err) {
      dispatch({ type: ERROR_LOAD_FETCH_USERS, payload: err })
    }

  }
}


export const registerUser = (newUser) => {
  return async dispatch => {
    try {
      const res = await axios.post('http://localhost:5000/auth/register', newUser)
      console.log(res.data)
      dispatch({
        type: REGISTER_USER,
      })
    }
    catch (err) {

    }
  }
}

export const loginUser = (user) => {
  return async dispatch => {
    try {
      const res = await axios.post('http://localhost:5000/auth/login', user)
      console.log('actions', res)
      dispatch({
        type: LOGIN_USER,
        payload: res.data
      })
    }
    catch (err) {

    }
  }
}

export const logOutUser = () => {
  return async dispatch => {
    try {
      dispatch({
        type: LOGOUT_USER,
        payload: null
      })
    }
    catch (err) {

    }
  }
}