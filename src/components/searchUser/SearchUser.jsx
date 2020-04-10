import React from 'react';

const SearchUser = (props) => {
  const { setResSearch } = props;
  return (
    <div className='user__search'>
      <h2 className='search__header'> Search </h2>
      <div className='search__inner'>
        Name: <input className='search__inner__input' type='text' onChange={(e) => setResSearch(e.target.value)} />
      </div>
    </div>
  )
}

export default SearchUser;
