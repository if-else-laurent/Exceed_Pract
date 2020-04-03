import React from 'react';
import UserAvatar from '../userAvatar/UserAvatar.jsx'

const Header = (props) => {
  const { avatar, name, userName, email } = props;
  return (
    <div>
      <header className='header'>
        <UserAvatar avatar={avatar} />
        <div className='header__info header__item'>
          <h3>
            User: <span className='orange'>{name}</span> ({userName})
          </h3>
          <div>
            email: <a className='header__email' href='#'>{email}</a>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;
