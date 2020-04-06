import React from 'react';
import HeaderCard from '../headerCard/HeaderCard';

const UserCard = (props) => {
  const { user, deleteUser } = props;

  return (
    <div className='USER__card'>
      <HeaderCard deleteUser={deleteUser} user={user} />
    </div>)

}

export default UserCard;
