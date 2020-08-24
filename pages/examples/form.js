import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Form = () => {
  const [userName, setUserName] = useState('');

  const handleChange = evt => {
    setUserName(evt.target.value);
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const response = await axios.post('/api/hello', JSON.stringify({ userName }), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response);
    } catch (e) {
      console.log(e)
    }
    setUserName('');
  }

  return (
    <div>
      <h1>Заявка</h1>
      <form
        onSubmit={handleSubmit}
      >
        <label htmlFor="username">Имя пользователя</label>
        <input
          id="username"
          className="border"
          onChange={handleChange}
          value={userName}
          name="username"
          type="text" />
        <button
          className="px-4 py-1 bg-green-400"
        >Отправить</button>
      </form>

    </div>
  )
}

export default Form;