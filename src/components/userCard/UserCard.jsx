import React from 'react';
import HeaderCard from '../headerCard/HeaderCard';
import UserCardStyle from './UserCard.module.css';

const UserCard = (props) => {
  const { user, deleteUser } = props;

  return (
    <div className={UserCardStyle.container}>
      <HeaderCard deleteUser={deleteUser} user={user} />
    </div>)

}

export default UserCard;
