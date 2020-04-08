import React from 'react';
import UserAvatar from '../userAvatar/UserAvatar.jsx'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  const { user, deleteUser } = props;
  return (
    <div>
      <header className='header'>
        <UserAvatar className='headerCard__avatar' avatar={user.avatar} />
        <div className='header__info header__item'>
          <h3>
            User: <span className='orange'>{user.name}</span> ({user.username})
          </h3>
          <div>
            email: <a className='header__email' href='#' >{user.email}</a>
          </div>
          <NavLink className='orange' to={'/' + user.id}>
            More
          </NavLink>
          <NavLink className='orange headerCard__deleteButton' to='/' onClick={() => deleteUser(user.id)}>
            delete
          </NavLink>
        </div>
      </header>
    </div>
  )
}

export default Header;
