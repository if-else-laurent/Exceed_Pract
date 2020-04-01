import React, { useState, useEffect } from 'react';
import Counter from './Components/Counter.js';
import Message from './Components/Message.js';

const App = (props) => {                            // Функциональный компонент

  const [userName, setUserName] = useState('Vladislav');      // Hook useState(состояния)
  const [email, setEmail] = useState('apofiuz@gmail.com');
  const [step, setStep] = useState(1);

  const counterData = [
    {startCount: 0, stepCount: +[step]},
    // {startCount: 20, stepCount: +[step]},
  ] 

  const messageData = [
    {author: 'Andrew', message: 'Hi, how are you?' },
    {author: 'Anton', message: 'What you like?' },
  ]

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
        <p> Name from form: {userName},<br />
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
          onClick={() => {
            setEmail('');
            setUserName('')
          }}                 // Очистка всех полей
        >
          Clear All
          </button> <br />
        <button>Send</button>
      </form>
      <br/>
      <p> Counter with options </p>
        Step 
        <input 
        type='number' 
        value={step}
        onChange={(e) => setStep(e.target.value)} 
        min='0' 
        max='10'></input>
      {/* <Counter startCount = {counterData[0].startCount} stepCount = {counterData[0].stepCount}/> */}
      <Counter startCount={counterData[0].startCount} stepCount={counterData[0].stepCount} />
      {/* <p> Counter: {count} </p>
          <button onClick= {() => setCount(count + 1) }>Send</button> */}
          <br/>
      <Message messageData={messageData}/>
    </div>
  )
}



export default App;




