import React, { useState, useEffect } from 'react';
import UserList from '../../components/userList/UserList';

const UsersPage = (props) => {
  const {
    users,
    filtredUsers,
    setResSearch,
    deleteUser,
    addUser,
  } = props;


  return (
    <UserList users={users} filtredUsers={filtredUsers} setResSearch={setResSearch} deleteUser={deleteUser} addUser={addUser} />
  )
}

export default UsersPage

