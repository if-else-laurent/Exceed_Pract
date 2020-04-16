import React from 'react';
import UserList from '../../components/userList/UserList';

const UsersPage = (props) => {
  const {
    filtredUsers,
  } = props;


  return (
    <UserList filtredUsers={filtredUsers} />
  )
}

export default UsersPage

