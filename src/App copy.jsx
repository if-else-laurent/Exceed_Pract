import React, { useState, useEffect } from 'react';

const App = (props) => {                            // Функциональный компонент

  const [userName, setUserName] = useState('Misha');        // Hook состояния
  const [email, setEmail] = useState('apofiuz@gmail.com');

const handleSubmit = (e) => {
  e.preventDefault();                             // Сбрасывает обновление при взаимодейсвтии с form
};

useEffect(() => {
  console.log('RENDERED');
}, [email]);

console.log('userName', userName);


    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input 
            name="userName" 
            type="text" 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>Email</label>
          <input 
            name="email" 
            type="text" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Log in</button>
        </form>
      </div>
    )
  }



export default App;




