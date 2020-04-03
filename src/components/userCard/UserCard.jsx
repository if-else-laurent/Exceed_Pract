import React from 'react';
import Header from '../header/Header';
import About from '../about/About';

const UserCard = (props) => {
  const { user: {
    avatar,
    name,
    username,
    email,
    phone,
    website,
    company,
    address,
  } } = props;
  return (
    <div className='USER__card'>
      <Header avatar={avatar} name={name} userName={username} email={email} />
      <About phone={phone} website={website} company={company} address={address} />
    </div>)

}

export default UserCard
