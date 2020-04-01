import React, { useState, useEffect } from 'react';

const App = (props) => {                            // Функциональный компонент

  const [userName, setUserName] = useState('Vladislav');      // Hook useState(состояния)
  const [email, setEmail] = useState('apofiuz@gmail.com');
  const [count, setCount] = useState(0);

 
const handleSubmit = (e) => {
  e.preventDefault();             // Отключение обновления страницы при использовании кнопки в form
};

useEffect(() => {
  console.log('Rendered');
}, [userName, email]);
  
// console.log('userName', userName);      // console.log(obj1, obj2 ....)
  
  
  return (
      <div>
        <h1>Log in</h1>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <p> Name from form: {userName},<br/> 
          Email from form: {email} </p>
          <input 
            type='text'
            value={userName}                                  // Содержание input
            onChange={(e) => setUserName(e.target.value)}     // Метод изменения состояния 
          />
          {/* <button 
            onClick = {() => setUserName('')}                 // Очистка поля UserName
                                                              // В скобках функции Set...() вводиться значение или метод изменения сначения
          > 
            Clear 
          </button>   */}
          <label>email</label>
          <input 
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button 
            onClick = {() => {
            setEmail('');
            setUserName('')
            }}                 // Очистка всех полей
          > 
            Clear All 
          </button> <br/>
          <button>Send</button>
        </form>
        <p> Counter: {count} </p>
          <button onClick= {() => setCount(count + 1) }>Send</button>
      </div>
    )
  }



export default App;




