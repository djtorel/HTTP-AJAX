import React, { useState, useEffect } from 'react';

const FriendForm = ({ addFriend, friend, updateFriend }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    if (friend) {
      setName(friend.name);
      setAge(friend.age);
      setEmail(friend.email);
      setIsUpdate(true);
    }
  }, [friend]);

  const inputHandler = (setter, e) => {
    const { value } = e.target;
    setter(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!isUpdate) {
      addFriend({ name, age, email });
    } else {
      updateFriend({ id: friend.id, name, age, email });
    }
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

        <button>{isUpdate ? `Update` : `Add`}</button>
      </form>
    </div>
  );
};

export default FriendForm;
