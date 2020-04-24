import React from 'react';
import UserList from '../../components/userList/UserList';

const UsersPage = (props) => {
  const {
    filtredUsers,
    users,
  } = props;


  return (
    <UserList filtredUsers={filtredUsers} users={users} />
  )
}

export default UsersPage

