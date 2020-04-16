import { FETCH_USERS, DELETE_USER, ADD_USER } from './types'

export const fetchUsers = () => (dispatch) => {
  console.log('fetch')
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(res =>
      dispatch({
        type: FETCH_USERS,
        payload: res
      })
    );
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  }
}

export const addUser = (newUser) => {
  console.log(newUser)
  return {
    type: ADD_USER,
    payload: newUser,
  }
} 