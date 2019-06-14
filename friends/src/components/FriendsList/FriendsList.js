import React from 'react';
import Friend from './Friend';
import FriendForm from '../FriendForm/FriendForm';

const FriendsList = ({ friends }) => (
  <div>
    <div>
      {friends.map(({ id, name, age, email }) => (
        <Friend key={id} name={name} age={age} email={email} />
      ))}
    </div>
    <div>
      <FriendForm />
    </div>
  </div>
);

export default FriendsList;
