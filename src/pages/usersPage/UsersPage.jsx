import React from 'react';
import UserList from '../../components/userList/UserList';

const UsersPage = (props) => {
  const {
    users,
    filtredUsers,
    setResSearch,
    addUser,
  } = props;


  return (
    <UserList users={users} filtredUsers={filtredUsers} setResSearch={setResSearch} addUser={addUser} />
  )
}

export default UsersPage

