import React from 'react';
import UserAvatar from '../userAvatar/UserAvatar.jsx'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  const { id, avatar, name, userName, email } = props;
  console.log('id:', id)
  return (
    <div>
      <header className='header'>
        <UserAvatar className='headerCard__avatar' avatar={avatar} />
        <div className='header__info header__item'>
          <h3>
            User: <span className='orange'>{name}</span> ({userName})
          </h3>
          <div>
            email: <a className='header__email' href='#' >{email}</a>
          </div>
          <NavLink className='orange' to={'/' + id}>
            More
          </NavLink>
        </div>
      </header>
    </div>
  )
}

export default Header;
