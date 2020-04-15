import { FETCH_USERS } from './types'

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