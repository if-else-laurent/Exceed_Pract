import {
  AXIOS_USERS,
  DELETE_USER,
  ADD_USER,
  BEGIN_LOAD_AXIOS_USERS,
  ERROR_LOAD_AXIOS_USERS,
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
} from './types'
import axios from 'axios';

// export functioD_AXIOSUsers() {
//   return dispatch => {
//     dispatch({ type: BEGIN_LOAD_AXIOS_USERS });
//   D_AXIOS(`https://jsonplaceholder.typicode.com/users`)
//       .then(res => res.json())
//       .then(res =>
//         dispatch({
//           typeD_AXIOS_USERS,
//           payload: res
//         })
//       )
//       .catch(error => {
//         dispatch({ type: ERROR_LOAD_AXIOS_USERS, payload: error })  //?????????????
//       }
//       )
//   }
// };


export function axiosUsers(token) {
  return async dispatch => {
    try {
      dispatch({ type: BEGIN_LOAD_AXIOS_USERS });
      const headers = { authToken: token }
      const res = await axios.get('/get', {
        headers: headers
      })
      console.log('res', res)
      dispatch({
        type: AXIOS_USERS,
        payload: res.data.reverse(),
      });
    }
    catch (err) {
      dispatch({ type: ERROR_LOAD_AXIOS_USERS, payload: err });
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

export function deleteUser(id, token) {
  return async dispatch => {
    try {
      // const res = await axios.delete('http://localhost:5000/' + id)
      const headers = { authToken: token }
      const res = await axios.delete('/' + id, {
        headers: headers
      })
      console.log('res', res)
      dispatch({
        type: DELETE_USER,
        payload: res.data.reverse()
      })
    }
    catch (err) {
      dispatch({ type: ERROR_LOAD_AXIOS_USERS, payload: err })
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

export function addUser(newUser, token) {
  return async dispatch => {
    try {
      const headers = { authToken: token }
      const res = await axios.post('/add', newUser, {
        headers: headers
      })
      dispatch({
        type: ADD_USER,
        payload: res.data.reverse()
      })
    }
    catch (err) {
      dispatch({ type: ERROR_LOAD_AXIOS_USERS, payload: err })
    }

  }
}


export const registerUser = (newUser) => {
  return async dispatch => {
    try {
      const res = await axios.post('/auth/register', newUser)
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
      const res = await axios.post('/auth/login', user)
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