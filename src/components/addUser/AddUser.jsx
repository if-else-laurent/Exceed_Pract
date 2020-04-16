import React, { useState } from 'react';
import AddUserStyle from './AddUser.module.css';
import { useDispatch } from 'react-redux';
import { addUser } from '../../actions/userActions';



const AddUser = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();



  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      const id = Math.random() * 10;
      dispatch(addUser({ id, name, email }));
    }
    return
  }


  return (
    <div className={AddUserStyle.container}>
      <h2 className={AddUserStyle.header}> Add New User </h2>
      <div className={AddUserStyle.inner}>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'> Name: </label>
          <input type='text' name='name' onChange={(e) => setName(e.target.value)} />
          <label htmlFor='email'> Email: </label>
          <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} />
          <button className={AddUserStyle.button}> Add User </button>
        </form>
      </div>
    </div>
  )
}

export default AddUser;
