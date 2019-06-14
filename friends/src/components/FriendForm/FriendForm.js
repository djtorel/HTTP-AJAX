import React, { useState } from 'react';

const FriendForm = ({ addFriend }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const inputHandler = (setter, e) => {
    const { value } = e.target;
    setter(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addFriend({ name, age, email });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => inputHandler(setName, e)}
        />

        <label>Age</label>
        <input
          type="text"
          name="age"
          value={age}
          onChange={e => inputHandler(setAge, e)}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => inputHandler(setEmail, e)}
        />

        <button>Add</button>
      </form>
    </div>
  );
};

export default FriendForm;
