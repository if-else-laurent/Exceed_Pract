import React from 'react';
import HeaderCard from '../headerCard/HeaderCard';

const UserCard = (props) => {
  const { user: {
    id,
    avatar,
    name,
    username,
    email
  } } = props;
  return (
    <div className='USER__card'>
      <HeaderCard id={id} avatar={avatar} name={name} userName={username} email={email} />
    </div>)

}

export default UserCard;
