import React from 'react';
import UserAvatar from '../userAvatar/UserAvatar';
import { NavLink } from 'react-router-dom';
import HeaderPageStyle from './HeaderPage.module.css';

const HeaderPage = (props) => {
  const {
    avatar,
    name,
    username,
    email,
  } = props;
  return (
    <header className={HeaderPageStyle.container}>
      <UserAvatar className={HeaderPageStyle.avatar} avatar={avatar} />
      <div className={HeaderPageStyle.containerItem}>
        <h3>
          <span className='orange'>{name}</span> ({username})
      </h3>
        <div>
          email: <a className='orange' href='#'>{email}</a>
        </div>
      </div>
      <NavLink className={`${HeaderPageStyle.buttonReturn} orange`} to='/'>
        Return
      </NavLink>
    </header>
  )
}

export default HeaderPage;
