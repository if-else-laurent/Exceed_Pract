import React, { useState } from 'react';
import AddUserStyle from './AddUser.module.css';
import { NavLink } from 'react-router-dom';

const AddUser = (props) => {
  const { addUser } = props;
  // const [newUser, setNewUser] = useState(
  //   {
  //     name: null,
  //     email: null,
  //   }
  // );
  const [newName, setNewName] = useState({ name: null });
  const [newEmail, setNewEmail] = useState({ email: null });
  // const handleChangeName = (e) => {
  //   setNewName({ [e.target.id]: e.target.value })
  // }
  // const handleChangeEmail = (e) => {
  //   setNewEmail({ [e.target.id]: e.target.value })
  // }

  const newUser = {
    name: newName.name,
    email: newEmail.email,
  }

  const handleAdd = (e) => {
    e.preventDefault();
    addUser(newUser);
    console.log('NewUserId', newUser);
  }

  // console.log('name', newName);
  // console.log('name', newEmail);
  // console.log('new', newUser);


  // const handleChange = (e) => {
  //   setNewUser({ [e.target.id]: e.target.value })
  // }
  // console.log('NewUser', newUser)

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   addUser(newUser);
  // }

  return (
    <div className={AddUserStyle.container}>
      <h2 className={AddUserStyle.header}> Add New User </h2>
      <div className={AddUserStyle.inner}>
        <form>
          <label htmlFor='name'> Name: </label>
          <input type='text' id='name' onChange={(e) => setNewName({ [e.target.id]: e.target.value })} />
          <label htmlFor='email'> Email: </label>
          <input type='text' id='email' onChange={(e) => setNewEmail({ [e.target.id]: e.target.value })} />
          <NavLink className={AddUserStyle.button} onClick={handleAdd} to='/'> Add User </NavLink>
        </form>
      </div>
    </div>
  )
}

export default AddUser;
