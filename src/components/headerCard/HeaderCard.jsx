import React from 'react';
import UserAvatar from '../userAvatar/UserAvatar.jsx'
import { NavLink } from 'react-router-dom';
import HeaderCardStyle from './HeaderCard.module.css';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../actions/userActions';


const Header = (props) => {
  const { user } = props;

  const dispatch = useDispatch();

  return (
    <div className={HeaderCardStyle.container}>
      <div className={HeaderCardStyle.inner}>
        <UserAvatar className={HeaderCardStyle.avatar} avatar={user.avatar} />
        <div className={HeaderCardStyle.inner__item}>
          <h3>
            User: <span className='orange'>{user.name}</span> ({user.username})
          </h3>
          <div>
            email: <a className='orange' href='#' >{user.email}</a>
          </div>
          <NavLink className='orange' to={'/' + user.id}>
            More
          </NavLink>
          <button className={`${HeaderCardStyle.deleteButton} orange`} to='/' onClick={() => dispatch(deleteUser(user.id))}>
            delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header;
