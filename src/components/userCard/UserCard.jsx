import React from 'react';
import HeaderCard from '../headerCard/HeaderCard';
import UserCardStyle from './UserCard.module.css';

const UserCard = (props) => {
  const { user } = props;

  return (
    <div className={UserCardStyle.container}>
      <HeaderCard user={user} />
    </div>)

}

export default UserCard;
