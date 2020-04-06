import React from 'react';
import UserAvatar from '../userAvatar/UserAvatar';
import { NavLink } from 'react-router-dom';

const HeaderPage = (props) => {
  const {
    avatar,
    name,
    username,
    email,
    setResSearch,
  } = props;
  return (
    <header className='header__page'>
      <UserAvatar className='headerPage__avatar' avatar={avatar} />
      <div className='header__info header__item'>
        <h3>
          <span className='orange'>{name}</span> ({username})
      </h3>
        <div>
          email: <a className='header__email' href='#'>{email}</a>
        </div>
      </div>
      <NavLink className='user__page__buttonReturn orange' to='/' onClick={() => setResSearch('')}>
        Return
      </NavLink>
    </header>
  )
}

export default HeaderPage;
