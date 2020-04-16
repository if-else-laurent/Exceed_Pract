import React, { useState } from 'react';
import SearchUserStyle from './SearchUser.module.css'
import { useDispatch } from 'react-redux';
import { searchUser } from '../../actions/userActions';

const SearchUser = (props) => {
  // const { setResSearch } = props;
  const dispatch = useDispatch();

  return (
    <div className={SearchUserStyle.container}>
      <h2 className={SearchUserStyle.header}> Search </h2>
      <div className={SearchUserStyle.inner}>
        Name: <input className='search__inner__input' type='text' onChange={(e) => dispatch(searchUser(e.target.value))} />
      </div>
    </div>
  )
}

export default SearchUser;
